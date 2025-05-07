import React, { useEffect, useState, useMemo } from "react";
import {
  Table,
  Input,
  Cascader,
  Select,
  Space,
  Typography,
  Spin,
  Tag,
} from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import TopImage from "../../components/TopImage";
import headerImg from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
import { addressServer } from "../../config";

import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import jpg from "../../img/jpg.svg";

const icons = { pdf, doc, docx, rar, xls, jpg };
const { Search } = Input;
const { Option } = Select;
const { Paragraph } = Typography;
const palette = ["blue", "green", "volcano", "purple", "gold"];

// Массив из путей категории (для фильтрации)
const buildCategoryArray = (cat) => {
  if (!cat) return [];
  const parent = cat.parent ? buildCategoryArray(cat.parent) : [];
  return [...parent, cat.title];
};

// Построение дерева для Cascader
const buildTree = (paths) => {
  const root = {};
  paths.forEach((p) =>
    p.split(" / ").reduce((n, seg, i, arr) => {
      n.children ??= {};
      n.children[seg] ??= {
        title: seg,
        value: arr.slice(0, i + 1).join(" / "),
      };
      return n.children[seg];
    }, root)
  );
  const walk = (obj) =>
    Object.values(obj.children ?? {}).map((n) => ({
      label: n.title,
      value: n.value,
      children: walk(n),
    }));
  return walk(root);
};

function forceDownload(url, filename = "file") {
  fetch(url, { mode: "cors" })
    .then((r) => r.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(console.error);
}

export default function Test() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  useEffect(() => {
    fetch(
      `${addressServer}/api/information-files?populate[0]=file&populate[1]=informacziya_kategorii.parent&pagination[pageSize]=1000&sort=year:desc`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        if (!Array.isArray(data)) return setRows([]);
        setRows(
          data.map((it) => ({
            key: it.id,
            title: it.title ?? "",
            type: it.type ?? "",
            year: Number(String(it.year ?? "").replace(/[^\d]/g, "")) || "",
            categoryArray: buildCategoryArray(
              it.informacziya_kategorii ?? null
            ), // массив категорий
            url: it.file?.url ? addressServer + it.file.url : "",
          }))
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cascaderOptions = useMemo(() => {
    const paths = [
      ...new Set(rows.map((r) => r.categoryArray.join(" / "))),
    ].filter((p) => p && p !== "—");
    return buildTree(paths);
  }, [rows]);

  const yearOptions = useMemo(() => {
    const set = new Set(rows.map((r) => r.year).filter(Boolean));
    return ["all", ...[...set].sort((a, b) => b - a)];
  }, [rows]);

  const dataSource = useMemo(
    () =>
      rows.filter(({ title, categoryArray, year }) => {
        //если "all" — пропускаем, иначе ищем совпадение в пути
        const okCat =
          catFilter === "all" ||
          categoryArray.some((cat) => catFilter.includes(cat));
          // categoryArray.join(" / ").startsWith(catFilter)
          // Проверяем год
        const okYear = yearFilter === "all" || year === yearFilter;
        const okText = title.toLowerCase().includes(searchText.toLowerCase());
        return okCat && okYear && okText;
      }),
    [rows, catFilter, yearFilter, searchText]
  );

  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      width: 640,
      sorter: (a, b) => a.title.localeCompare(b.title),

      render: (_, rec) => (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {icons[rec.type] && (
            <img src={icons[rec.type]} alt="" style={{ width: 16 }} />
          )}

          <span style={{ flex: 1, wordBreak: "break-word" }}>{rec.title}</span>

          {/* открыть */}
          <a
            href={rec.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Открыть"
            style={{ fontSize: 16 }}
          >
            <EyeOutlined />
          </a>

          {/* скачать */}
          <span
            title="Скачать"
            style={{ fontSize: 16, cursor: "pointer" }}
            onClick={() =>
              forceDownload(
                rec.url,
                `${rec.title}.${rec.type}`.replace(/[\\/:*?"<>|]+/g, "_")
              )
            }
          >
            <DownloadOutlined />
          </span>
        </div>
      ),
    },

    {
      title: "Категория",
      dataIndex: "categoryArray",
      width: 380,
      render: (val) =>
        val.map((seg, i) => (
          <Tag
            key={i}
            color={palette[i % palette.length]}
            style={{ marginTop: 4 }}
          >
            {seg}
          </Tag>
        )),
    },

    { title: "Тип", dataIndex: "type", width: 90, align: "center" },
  ];

  /* UI */
  return (
    <>
      <TopImage image={headerImg} title="Раскрытие информации" />

      <div className="page-grid__content">
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          {/* фильтры */}
          <Space wrap>
            <Search
              placeholder="Поиск…"
              allowClear
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 280 }}
            />

            <Cascader
              style={{ minWidth: 260, flex: 1 }}
              options={cascaderOptions}
              placeholder="Все категории"
              allowClear
              value={catFilter === "all" ? undefined : catFilter.split(" / ")}
              onChange={(v) => setCatFilter(v?.length ? v.join(" / ") : "all")}
              showSearch
            />

            <Select
              value={yearFilter}
              onChange={setYearFilter}
              style={{ width: 140 }}
            >
              {yearOptions.map((y) => (
                <Option key={y} value={y}>
                  {y === "all" ? "Все годы" : y}
                </Option>
              ))}
            </Select>
          </Space>

          {/* таблица */}
          <Spin spinning={loading}>
            <Table
              columns={columns}
              dataSource={dataSource}
              rowKey="key"
              pagination={{
                pageSize: 25,
                showSizeChanger: true,
                locale: { items_per_page: "строк" },
              }}
              size="middle"
            />
          </Spin>
        </Space>
      </div>
    </>
  );
}


// import React, { useEffect, useState, useMemo } from "react";
// import {
//   Table,
//   Input,
//   Cascader,
//   Select,
//   Space,
//   Typography,
//   Spin,
//   Tag,
// } from "antd";
// import { DownloadOutlined } from "@ant-design/icons";
// import TopImage from "../../components/TopImage";
// import headerImg from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
// import { addressServer } from "../../config";

// import pdf from "../../img/pdf.svg";
// import doc from "../../img/doc.svg";
// import docx from "../../img/docx.svg";
// import rar from "../../img/rar.svg";
// import xls from "../../img/xls.svg";
// import jpg from "../../img/jpg.svg";

// const fileIcons = { pdf, doc, docx, rar, xls, jpg };

// const { Search } = Input;
// const { Option } = Select;
// const { Text } = Typography;

// const buildPath = (cat) => {
//   if (!cat) return "—";
//   const parent = cat.parent?.parent ? null : cat.parent;
//   return parent ? `${parent.title} / ${cat.title}` : cat.title;
// };

// const buildTree = (paths) => {
//   const root = {};
//   paths.forEach((p) =>
//     p.split(" / ").reduce((n, s, i, arr) => {
//       n.children ??= {};
//       n.children[s] ??= { title: s, value: arr.slice(0, i + 1).join(" / ") };
//       return n.children[s];
//     }, root)
//   );
//   const walk = (o) =>
//     Object.values(o.children ?? {}).map((n) => ({
//       label: n.title,
//       value: n.value,
//       children: walk(n),
//     }));
//   return walk(root);
// };

// const palette = ["blue", "green", "volcano", "purple", "gold"];

// export default function Test() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [catFilter, setCatFilter] = useState("all");
//   const [yearFilter, setYearFilter] = useState("all");

//   useEffect(() => {
//     fetch(
//       `${addressServer}/api/information-files` +
//         "?populate[0]=file" +
//         "&populate[1]=informacziya_kategorii.parent" +
//         "&pagination[pageSize]=1000" +
//         "&sort=year:desc"
//     )
//       .then((r) => r.json())
//       .then(({ data }) => {
//         if (!Array.isArray(data)) {
//           setRows([]);
//           return;
//         }

//         const mapped = data.map((item) => {
//           const cat = item.informacziya_kategorii ?? null;
//           return {
//             key: item.id,
//             title: item.title ?? "",
//             type: item.type ?? "",
//             year: Number(String(item.year ?? "").replace(/[^\d]/g, "")) || 0,
//             category: buildPath(cat),
//             url: item.file?.url ? addressServer + item.file.url : "",
//           };
//         });

//         setRows(mapped);
//       })
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   const categoryPaths = useMemo(
//     () =>
//       [...new Set(rows.map((r) => r.category))].filter(
//         (p) => p && p !== "—" && !p.startsWith("undefined")
//       ),
//     [rows]
//   );
//   const cascaderOptions = useMemo(
//     () => buildTree(categoryPaths),
//     [categoryPaths]
//   );

//   const yearOptions = useMemo(() => {
//     const set = new Set(rows.map((r) => r.year).filter(Boolean));
//     return ["all", ...[...set].sort((a, b) => b - a)];
//   }, [rows]);

//   const dataSource = useMemo(
//     () =>
//       rows.filter((r) => {
//         const okCat =
//           catFilter === "all" ||
//           r.category === catFilter ||
//           r.category.startsWith(`${catFilter} / `); // Убрать сложные проверки

//         const okYear = yearFilter === "all" || r.year === yearFilter;
//         const okText = r.title.toLowerCase().includes(searchText.toLowerCase());
//         return okCat && okYear && okText;
//       }),
//     [rows, catFilter, yearFilter, searchText]
//   );

//   const columns = [
//     {
//       title: "Название",
//       dataIndex: "title",
//       width: 480,
//       ellipsis: true,
//       sorter: (a, b) => a.title.localeCompare(b.title),
//       render: (_, rec) => (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           {fileIcons[rec.type] && (
//             <img
//               src={fileIcons[rec.type]}
//               alt={rec.type}
//               style={{ width: 16, height: 16, marginRight: 8 }}
//             />
//           )}
//           <div style={{ flex: 1 }}>
//             <Text title={rec.title}>{rec.title}</Text>
//           </div>
//           {rec.url && (
//             <a
//               href={rec.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ marginLeft: 12 }}
//             >
//               <DownloadOutlined />
//             </a>
//           )}
//         </div>
//       ),
//     },
//     {
//       title: "Категория",
//       dataIndex: "category",
//       width: 420,
//       render: (p) =>
//         p.split(" / ").map((s, i) => (
//           <Tag
//             key={i}
//             color={palette[i % palette.length]}
//             style={{ marginLeft: i ? 8 : 0 }}
//           >
//             {s}
//           </Tag>
//         )),
//     },
//     { title: "Тип", dataIndex: "type", width: 90 },
//   ];

//   return (
//     <>
//       <TopImage image={headerImg} title="Раскрытие информации" />
//       <div className="page-grid__content">
//         <Space direction="vertical" style={{ width: "100%" }} size="large">
//           <Space wrap>
//             <Search
//               placeholder="Поиск…"
//               allowClear
//               onChange={(e) => setSearchText(e.target.value)}
//               style={{ width: 280 }}
//             />
//             <Cascader
//               style={{ width: 920 }}
//               options={cascaderOptions}
//               placeholder="Все категории"
//               allowClear
//               value={catFilter === "all" ? undefined : catFilter.split(" / ")}
//               onChange={(v) => setCatFilter(v?.length ? v.join(" / ") : "all")}
//               showSearch
//             />
//             <Select
//               value={yearFilter}
//               onChange={setYearFilter}
//               style={{ width: 140 }}
//             >
//               {yearOptions.map((v) => (
//                 <Option key={v} value={v}>
//                   {v === "all" ? "Все годы" : v}
//                 </Option>
//               ))}
//             </Select>
//           </Space>
//           <Spin spinning={loading}>
//             <Table
//               columns={columns}
//               dataSource={dataSource}
//               rowKey="key"
//               pagination={{
//                 pageSize: 25,
//                 showSizeChanger: true,
//                 locale: { items_per_page: "строк" },
//               }}
//               size="middle"
//               scroll={{ x: "max-content" }}
//             />
//           </Spin>
//         </Space>
//       </div>
//     </>
//   );
// }

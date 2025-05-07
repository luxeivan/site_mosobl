import React, { useEffect, useMemo, useState } from "react";
import {
  Layout,
  Input,
  List,
  Typography,
  Button,
  Modal,
  Divider,
  Space,
} from "antd";
import {
  FilePdfOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FileUnknownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";

const { Sider, Content } = Layout;
const { Search } = Input;
const { Title, Text } = Typography;

// фирменный оранжевый из макетов
const highlightColor = "#E37021";

// Быстрый хелпер для иконки по расширению
const iconByType = (ext) => {
  switch ((ext || "").toLowerCase()) {
    case "pdf":
      return <FilePdfOutlined />;
    case "doc":
    case "docx":
      return <FileWordOutlined />;
    case "xls":
    case "xlsx":
      return <FileExcelOutlined />;
    case "jpg":
    case "jpeg":
    case "png":
      return <FileImageOutlined />;
    default:
      return <FileUnknownOutlined />;
  }
};

const extractDate = (name) => {
  const match = (name || "").match(/[0-3][0-9].[0-1][0-9].2[0-9]{3}/);
  if (!match) return 0;
  const [d, m, y] = match[0].split(".");
  return new Date(y, m - 1, d).getTime();
};

const normalizeDoc = (raw) => {
  if (!raw) return null;
  if (raw.name && raw.file) {
    return {
      id: raw.id,
      name: raw.name,
      type: raw.type || raw.ext || "",
      url: raw.file.url,
      size: raw.file.size,
      ts: extractDate(raw.name),
    };
  }
  if (raw.attributes) {
    const a = raw.attributes;
    return {
      id: raw.id,
      name: a.name,
      type: a.type || a.ext || "",
      url: a.url,
      size: a.size,
      ts: extractDate(a.name),
    };
  }
  return null;
};

export default function InformationDisclosureTest() {
  const [categories, setCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [sortMode, setSortMode] = useState("name");
  const [globalVisible, setGlobalVisible] = useState(false);
  const [globalQuery, setGlobalQuery] = useState("");

  useEffect(() => {
    fetch(
      `${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
    )
      .then((r) => r.json())
      .then((json) => {
        const flat = (json.data || []).map((i) =>
          i.attributes ? { id: i.id, ...i.attributes } : i
        );
        flat.sort((a, b) => (a.sort || 0) - (b.sort || 0));
        setCategories(flat);
      })
      .catch(console.error);
  }, []);

  const currentCat = useMemo(
    () => categories.find((c) => c.id === selectedCatId),
    [categories, selectedCatId]
  );

  const catGroups = useMemo(() => {
    if (!currentCat) return [];
    const groups = (currentCat.groupInfo || []).map((g) =>
      g.attributes ? { id: g.id, ...g.attributes } : g
    );
    return groups.map((g) => {
      let rawDocs = [];
      if (Array.isArray(g.list_files)) rawDocs = g.list_files;
      else if (Array.isArray(g.list_files?.data)) rawDocs = g.list_files.data;
      const docs = rawDocs
        .map(normalizeDoc)
        .filter(Boolean)
        .sort((a, b) =>
          sortMode === "name"
            ? a.name.localeCompare(b.name, "ru")
            : (b.ts || 0) - (a.ts || 0)
        );
      return { ...g, docs };
    });
  }, [currentCat, sortMode]);

  const globalResults = useMemo(() => {
    if (!globalQuery.trim()) return [];
    const res = [];
    categories.forEach((cat) => {
      const groups = (cat.groupInfo || []).map((g) =>
        g.attributes ? { id: g.id, ...g.attributes } : g
      );
      groups.forEach((g) => {
        let rawDocs = [];
        if (Array.isArray(g.list_files)) rawDocs = g.list_files;
        else if (Array.isArray(g.list_files?.data)) rawDocs = g.list_files.data;
        rawDocs
          .map(normalizeDoc)
          .filter(Boolean)
          .forEach((doc) => {
            if (doc.name.toLowerCase().includes(globalQuery.toLowerCase())) {
              res.push({ ...doc, catTitle: cat.title });
            }
          });
      });
    });
    return res;
  }, [globalQuery, categories]);

  const buttonStyleActive = {
    background: highlightColor,
    borderColor: highlightColor,
    color: "#fff",
  };
  const buttonStyleInactive = {
    background: "transparent",
    borderColor: highlightColor,
    color: highlightColor,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imgb04877a3110d6b586d064fc3a2853c70}
        title="Раскрытие информации"
      />

      <Layout style={{ minHeight: "calc(100vh - 300px)", background: "#fff" }}>
        <Sider width={320} style={{ background: "#fafafa", padding: 16 }}>
          <Search
            placeholder="Поиск по всем файлам"
            enterButton={<SearchOutlined />}
            allowClear
            onSearch={(v) => {
              setGlobalQuery(v);
              setGlobalVisible(true);
            }}
            style={{ marginBottom: 16 }}
          />
          <Divider style={{ margin: "8px 0" }} />
          <List
            size="small"
            dataSource={categories}
            renderItem={(item) => (
              <List.Item
                style={{
                  cursor: "pointer",
                  padding: "8px 12px",
                  background:
                    item.id === selectedCatId ? highlightColor : "transparent",
                  borderRadius: 4,
                }}
                onClick={() => setSelectedCatId(item.id)}
              >
                <Text
                  style={{
                    color: item.id === selectedCatId ? "#fff" : undefined,
                  }}
                >
                  {item.title}
                </Text>
              </List.Item>
            )}
          />
        </Sider>

        <Layout>
          <Content style={{ padding: 24, overflowY: "auto" }}>
            {!currentCat && (
              <Title level={3} style={{ textAlign: "center", marginTop: 60 }}>
                Выберите категорию…
              </Title>
            )}
            {currentCat && (
              <>
                <Title level={3}>{currentCat.title}</Title>
                <Space style={{ marginBottom: 24 }}>
                  <Button
                    style={
                      sortMode === "name"
                        ? buttonStyleActive
                        : buttonStyleInactive
                    }
                    onClick={() => setSortMode("name")}
                  >
                    Сортировать по названию
                  </Button>
                  <Button
                    style={
                      sortMode === "date"
                        ? buttonStyleActive
                        : buttonStyleInactive
                    }
                    onClick={() => setSortMode("date")}
                  >
                    Сортировать по дате
                  </Button>
                </Space>
                {catGroups.map((g) => (
                  <div key={g.id} style={{ marginBottom: 32 }}>
                    <Title level={4}>{g.title}</Title>
                    <List
                      locale={{ emptyText: "No data" }}
                      itemLayout="horizontal"
                      size="small"
                      dataSource={g.docs}
                      renderItem={(doc) => {
                        const docUrl = doc.url || doc.file?.url || "";
                        const docSize = doc.size || doc.file?.size || 0;
                        return (
                          <List.Item>
                            <List.Item.Meta
                              avatar={iconByType(doc.type)}
                              title={
                                <a
                                  href={`${addressServer}${docUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {doc.name}
                                </a>
                              }
                              description={`${doc.type || "file"} ${Math.round(
                                docSize
                              )}kb`}
                            />
                          </List.Item>
                        );
                      }}
                    />
                  </div>
                ))}
              </>
            )}
          </Content>
        </Layout>
      </Layout>

      <Modal
        open={globalVisible}
        onCancel={() => setGlobalVisible(false)}
        footer={null}
        title="Поиск по названию файла во всех категориях"
        width={800}
      >
        <Search
          placeholder="Введите имя файла"
          allowClear
          value={globalQuery}
          onChange={(e) => setGlobalQuery(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <List
          locale={{ emptyText: "Ничего не найдено" }}
          itemLayout="horizontal"
          dataSource={globalResults}
          renderItem={(doc) => {
            const docUrl = doc.url || doc.file?.url || "";
            const docSize = doc.size || doc.file?.size || 0;
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={iconByType(doc.type)}
                  title={
                    <a
                      href={`${addressServer}${docUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.name}
                    </a>
                  }
                  description={`${doc.catTitle} • ${
                    doc.type || "file"
                  } ${Math.round(docSize)}kb`}
                />
              </List.Item>
            );
          }}
        />
      </Modal>
    </motion.div>
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
// import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
// import TopImage from "../../components/TopImage";
// import headerImg from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
// import { addressServer } from "../../config";

// import pdf from "../../img/pdf.svg";
// import doc from "../../img/doc.svg";
// import docx from "../../img/docx.svg";
// import rar from "../../img/rar.svg";
// import xls from "../../img/xls.svg";
// import jpg from "../../img/jpg.svg";

// const icons = { pdf, doc, docx, rar, xls, jpg };
// const { Search } = Input;
// const { Option } = Select;
// const { Paragraph } = Typography;
// const palette = ["blue", "green", "volcano", "purple", "gold"];

// // Массив из путей категории (для фильтрации)
// const buildCategoryArray = (cat) => {
//   if (!cat) return [];
//   const parent = cat.parent ? buildCategoryArray(cat.parent) : [];
//   return [...parent, cat.title];
// };

// // Построение дерева для Cascader
// const buildTree = (paths) => {
//   const root = {};
//   paths.forEach((p) =>
//     p.split(" / ").reduce((n, seg, i, arr) => {
//       n.children ??= {};
//       n.children[seg] ??= {
//         title: seg,
//         value: arr.slice(0, i + 1).join(" / "),
//       };
//       return n.children[seg];
//     }, root)
//   );

//   const walk = (obj) =>
//     Object.values(obj.children ?? {}).map((n) => ({
//       label: n.title,
//       value: n.value,
//       children: walk(n),
//     }));
//   return walk(root);
// };

// function forceDownload(url, filename = "file") {
//   fetch(url, { mode: "cors" })
//     .then((r) => r.blob())
//     .then((blob) => {
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = filename;
//       link.click();
//       URL.revokeObjectURL(link.href);
//     })
//     .catch(console.error);
// }

// export default function Test() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [catFilter, setCatFilter] = useState("all");
//   const [yearFilter, setYearFilter] = useState("all");

//   useEffect(() => {
//     fetch(
//       `${addressServer}/api/information-files?populate[0]=file&populate[1]=informacziya_kategorii.parent&pagination[pageSize]=100&sort=year:desc`
//     )
//       .then((r) => r.json())
//       .then(({ data }) => {
//         if (!Array.isArray(data)) return setRows([]);
//         setRows(
//           data.map((it) => ({
//             key: it.id,
//             title: it.title ?? "",
//             type: it.type ?? "",
//             year: Number(String(it.year ?? "").replace(/[^\d]/g, "")) || "",
//             categoryArray: buildCategoryArray(
//               it.informacziya_kategorii ?? null
//             ), // массив категорий
//             url: it.file?.url ? addressServer + it.file.url : "",
//           }))
//         );
//       })
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   const cascaderOptions = useMemo(() => {
//     const paths = [
//       ...new Set(rows.map((r) => r.categoryArray.join(" / "))),
//     ].filter((p) => p && p !== "—");
//     return buildTree(paths);
//   }, [rows]);

//   const yearOptions = useMemo(() => {
//     const set = new Set(rows.map((r) => r.year).filter(Boolean));
//     return ["all", ...[...set].sort((a, b) => b - a)];
//   }, [rows]);

//   const dataSource = useMemo(
//     () =>
//       rows.filter(({ title, categoryArray, year }) => {
//         //если "all" — пропускаем, иначе ищем совпадение в пути
//         const okCat =
//           catFilter === "all" ||
//           categoryArray.some((cat) => catFilter.includes(cat));
//           // categoryArray.join(" / ").startsWith(catFilter)
//           // Проверяем год
//         const okYear = yearFilter === "all" || year === yearFilter;
//         const okText = title.toLowerCase().includes(searchText.toLowerCase());
//         return okCat && okYear && okText;
//       }),
//     [rows, catFilter, yearFilter, searchText]
//   );

//   const columns = [
//     {
//       title: "Название",
//       dataIndex: "title",
//       width: 640,
//       sorter: (a, b) => a.title.localeCompare(b.title),

//       render: (_, rec) => (
//         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//           {icons[rec.type] && (
//             <img src={icons[rec.type]} alt="" style={{ width: 16 }} />
//           )}

//           <span style={{ flex: 1, wordBreak: "break-word" }}>{rec.title}</span>

//           {/* открыть */}
//           <a
//             href={rec.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             title="Открыть"
//             style={{ fontSize: 16 }}
//           >
//             <EyeOutlined />
//           </a>

//           {/* скачать */}
//           <span
//             title="Скачать"
//             style={{ fontSize: 16, cursor: "pointer" }}
//             onClick={() =>
//               forceDownload(
//                 rec.url,
//                 `${rec.title}.${rec.type}`.replace(/[\\/:*?"<>|]+/g, "_")
//               )
//             }
//           >
//             <DownloadOutlined />
//           </span>
//         </div>
//       ),
//     },

//     {
//       title: "Категория",
//       dataIndex: "categoryArray",
//       width: 380,
//       render: (val) =>
//         val.map((seg, i) => (
//           <Tag
//             key={i}
//             color={palette[i % palette.length]}
//             style={{ marginTop: 4 }}
//           >
//             {seg}
//           </Tag>
//         )),
//     },

//     { title: "Тип", dataIndex: "type", width: 90, align: "center" },
//   ];

//   /* UI */
//   return (
//     <>
//       <TopImage image={headerImg} title="Раскрытие информации" />

//       <div className="page-grid__content">
//         <Space direction="vertical" style={{ width: "100%" }} size="large">
//           {/* фильтры */}
//           <Space wrap>
//             <Search
//               placeholder="Поиск…"
//               allowClear
//               onChange={(e) => setSearchText(e.target.value)}
//               style={{ width: 280 }}
//             />

//             <Cascader
//               style={{ minWidth: 260, flex: 1 }}
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
//               {yearOptions.map((y) => (
//                 <Option key={y} value={y}>
//                   {y === "all" ? "Все годы" : y}
//                 </Option>
//               ))}
//             </Select>
//           </Space>

//           {/* таблица */}
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
//             />
//           </Spin>
//         </Space>
//       </div>
//     </>
//   );
// }

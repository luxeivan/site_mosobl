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
import { DownloadOutlined } from "@ant-design/icons";
import TopImage from "../../components/TopImage";
import headerImg from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
import { addressServer } from "../../config";

const { Search } = Input;
const { Option } = Select;
const { Text } = Typography;

/* ───────── helpers ───────── */

const buildPath = (catAttr) => {
  if (!catAttr) return "—";
  const rawParent = catAttr.parents;
  const parentAttr = rawParent?.data?.attributes ?? rawParent ?? null;
  const parentTitle = parentAttr?.title;
  return parentTitle ? `${parentTitle} / ${catAttr.title}` : catAttr.title;
};

const buildTree = (paths) => {
  const root = {};
  paths.forEach((p) =>
    p.split(" / ").reduce((n, s, i, arr) => {
      n.children ??= {};
      n.children[s] ??= { title: s, value: arr.slice(0, i + 1).join(" / ") };
      return n.children[s];
    }, root)
  );
  const walk = (o) =>
    Object.values(o.children ?? {}).map((n) => ({
      label: n.title,
      value: n.value,
      children: walk(n),
    }));
  return walk(root);
};

const palette = ["blue", "green", "volcano", "purple", "gold"];

/* ───────── component ───────── */

export default function Test() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  /* load from Strapi */
  useEffect(() => {
    fetch(
      `${addressServer}/api/information-files` +
        "?populate[0]=file" +
        "&populate[1]=informacziya_kategorii.parents" +
        "&pagination[pageSize]=1000" +
        "&sort=year:desc"
    )
      .then((r) => r.json())
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          //  защита от 403/500
          setRows([]);
          return;
        }

        const mapped = data.map((item) => {
          // сама категория
          const cat = item.informacziya_kategorii;

          // Первый родитель: либо parents[0], либо parent
          const parent =
            cat?.parents?.[0] ?? // new populate → parents (массив)
            cat?.parent ?? // old populate → parent  (объект)
            null;

          const categoryStr = parent
            ? `${parent.title} / ${cat?.title ?? "—"}`
            : cat?.title ?? "—";

          return {
            key: item.id,
            title: item.title ?? "",
            type: item.type ?? "",
            year: Number(String(item.year ?? "").replace(/[^\d]/g, "")) || 0,
            category: categoryStr,
            url: item.file?.url ? addressServer + item.file.url : "",
          };
        });

        setRows(mapped);
      })

      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  /* dictionaries */
  const categoryPaths = useMemo(
    () =>
      [...new Set(rows.map((r) => r.category))].filter(
        (p) => p && p !== "—" && !p.startsWith("undefined")
      ),
    [rows]
  );
  const cascaderOptions = useMemo(
    () => buildTree(categoryPaths),
    [categoryPaths]
  );

  const yearOptions = useMemo(() => {
    const set = new Set(rows.map((r) => r.year).filter(Boolean));
    return ["all", ...[...set].sort((a, b) => b - a)];
  }, [rows]);

  /* filtering */
  const dataSource = useMemo(
    () =>
      rows.filter((r) => {
        const okCat = catFilter === "all" || r.category === catFilter;
        const okYear = yearFilter === "all" || r.year === yearFilter;
        const okText = r.title.toLowerCase().includes(searchText.toLowerCase());
        return okCat && okYear && okText;
      }),
    [rows, catFilter, yearFilter, searchText]
  );

  /* columns */
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      width: 350,
      ellipsis: true,
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (t) => <Text title={t}>{t}</Text>,
    },
    {
      title: "Категория",
      dataIndex: "category",
      width: 420,
      render: (p) =>
        p.split(" / ").map((s, i) => (
          <Tag
            key={i}
            color={palette[i % palette.length]}
            style={{ marginLeft: i ? 8 : 0 }}
          >
            {s}
          </Tag>
        )),
    },
    {
      title: "Год",
      dataIndex: "year",
      width: 100,
      sorter: (a, b) => a.year - b.year,
      defaultSortOrder: "descend",
    },
    { title: "Тип", dataIndex: "type", width: 90 },
    {
      title: "Скачать",
      dataIndex: "url",
      width: 90,
      render: (u) =>
        u ? (
          <a href={u} target="_blank" rel="noopener noreferrer">
            <DownloadOutlined />
          </a>
        ) : (
          "-"
        ),
    },
  ];

  /* UI */
  return (
    <>
      <TopImage image={headerImg} title="Раскрытие информации" />
      <div className="page-grid__content">
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Space wrap>
            <Search
              placeholder="Поиск…"
              allowClear
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 280 }}
            />
            <Cascader
              style={{ width: 520 }}
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
              {yearOptions.map((v) => (
                <Option key={v} value={v}>
                  {v === "all" ? "Все годы" : v}
                </Option>
              ))}
            </Select>
          </Space>
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
              scroll={{ x: "max-content" }}
            />
          </Spin>
        </Space>
      </div>
    </>
  );
}

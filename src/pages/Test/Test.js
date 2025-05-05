import React, { useEffect, useState, useMemo } from "react";
import { Table, Input, Select, Space, Typography, Spin } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TopImage from "../../components/TopImage";
import headerImg from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
import { addressServer } from "../../config";

const { Search } = Input;
const { Option } = Select;
const { Text } = Typography;

function buildPath(cat) {
  if (!cat) return "—";
  return cat.parent ? `${cat.parent.title} / ${cat.title}` : cat.title;
}

export default function Test() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  useEffect(() => {
    const url =
      `${addressServer}/api/information-files` +
      "?populate[0]=file" +
      "&populate[1]=informacziya_kategorii.parent" +
      "&pagination[pageSize]=1000" +
      "&sort=year:desc";

    fetch(url)
      .then((r) => r.json())
      .then(({ data }) => {
        if (!Array.isArray(data)) return setRows([]);

        const mapped = data.map((raw) => {
          const cat = raw.informacziya_kategorii; 
          const yr = String(raw.year ?? "").replace(/[^\d]/g, "");

          return {
            key: raw.id,
            title: raw.title,
            type: raw.type,
            year: yr ? Number(yr) : 0,
            category: buildPath(cat),
            url: addressServer + (raw.file?.url || ""),
          };
        });

        setRows(mapped);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categoryOptions = useMemo(() => {
    return [
      "all",
      ...Array.from(new Set(rows.map((r) => r.category).filter(Boolean))),
    ];
  }, [rows]);

  const yearOptions = useMemo(() => {
    return [
      "all",
      ...Array.from(new Set(rows.map((r) => r.year).filter(Boolean))).sort(
        (a, b) => b - a
      ),
    ];
  }, [rows]);

  const dataSource = useMemo(() => {
    return rows.filter((r) => {
      const okCat = catFilter === "all" || r.category === catFilter;
      const okYear = yearFilter === "all" || r.year === yearFilter;
      const okText = r.title.toLowerCase().includes(searchText.toLowerCase());
      return okCat && okYear && okText;
    });
  }, [rows, catFilter, yearFilter, searchText]);

  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      width: 350,
      ellipsis: true,
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (v) => <Text title={v}>{v}</Text>,
    },
    {
      title: "Категория",
      dataIndex: "category",
      width: 350,
      sorter: (a, b) => a.category.localeCompare(b.category),
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
      render: (url) =>
        url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <DownloadOutlined />
          </a>
        ) : null,
    },
  ];

  return (
    <>
      <TopImage image={headerImg} title="Раскрытие информации TEST" />

      <div className="page-grid__content">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* фильтры */}
          <Space wrap>
            <Search
              placeholder="Поиск…"
              allowClear
              style={{ width: 280 }}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <Select
              value={catFilter}
              onChange={setCatFilter}
              style={{ width: 520 }}
            >
              {categoryOptions.map((v) => (
                <Option key={v} value={v}>
                  {v === "all" ? "Все категории" : v}
                </Option>
              ))}
            </Select>

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

          {/* таблица */}
          <Spin spinning={loading}>
            <Table
              rowKey="key"
              columns={columns}
              dataSource={dataSource}
              size="middle"
              scroll={{ x: "max-content" }}
              pagination={{
                pageSize: 25,
                showSizeChanger: true,
                locale: { items_per_page: "строк" },
              }}
            />
          </Spin>
        </Space>
      </div>
    </>
  );
}

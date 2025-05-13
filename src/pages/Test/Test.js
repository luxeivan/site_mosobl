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
  Grid,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";

import pdfIcon from "../../img/pdf.svg";
import docIcon from "../../img/doc.svg";
import docxIcon from "../../img/docx.svg";
import xlsIcon from "../../img/xls.svg";
import jpgIcon from "../../img/jpg.svg";
import rarIcon from "../../img/rar.svg";

const { Sider, Content } = Layout;
const { Search } = Input;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const highlightColor = "#E37021";

/* ---------- helpers ---------- */
const iconByType = (ext) => {
  switch ((ext || "").toLowerCase()) {
    case "pdf":
      return <img src={pdfIcon} alt="pdf" style={{ width: 24 }} />;
    case "doc":
      return <img src={docIcon} alt="doc" style={{ width: 24 }} />;
    case "docx":
      return <img src={docxIcon} alt="docx" style={{ width: 24 }} />;
    case "xls":
    case "xlsx":
      return <img src={xlsIcon} alt="xls" style={{ width: 24 }} />;
    case "jpg":
    case "jpeg":
    case "png":
      return <img src={jpgIcon} alt="img" style={{ width: 24 }} />;
    case "rar":
      return <img src={rarIcon} alt="rar" style={{ width: 24 }} />;
    default:
      return (
        <img src={pdfIcon} alt="file" style={{ width: 24, opacity: 0.4 }} />
      );
  }
};

const extractDate = (name) => {
  const m = (name || "").match(/[0-3][0-9].[0-1][0-9].2[0-9]{3}/);
  if (!m) return null;
  const [d, mth, y] = m[0].split(".");
  return new Date(+y, mth - 1, +d).getTime();
};

// ⬇️ заменить весь старый normalizeDoc на это
const normalizeDoc = (raw) => {
  if (!raw) return null;

  // Strapi-v4: файл лежит в attributes  → a
  const a = raw.attributes ?? raw;
  const f = a.file ?? a; // на случай старой структуры

  const name = a.name;
  const type = a.type || a.ext || "";
  const url = f.url || "";
  const size = f.size || 0;

  // 1) дата в названии
  let ts = extractDate(name);

  // 2) если в названии нет — берём updatedAt / createdAt из Strapi
  if (!ts && f.updatedAt) ts = new Date(f.updatedAt).getTime();
  if (!ts && f.createdAt) ts = new Date(f.createdAt).getTime();

  return { id: raw.id, name, type, url, size, ts: ts ?? 0 };
};

/* ---------- component ---------- */
export default function InformationDisclosureTest() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [categories, setCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [sortMode, setSortMode] = useState("date"); // default date desc
  const [globalVisible, setGlobalVisible] = useState(false);
  const [globalQuery, setGlobalQuery] = useState("");

  /* fetch categories once */
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

  /* auto‑select first category ONLY on mobile */
  useEffect(() => {
    if (isMobile) {
      if (!selectedCatId && categories.length)
        setSelectedCatId(categories[0].id);
    } else {
      // desktop – показываем "Выберите категорию"
      setSelectedCatId(null);
    }
  }, [isMobile, categories]);

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
      const rawArr = Array.isArray(g.list_files)
        ? g.list_files
        : g.list_files?.data || [];
      const docs = rawArr
        .map(normalizeDoc)
        .filter(Boolean)
        .sort((a, b) => {
          if (sortMode === "name") return a.name.localeCompare(b.name, "ru");
          // sortMode === "date"  → свежие (больший ts) наверху
          return (b.ts ?? 0) - (a.ts ?? 0);
        });

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
        const rawArr = Array.isArray(g.list_files)
          ? g.list_files
          : g.list_files?.data || [];
        rawArr
          .map(normalizeDoc)
          .filter(Boolean)
          .forEach((d) => {
            if (d.name.toLowerCase().includes(globalQuery.toLowerCase()))
              res.push({ ...d, catTitle: cat.title });
          });
      });
    });
    return res;
  }, [globalQuery, categories]);

  /* styles */
  const btnActive = {
    background: highlightColor,
    borderColor: highlightColor,
    color: "#fff",
  };
  const btnInactive = {
    background: "transparent",
    borderColor: highlightColor,
    color: highlightColor,
  };

  /* sidebar list */
  const CategoryList = (
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
              whiteSpace: "normal",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </Text>
        </List.Item>
      )}
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TopImage
        image={imgb04877a3110d6b586d064fc3a2853c70}
        title="Раскрытие информации"
      />

      <Layout style={{ minHeight: "calc(100vh - 300px)" }}>
        {/* Desktop sidebar – 340px, перенос длинных названий */}
        {!isMobile && (
          <Sider
            width={340}
            style={{ background: "#fafafa", padding: 16, overflowY: "auto" }}
          >
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
            {CategoryList}
          </Sider>
        )}

        <Layout>
          <Content style={{ padding: isMobile ? "12px 8px" : 24 }}>
            {/* Mobile top bar */}
            {isMobile && (
              <>
                <Search
                  placeholder="Поиск по всем файлам"
                  enterButton={<SearchOutlined />}
                  allowClear
                  onSearch={(v) => {
                    setGlobalQuery(v);
                    setGlobalVisible(true);
                  }}
                  style={{ marginBottom: 8 }}
                />
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    overflowX: "auto",
                    paddingBottom: 8,
                  }}
                >
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      size="small"
                      style={
                        cat.id === selectedCatId
                          ? { ...btnActive, whiteSpace: "nowrap" }
                          : { ...btnInactive, whiteSpace: "nowrap" }
                      }
                      onClick={() => setSelectedCatId(cat.id)}
                    >
                      {cat.title}
                    </Button>
                  ))}
                </div>
              </>
            )}

            {!currentCat && (
              <Title level={3} style={{ textAlign: "center", marginTop: 60 }}>
                Выберите категорию…
              </Title>
            )}

            {currentCat && (
              <>
                <Title level={3}>{currentCat.title}</Title>
                <Space style={{ marginBottom: 24, flexWrap: "wrap" }}>
                  <Button
                    style={sortMode === "name" ? btnActive : btnInactive}
                    onClick={() => setSortMode("name")}
                  >
                    Сортировать по названию
                  </Button>
                  <Button
                    style={sortMode === "date" ? btnActive : btnInactive}
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
                      renderItem={(doc) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={iconByType(doc.type)}
                            title={
                              <a
                                href={`${addressServer}${doc.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {doc.name}
                              </a>
                            }
                            description={`${doc.type || "file"} ${Math.round(
                              doc.size || 0
                            )}kb`}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                ))}
              </>
            )}
          </Content>
        </Layout>
      </Layout>

      {/* Global search modal */}
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
          enterButton={<SearchOutlined />}
          onChange={(e) => setGlobalQuery(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <List
          locale={{ emptyText: "Ничего не найдено" }}
          itemLayout="horizontal"
          dataSource={globalResults}
          renderItem={(doc) => {
            const size = Math.round(doc.size || 0);
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={iconByType(doc.type)}
                  title={
                    <a
                      href={`${addressServer}${doc.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.name}
                    </a>
                  }
                  description={`${doc.catTitle} • ${
                    doc.type || "file"
                  } ${size}kb`}
                />
              </List.Item>
            );
          }}
        />
      </Modal>
    </motion.div>
  );
}

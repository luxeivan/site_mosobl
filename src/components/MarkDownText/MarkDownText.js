import React from "react";
import { Typography } from "antd";
import Markdown from "markdown-to-jsx";
import styles from "./MarkDownText.module.css";

export default function MarkDownText({ children }) {
  if (typeof children !== "string") {
    return false;
  }
  return (
    <Markdown
      options={{
        overrides: {
          p: {
            props: {
              className: styles.para,
            },
          },
          h1: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 1,
            },
          },
          h2: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 2,
            },
          },
          h3: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 3,
            },
          },
          h4: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 4,
            },
          },
          h5: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 5,
            },
          },
          h6: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 6,
            },
          },
          strong: {
            props: {
              className: styles.strong,
            },
          },
          table: {
            props: {
              className: `${styles.tableDescription} ${styles.table}`,
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
}

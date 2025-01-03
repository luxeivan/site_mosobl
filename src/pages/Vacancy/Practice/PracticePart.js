import React from "react";
import GrowthСhart from "./GrowthСhart";
import { Typography, Flex, Card, Button } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function PracticePart() {
  return (
    <Flex vertical align="center" justify="center">
      <Title level={1} style={{ textAlign: "center" }}>
        Практика
      </Title>
      <Card
        style={{
          margin: 10,
          marginLeft: "5%",
          padding: 20,
          borderRadius: 10,
          border: "2px solid #d9d9d9",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Title
          level={3}
          style={{ margin: 0, textAlign: "center", width: "100%" }}
        >
          Приоритетными являются электроэнергетические направления обучения
        </Title>
      </Card>
      <Card
        style={{
          margin: 10,
          marginLeft: "5%",
          padding: 20,
          borderRadius: 10,
          border: "2px solid #d9d9d9",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <GrowthСhart />
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link to="/universities">
            <Button
              type="primary"
              className={`${"hh-button"}`}
              style={{ padding: "10px 24px" }}
            >
              Учебные заведения-партнёры
            </Button>
          </Link>
        </div>
      </Card>
    </Flex>
  );
}

// import React from "react";
// import GrowthСhart from "./GrowthСhart";
// import { Typography, Flex, Card, Button } from "antd";
// import { Link } from "react-router-dom";

// const { Title } = Typography;

// export default function PracticePart() {
//   return (
//     <Flex vertical align="center" justify="center">
//       <Title level={1} style={{ textAlign: "center" }}>
//         Практика
//       </Title>
//       <Card
//         style={{
//           margin: 10,
//           marginLeft: "5%",
//           padding: 20,
//           borderRadius: 10,
//           border: "2px solid #d9d9d9",
//           boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//           position: "relative",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "100%",
//         }}
//       >
//         <Title
//           level={3}
//           style={{ margin: 0, textAlign: "center", width: "100%" }}
//         >
//           Приоритетными являются электроэнергетические направления обучения
//         </Title>
//       </Card>
//       <Card
//         style={{
//           margin: 10,
//           marginLeft: "5%",
//           padding: 20,
//           borderRadius: 10,
//           border: "2px solid #d9d9d9",
//           boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//           position: "relative",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "100%",
//         }}
//       >
//         <GrowthСhart />
//         <div style={{ textAlign: "center", marginTop: 20 }}>
//           <Link to="/universities">
//             <Button
//               type="primary"
//               className="hh-button"
//               style={{ padding: "10px 24px" }}
//             >
//               Учебные заведения-партнёры
//             </Button>
//           </Link>
//         </div>
//       </Card>
//     </Flex>
//   );
// }

import { ArrowUpOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";
const { Title, Paragraph } = Typography;

const Cooperation = styled.div`
  background: linear-gradient(90deg, #00e087 0.18%, #00aaff 100.18%);
  padding: 106px 0;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #fff;
  background: #fff;
  height: 60px;
  /* width: 587px; */
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 8px;
`;

const EmailButton = styled(Button)`
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #00e087 0.18%, #00aaff 100.18%);
  border-radius: 6px;
`;

const CooperationPage = () => {
  return (
    <Cooperation>
      <Typography style={{ textAlign: "center" }}>
        <Title style={{ color: "#fff" }}>MINT AND COOPERATION</Title>
        <Paragraph
          style={{
            margin: "0 auto",
            color: "#fff",
            opacity: "0.7",
            paddingTop: "42px",
            paddingBottom: "48px",
          }}
        >
          By submitting your email, you consent to receive emails from Hitall.
          Be the first to get updates on the Hitall launch, the latest features,
          and upcoming airdrops and events.
        </Paragraph>
        <Space>
          <Email>
            <Input
              style={{ width: "calc(100% - 60px)" }}
              bordered={false}
              size={"large"}
              placeholder="Email Address"
            />
            <EmailButton
              type="primary"
              icon={<ArrowUpOutlined style={{ fontSize: "25px" }} />}
            ></EmailButton>
          </Email>
        </Space>
      </Typography>
    </Cooperation>
  );
};

export default CooperationPage;

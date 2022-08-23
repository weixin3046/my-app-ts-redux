import BannerImage from "assets/images/banner.png";
import { Button, Col, Row, Space, Image } from "antd";
import { isMobile } from "utils/userAgent";
import styled from "styled-components";

const Introduce = styled.div`
  float: right;
  padding-top: 149px;
  width: ${(props: { isMobile: boolean }) =>
    props.isMobile ? "100%" : "640px"};
  text-align: ${(props: { isMobile: boolean }) =>
    props.isMobile ? "center" : ""};
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 60px;
`;

const Paragraph = styled.div``;

export default function BannerPage() {
  return (
    <div>
      <Row align="middle" justify={"center"}>
        <Col xl={12} md={24}>
          <Introduce isMobile={isMobile}>
            <Title>Create Your First Private NFT</Title>
            <Paragraph>
              Create the first private NFT belonging to you on findora to
              realize private transfer between buyers and sellers
            </Paragraph>
            <div>
              <Space>
                <Button type="primary">Import</Button>
                <Button type="default">Explore</Button>
              </Space>
            </div>
          </Introduce>
        </Col>
        <Col xl={12} md={24}>
          <Image src={BannerImage} preview={false}></Image>
        </Col>
      </Row>
    </div>
  );
}

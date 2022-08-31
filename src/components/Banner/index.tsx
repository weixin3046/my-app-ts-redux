import { Col, Image, Row, Space } from "antd";
import BannerImage from "assets/images/banner.png";
import { ButtonDefault, ButtonPrimary } from "components/Button";
import { Content } from "components/Content";
import styled from "styled-components";
import { isMobile } from "utils/userAgent";

const Introduce = styled.div`
  /* padding-top: 100px; */

  text-align: ${(props: { isMobile: boolean }) =>
    props.isMobile ? "center" : ""};
`;
const Title = styled.h2`
  font-weight: 600;
  line-height: 120%;
  font-size: 60px;
`;

const Paragraph = styled.div`
  font-size: 24px;
  line-height: 150%;
  padding-bottom: 60px;
`;

export default function BannerPage() {
  return (
    <Content>
      <Row align="middle" justify={"center"}>
        <Col xl={12} md={24}>
          <Introduce isMobile={isMobile}>
            <Title>Create Your First Private NFT</Title>
            <Paragraph>
              Create the first private NFT belonging to you on findora to
              realize private transfer between buyers and sellers
            </Paragraph>
            <div>
              <Space
                size={36}
                wrap
                align={"center"}
                style={{ justifyContent: "center" }}
              >
                <ButtonPrimary>Import</ButtonPrimary>
                <ButtonDefault>Explore</ButtonDefault>
              </Space>
            </div>
          </Introduce>
        </Col>
        <Col xl={12} md={24}>
          <Image src={BannerImage} preview={false}></Image>
        </Col>
      </Row>
    </Content>
  );
}

import { Col, Image, Row, Typography } from "antd";
import RewardsImage from "assets/images/rewards.svg";
import { Content } from "components/Content";
import styled from "styled-components";
const { Title, Paragraph } = Typography;

const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

export default function RewardsPage() {
  return (
    <Content>
      <Row align="middle" justify="center">
        <Col span={12} xl={12} lg={24} xs={24}>
          <CenterBox>
            <Typography style={{ float: "right" }}>
              <Title>NFT REWARDS</Title>
              <Paragraph>
                {`Each NFT collection has it's own unique utilities but with
              anything Hitall.io does, you enjoy privilliges with our fancy
              rewards,such as transaction,mining,auction and airdrop. We
              consistently provide with the benefits that NFT holders.`}
              </Paragraph>
            </Typography>
          </CenterBox>
        </Col>
        <Col span={12} xl={12} lg={24} xs={24}>
          <CenterBox>
            <Image src={RewardsImage} preview={false} alt="" />
          </CenterBox>
        </Col>
      </Row>
    </Content>
  );
}

import { Col, Row, Typography } from "antd";
import { Content } from "components/Content";
import RewardsImage from "assets/images/rewards.svg";
const { Title, Paragraph } = Typography;

export default function RewardsPage() {
  return (
    <Content>
      <Row align="middle" justify="center">
        <Col span={12} xl={12} lg={24} xs={24}>
          <Typography style={{ float: "right" }}>
            <Title>NFT REWARDS</Title>
            <Paragraph>
              Each NFT collection has it's own unique utilities but with
              anything Hitall.io does, you enjoy privilliges with our fancy
              rewards,such as transaction,mining,auction and airdrop. We
              consistently provide with the benefits that NFT holders.
            </Paragraph>
          </Typography>
        </Col>
        <Col span={12} xl={12} lg={24} xs={24}>
          <img width={"100%"} src={RewardsImage} alt="" />
        </Col>
      </Row>
    </Content>
  );
}

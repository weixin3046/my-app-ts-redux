import { List } from "antd";
import styled from "styled-components";

const Paragraph = styled.div``;

export default function PrivatePage() {
  const data = [
    {
      title: "Total",
      des: "Collection of popular NFTs on the whole network，horizontally expand more NFTs on EVM chains and vertically deepen NFT revenue channels.",
    },
    {
      title: "Fast",
      des: "Findora will provide Hitall with enterprise-grade privacy technology and strong liquidity assets to ensure the NFT transactions with low latency and high concurrency.",
    },
    {
      title: "Private",
      des: `Hitall will integrate Findora's ZK-rollup technology and ZK-didvoucher system to protect on-chain NFT assets fully privatized or selectively disclosed.`,
    },
    {
      title: "Secure",
      des: `Users on Hitall can complete sales, purchases and transactions on the findora chain by themselves without revealing sensitive information.
      `,
    },
  ];

  return (
    <div>
      <List
        grid={{
          gutter: 56,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.des}
            {/* <Card title={item.title}>Card content</Card> */}
          </List.Item>
        )}
      />
    </div>
  );
}

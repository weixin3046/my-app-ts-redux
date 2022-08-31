import "./index.less";

import { Image, List } from "antd";
import HomeFast from "assets/images/home-fast.svg";
import HomePrivate from "assets/images/home-private.svg";
import HomeSacure from "assets/images/home-sacure.svg";
import HomeTotal from "assets/images/home-total.svg";
import styled from "styled-components";

const ListWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function PrivatePage() {
  const data = [
    {
      Avatar: HomeTotal,
      title: "Total",
      description:
        "Collection of popular NFTs on the whole network，horizontally expand more NFTs on EVM chains and vertically deepen NFT revenue channels.",
    },
    {
      Avatar: HomeFast,
      title: "Fast",
      description:
        "Findora will provide Hitall with enterprise-grade privacy technology and strong liquidity assets to ensure the NFT transactions with low latency and high concurrency.",
    },
    {
      Avatar: HomePrivate,
      title: "Private",
      description: `Hitall will integrate Findora's ZK-rollup technology and ZK-didvoucher system to protect on-chain NFT assets fully privatized or selectively disclosed.`,
    },
    {
      Avatar: HomeSacure,
      title: "Secure",
      description: `Users on Hitall can complete sales, purchases and transactions on the findora chain by themselves without revealing sensitive information.
      `,
    },
  ];

  return (
    <ListWrap className="private-list">
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
            <List.Item.Meta
              avatar={<Image src={item.Avatar} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </ListWrap>
  );
}

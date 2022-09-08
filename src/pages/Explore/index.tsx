import { useQuery } from "@apollo/client";
import { Col, Row, Spin, Tabs } from "antd";
import { CategoriesGql, TopGql, TrendingGql } from "apollographql/home";
import { Content } from "components/Content";
import ContractCard from "components/ContractCard/DefaultCard";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const { TabPane } = Tabs;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 48px;
`;

const initialPanes = [
  {
    id: "trending",
    text: "Trending",
  },
  {
    id: "top",
    text: "Top",
  },
  {
    id: "art",
    text: "Art",
  },
  {
    id: "collectibles",
    text: "Collectibles",
  },
  {
    id: "domain-names",
    text: "Domain Names",
  },
  {
    id: "music",
    text: "Music",
  },
  {
    id: "photography",
    text: "Photography",
  },
  {
    id: "sports",
    text: "Sports",
  },
  {
    id: "trading-cards",
    text: "Trading Cards",
  },
  {
    id: "utility",
    text: "Utility",
  },
  {
    id: "vitual-worlds",
    text: "Vitual Worlds",
  },
];

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeKey, setActiveKey] = useState(tab ?? initialPanes[0].id);
  const [panes] = useState(initialPanes);
  const Gql =
    tab === "trending" ? TrendingGql : tab === "top" ? TopGql : CategoriesGql;
  const { data, loading, error } = useQuery(Gql, {
    variables: {
      id: activeKey,
    },
  });
  const list =
    data?.analyticDailyCollections ||
    data?.nftcontracts ||
    data?.categories ||
    [];
  console.log(list);
  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
    setSearchParams({ tab: newActiveKey });
  };

  return (
    <Content>
      <Title>Explore Collections tets</Title>
      <Tabs activeKey={activeKey} onChange={onChange} centered>
        {panes.map((pane) => (
          <TabPane tab={pane.text} key={pane.id}>
            <Row gutter={[24, 24]} align="middle">
              <Spin spinning={loading}>
                {list.map((item: any) => (
                  <Col
                    span={6}
                    xl={6}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    key={item.id}
                  >
                    <ContractCard
                      item={item}
                      ImageSize={211}
                      height={395}
                    ></ContractCard>
                  </Col>
                ))}
              </Spin>
              {error && `Error! ${error.message}`}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </Content>
  );
}

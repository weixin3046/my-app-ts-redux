import { useQuery } from "@apollo/client";
import { Col, Row, Tabs } from "antd";
import { FeaturedGql } from "apollographql/home";
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
  { name: "Trending", key: "Trending", content: "" },
  { name: "Top", key: "Top", content: "" },
];

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeKey, setActiveKey] = useState(tab ?? initialPanes[0].key);
  const [panes] = useState(initialPanes);
  const { data } = useQuery(FeaturedGql);
  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
    setSearchParams({ tab: newActiveKey });
  };

  return (
    <Content>
      <Title>Explore Collections</Title>
      <Tabs activeKey={activeKey} onChange={onChange} centered>
        {panes.map((pane) => (
          <TabPane tab={pane.name} key={pane.key}>
            <Row gutter={[24, 24]} align="middle">
              {data?.nftcontracts?.map((item: any) => (
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
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </Content>
  );
}

import "./index.less";

import { useQuery } from "@apollo/client";
import { Carousel } from "antd";
import { FeaturedGql } from "apollographql/home";
import ArrowLeftCircle from "assets/images/arrow-left-circle.svg";
import ArrowRightCircle from "assets/images/arrow-right-circle.svg";
import { ButtonDefault } from "components/Button";
import { Content } from "components/Content";
import DefauldCardPage from "components/ContractCard/DefaultCard";
import styled from "styled-components";
import { isMobile } from "utils/userAgent";

const LaunchpadWrap = styled.div`
  padding-top: 105px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  padding: 50px 0;
`;

export default function FeaturedPage() {
  // const [list, setList] = useState<any[]>();
  const { data } = useQuery(FeaturedGql);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  console.log(data);
  return (
    <Content>
      <Title>Featured Projects</Title>

      <Carousel
        afterChange={onChange}
        arrows={true}
        nextArrow={<img src={ArrowLeftCircle} alt="prev" />}
        prevArrow={<img src={ArrowRightCircle} alt="next" />}
        dots={{ className: "carousel-dots" }}
        slidesToShow={isMobile ? 1 : 3}
        slidesToScroll={isMobile ? 1 : 3}
      >
        {data?.nftcontracts?.map((item: any) => (
          <div key={item.id}>
            <div style={{ padding: "0 13px" }}>
              <DefauldCardPage
                item={item}
                ImageSize={290}
                height={461}
              ></DefauldCardPage>
            </div>
          </div>
        ))}
      </Carousel>
      <LaunchpadWrap>
        <ButtonDefault
          onClick={() => {
            console.log("lanchpad");
          }}
        >
          Launchpad
        </ButtonDefault>
      </LaunchpadWrap>
    </Content>
  );
}

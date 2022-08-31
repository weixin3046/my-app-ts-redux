import Banner from "components/Banner";
import CooperationPage from "components/Cooperation/Cooperation";
import Featured from "components/Featured";
import Private from "components/Private";
import Rewards from "components/Rewards";
import TopCollections from "components/TopCollections";

function HomaPage() {
  return (
    <div className="App">
      <div>
        <Banner />
        <Private />
        <Featured />
        <TopCollections />
        <Rewards />
        <CooperationPage />
        <div>测试一下</div>
        {/* <NetworkCard></NetworkCard> */}
        {/* <Button type="primary">type="primary"</Button> */}
        {/* <div>{JSON.stringify(data, null, 2)}</div> */}
        {/* 我这就是测试用的 */}
        {/* <div>loading: {loading} </div> */}
        {/* <div>error:{error}</div> */}
      </div>
    </div>
  );
}

export default HomaPage;

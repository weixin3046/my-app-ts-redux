import Banner from "components/Banner";
import Private from "components/Private";
import Featured from "components/Featured";
import TopCollections from "components/TopCollections";

function HomaPage() {
  return (
    <div className="App">
      <div>
        <Banner />
        <Private />
        <Featured />
        <TopCollections />
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

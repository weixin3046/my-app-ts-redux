import { Button } from "antd";
import { useQuery } from "@apollo/client";
import { query, variables } from "apollographql/home";
import { useWeb3React } from "@web3-react/core";
import Banner from "components/Banner";
import NetworkCard from "components/NetworkCard";
import Private from "components/Private";

function HomaPage() {
  const { chainId } = useWeb3React();
  const { loading, error, data } = useQuery(query, {
    variables,
  });
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div>
        <Banner />
        <Private />
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

import { useConfigContract } from "hooks/useContract";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { Button } from "antd";
import { useQuery } from "@apollo/client";
import { query, variables } from "apollographql/home";

function HomaPage() {
  const { loading, error, data } = useQuery(query, {
    variables,
  });
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div>
        <Button type="primary">type="primary"</Button>
        <div>{JSON.stringify(data, null, 2)}</div>
        我这就是测试用的
        {/* <div>loading: {loading} </div> */}
        {/* <div>error:{error}</div> */}
      </div>
    </div>
  );
}

export default HomaPage;

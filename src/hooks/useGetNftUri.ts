import { useRequest } from "ahooks";
import axios from "axios";
import { useEffect } from "react";

function getNftUri(uri: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(uri)
      .then((res: any) => {
        const image = res.data.image.replace(
          "ipfs://",
          "https://ipfs.io/ipfs/"
        );
        resolve({
          ...res.data,
          image,
        });
      })
      .catch((error: any) => reject());
  });
}

export default function useGetNftUri(uri: string) {
  const { run, error, loading, data } = useRequest(getNftUri);

  useEffect(() => {
    if (uri) {
      run(uri);
    }
  }, [uri]);
  return { data, error, loading };
}

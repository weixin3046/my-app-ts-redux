import { useRequest } from "ahooks";
import axios from "axios";
import { useEffect } from "react";

function getNftUri(uri: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(uri)
      .then((res: any) => {
        const image = res.data.image.replace(
          /ipfs:\/\/|https:\/\/gateway.pinata.cloud\/ipfs\/|car/gi,
          "https://ipfs.io/ipfs/"
        );
        resolve({
          ...res.data,
          image,
        });
      })
      .catch((error: any) => reject(error));
  });
}

export default function useGetNftUri(uri: string) {
  const { run, error, loading, data } = useRequest(getNftUri);

  useEffect(() => {
    if (uri) {
      const url = uri.replace(
        /ipfs:\/\/|https:\/\/gateway.pinata.cloud\/ipfs\/|car/gi,
        "https://ipfs.io/ipfs/"
      );
      run(url);
    }
  }, [uri, run]);
  return { data, error, loading };
}

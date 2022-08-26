import { gql } from "@apollo/client";

export const query = gql`
  query CollectionInfo($collection: ID!) {
    nftcontract(id: $collection) {
      address
      name
      symbol
      creator
      uri
    }
  }
`;
export const variables = {
  collection: "0xa4606025191b5ede06d1e0a3609b8f386e9bd908",
};

export const order = 101;

export const type = "util";

export const FeaturedGql = gql`
  query MyQuery {
    nftcontracts(orderDirection: desc, first: 30) {
      name
      uri
      symbol
      standard
      saleCounts
      saleAmounts
      royalties
      priceCeiling
      id
      floorPrice
      fees
      avgPrice
      address
    }
  }
`;

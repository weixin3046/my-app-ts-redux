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

export const NftContractsGql = gql`
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

export const TrendingGql = gql`
  query MyQuery {
    analyticDailyCollections(
      where: { date: 1657843200 }
      orderBy: volume
      orderDirection: desc
    ) {
      collection {
        id
        name
        symbol
        creator {
          id
        }
        uri
      }
    }
  }
`;

export const TopGql = gql`
  query MyQuery {
    nftcontracts(first: 10, orderBy: volume, orderDirection: desc) {
      id
      name
      symbol
      creator
      uri
    }
  }
`;

export const CategoriesGql = gql`
  query MyQuery($id: ID = "") {
    categories(orderBy: text, orderDirection: desc, where: { id: $id }) {
      id
      level
      text
      collections {
        contract {
          id
          name
          symbol
          creator {
            id
          }
          uri
        }
      }
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployeeInfo = /* GraphQL */ `
  query GetEmployeeInfo($id: ID!) {
    getEmployeeInfo(id: $id) {
      id
      firstname
      lastname
      workingyears
      jobtitle
      more
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmployeeInfos = /* GraphQL */ `
  query ListEmployeeInfos(
    $filter: ModelEmployeeInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        workingyears
        jobtitle
        more
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

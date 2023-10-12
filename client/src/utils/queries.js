import { gql } from '@apollo/client';
// query user Query for searching by username
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      locations {
        _id
        location
        price
        status
      }
    }
  }
`;
//query me Query for searching your account
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      locations {
        _id
        location
        price
        status
      }
    }
  }
`;
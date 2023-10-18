import { gql } from '@apollo/client';

// GraphQL query to fetch user data based on username
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

// GraphQL query to fetch data for the currently authenticated user
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
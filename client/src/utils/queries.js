import { gql } from '@apollo/client';

export const QUERY_SOMETHING = gql`
  {
    something {
      _id
      }
    }
  }
`;

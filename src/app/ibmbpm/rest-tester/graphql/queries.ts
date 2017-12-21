import gql from 'graphql-tag';

export const GetApiList = gql`
  query apiList {
    apis{
      name
      childs{
        name
        childs{
          name
        }
      }
    }
  }
`;

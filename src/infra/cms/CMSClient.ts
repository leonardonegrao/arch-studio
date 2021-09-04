import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

import Project from '@models/Project';

export const gql = GraphQLTag;

interface CMSClientResponse{
  query: Function;
}

interface QueryResponse {
  data: {
    response: {
      allProjects?: Project[];
    }
  }
}

export function CMSClient(): CMSClientResponse {
  const TOKEN = process.env.DATOCMS_API_TOKEN;
  const endpoint = 'https://graphql.datocms.com';

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${TOKEN}`
    },
  });

  return {
    async query({query, variables}): Promise<QueryResponse> {
      const response = await client.request(query, variables);

      return {
        data: {
          response,
        }
      };
    }
  };
}

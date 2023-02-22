import { RepositoriesGraphQLResponse } from 'src/models/RepositoriesResponse'

export async function getRepositories({ token }): Promise<RepositoriesGraphQLResponse> {
  const endpoint = "https://api.github.com/graphql";
  const username = "imollm";
  const topic = "demo";
  const graphQLQuery = `query { 
            search(query: "${topic} user:${username}", type: REPOSITORY, first: 100) {
              nodes {
                ...on Repository {
                  owner {
                    login
                  }
                  name
                  id
                  url
                  description
                  homepageUrl
                  languages(first: 10) {
                      nodes {
                          color
                          name
                          id
                      }
                  }
                }
              }
            }
          }`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: graphQLQuery,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new TypeError(error);
  }
}

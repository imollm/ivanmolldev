import { RepositoriesGraphQLResponse } from 'src/models/RepositoriesResponse'
import { useEffect, useState } from 'react'

export default function useRespositories({ token }) {
    const username = 'imollm'
    const topic = 'demo'
    const graphQLQuery =
        `query { 
            search(query: "${topic} user:${username}", type: REPOSITORY, first: 100) {
              nodes {
                ...on Repository {
                  owner {
                    login
                  }
                  name
                  id
                  isPrivate
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
          }`
    const endpoint = 'https://api.github.com/graphql'
    const [repositories, setRepositories] = useState<RepositoriesGraphQLResponse>()

    useEffect(() => {
        getRepositories<RepositoriesGraphQLResponse>({ token }).then(repos => setRepositories(repos))
    }, [])

    async function getRepositories<T>({ token }): Promise<T> {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    query: graphQLQuery
                })
            })
            return await response.json()
        } catch (error) {
            throw new TypeError(error)
        }
    }

    return repositories
}
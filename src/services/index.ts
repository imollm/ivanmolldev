export const getRepositoriesService = async () => {
	const gitHubAPIToken = import.meta.env.GITHUB_TOKEN;
	const endpoint: string = 'https://api.github.com/graphql';
	const graphQLQuery = `query {
            viewer {
              repositories(first: 100) {
                totalCount
                nodes {
                    name
                    id
                    isPrivate
                    url
                    description
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
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${gitHubAPIToken}`,
			},
			body: JSON.stringify({
				query: graphQLQuery,
			}),
		});
		return await response.json();
	} catch (error) {
		throw new TypeError(error);
	}
};

export type RepositoriesGraphQLResponse = {
    data?: {
        viewer: {
            repositories: {
                totalCount: number
                nodes: Array<IRepository>
            }
        }
    }
    errors?: Array<{message: string}>
}

export type IRepositoryLanguage = {
    id: string
    color: string
    name: string
}

export type IRepository = {
    id: string
    url: string
    name: string
    description: string
    isPrivate: boolean
    languages: {
        nodes: Array<IRepositoryLanguage>
    }
}
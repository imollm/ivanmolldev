interface Owner {
    login: string;
}

interface Language {
    color: string;
    name: string;
    id: string;
}

interface Languages {
    nodes: Language[];
}

export interface Repository {
    owner: Owner;
    name: string;
    id: string;
    isPrivate: boolean;
    url: string;
    description?: any;
    languages: Languages;
    homepageUrl: string;
}

interface Search {
    nodes: Repository[];
}

interface Data {
    search: Search;
}

export interface RepositoriesGraphQLResponse {
    data?: Data
    errors?: Array<{message: string}>
}

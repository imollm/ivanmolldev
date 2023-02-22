interface Owner {
    login: string;
}

export interface Language {
    color: string;
    name: string;
    id: string;
}

export interface Languages {
    nodes: Language[];
}

export interface Repository {
    owner: Owner;
    name: string;
    id: string;
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

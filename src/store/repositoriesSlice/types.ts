export interface IErrors {
    [key: string]: string[];
}

export interface IRepositoriesItems {
    id: number,
    node_id: string;
    name: string;
    full_name: string;
    private: false;
    language: string;
    owner: {
        avatar_url: string;
        login: string;
    },
    html_url: string;
    description: string;
    watchers: number;
}

export interface IRepositories {
    total_count: number;
    incomplete_results: boolean;
    items: IRepositoriesItems[],
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    score: number;
}

export enum Status {
    loading = "loading",
    idle = "idle",
    completed = "completed"

}

export interface IState {
    repositories: IRepositories | null;
    error: IErrors | null;
    status: Status;
}


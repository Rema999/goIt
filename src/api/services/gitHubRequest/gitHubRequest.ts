import {apiPublicAxios} from "../../axios";
import {IRepositories} from "../../../store/repositoriesSlice/types";

export const gitHubRequest = {
    getRepositories: (repositories = "react", pageNumber = 1, reposPerPage = 20): Promise<IRepositories> =>
        apiPublicAxios.get(`/search/repositories?q=${repositories}&page=${pageNumber}&per_page=${reposPerPage}`)
};
export default {gitHubRequest};

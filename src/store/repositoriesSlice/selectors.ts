import { RootState } from "../index";
import { IState } from "./types";

export const repositoriesSelector = (state: RootState): IState => state.repositories;

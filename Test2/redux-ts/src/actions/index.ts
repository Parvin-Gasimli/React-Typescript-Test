import ActionType from "../action_types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesActionError {
  type: ActionType.SEARCH_RESPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesActionSuccess
  | SearchRepositoriesActionError;
export default Action;

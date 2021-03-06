import ActionType from "../action_types";
import Action from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const InitialState={
    loading:false,
    error:null,
    data:[]
}
const reducer = (
  state: RepositoriesState=InitialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_RESPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return { ...state };
  }
};

export default reducer;

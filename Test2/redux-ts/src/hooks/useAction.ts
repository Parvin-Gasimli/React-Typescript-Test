import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import SearchRepositories from "../action_creators";

export const useActions=()=>{
    const dispatch=useDispatch();
    bindActionCreators(SearchRepositories,dispatch);

    

}
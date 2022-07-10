import React, {   useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import SearchRepositories from "../action_creators";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const dispatch = useDispatch<any>();
  const {data,error,loading}=useSelector((state:any)=>state.repositories);

  
  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SearchRepositories(term));
  };
  return (
    <div>
      <h1>Search Redux Reducers </h1>
      <form onSubmit={OnSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
      {error&&<h2>{error}</h2>}
      {loading&&<h2>{loading}</h2>}
      {!loading&& !error&& data.map((name:any)=>(
        <div key={name.id}>{name}</div>
      ))}
    </div>
  );
};
export default RepositoriesList;

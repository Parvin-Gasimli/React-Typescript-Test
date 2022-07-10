import React, { Component } from "react";

interface User {
  name: string;
  age: number;
  score: number;
  prof: string;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}
class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,

  };

   Search=()=>{
    const foundUser=this.props.users.find((user)=>{
        return user.name===this.state.name
    })
    this.setState(({user:foundUser}))
  }
  render(){
    const {user,name,}=this.state
    return (
        <div>
          <h4>User Search</h4>
          <input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} />
          <button onClick={this.Search}>Search</button>
          <div>{user && user.name}  {user && name} </div>
        </div>
      );
  }
}

export default UserSearch;

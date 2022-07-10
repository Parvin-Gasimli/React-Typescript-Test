import React from "react";
import ReactDOM from "react-dom";
import EventComponent from "./events/EvenetComponent";

import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <>
  {/* <EventComponent/> */}
  <UserSearch/>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

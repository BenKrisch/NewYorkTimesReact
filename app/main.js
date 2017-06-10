import React from "react";
import Search from "./common/search";


const Main = props => (
  <div>
    <Search />
    {props.children}

  </div>
);

export default Main;
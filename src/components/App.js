// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserList from "./UserList";
// import UserDetails from "./UserDetails";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={UserList} />
//         <Route path="/users/:id" component={UserDetails} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;










import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App=()=>{

  return(
    <Router>
       <Switch>
      <Route exact path="/" component={UserList}/>
      <Route exact path="/users/:id" component={UserDetails}/>
      </Switch>
    </Router>
  )
}
export default App

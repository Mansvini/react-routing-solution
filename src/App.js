import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './components/User.jsx';

function App(){
  
  const db = ([
    {
      "username":"abc",
      "id":"0x0",
      items:[0,1,4,5,6,2,8,9,1,2,9,9,2,5,3,6,7,3]
    },
    {
      "username":"user2",
      "id":"0x1",
      items:[1,4,2,7,3,1,0,6,1,1,1,0,2,2,3,6,7,3]
    },
    {
      "username":"user3",
      "id":"0x2",
      items:[1,4,2,7]
    }
  ])
  
  const changeUsername = (user) =>{
    for(let i =0; i<db.length; i++){
      if(db[i].id===user[0].id){
        db[i].username = user[0].username
      }
    }
    console.log(db)
  }
    
  return (
    <div>
      Please enter the user ID [0x0, 0x1, 0x2] in the URL path
    <Router>
        <Switch>
          <Route path="/:id">
            <User db={db} changeUsername={changeUsername}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
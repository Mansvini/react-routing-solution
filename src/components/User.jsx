import React, { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import Page from './Page.jsx';

function User({db, changeUsername}) {
    let { path, url } = useRouteMatch();
  
    const [user, setUser] = useState(db.filter((user)=>{
      return user.id === url.slice(1,4);
    }))
  
    const newUser = [...user];
  
    const changeName = (event) =>{
      newUser[0].username = event.target.value;
    }
  
    const updateUser = () =>{
      setUser(newUser);
      changeUsername(user);
    }
  
    return (
      <div>
        <h1>{user[0].username}</h1>
        <input 
          onChange={(event)=>changeName(event)}
          placeholder={user[0].username}
          type="text" 
          name="user-name"
          id="name"
        />
        <button onClick={updateUser}>Change username</button>
        <hr></hr>
        <Switch>
          <Route exact path={path} >
            <Redirect to={`${url.slice(0,4)}/1`}/>
          </Route>
          <Route path={`${path}/:pageNumber`}>
            <Page user = {user}/>
          </Route>
        </Switch>
      </div>
    );
  }

export default User;
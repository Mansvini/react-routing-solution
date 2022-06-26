import React from "react";
import {
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Page({user}) {
    let { pageNumber } = useParams();
    if(!pageNumber){
        pageNumber = 1;
    }
    let {url } = useRouteMatch();
    const PageItems = user[0].items.slice((5*(pageNumber-1)), (5*pageNumber));
    const UserPageItems = PageItems.map((item, i)=>{
        return(
            <li key = {i}> {item} </li>
        )
        })
    return (
        <div>
        {Number(pageNumber)>(user[0].items.length/5)+1?<h1>Page Invalid</h1>: <ul>{UserPageItems}</ul>}
        {Number(pageNumber)===1? <button><Link to={`${url.slice(0,4)}/${Number(url.slice(-1))+1}`}>Next</Link></button>:<div><button><Link to={`${url.slice(0,4)}/${Number(url.slice(-1))-1}`}>Prev</Link></button><button><Link to={`${url.slice(0,4)}/${Number(url.slice(-1))+1}`}>Next</Link></button></div>}
        </div>
    );
}

export default Page;
  
import React, {useContext, useEffect, useState} from "react";
import './style.css';
import { AppContext, IAppContext } from "../../context/appcontext";

function Contenuti () {
    const {jsonData} = useContext(AppContext) as IAppContext

    return ( 
        <div className="contenuti">
             {jsonData?.slice().reverse().map((item) => (
                <div className="post">
                    <p className="id"><h3>{item.id}- {item.title}</h3></p>
                    <p className="body">{item.body}</p>
                </div>
     )) 
}   
        </div>
)}
export default Contenuti;

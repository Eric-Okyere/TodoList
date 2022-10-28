import React from "react";
import NoteCard from "./NoteCard";

import { useSelector } from "react-redux";


function User(props) {

  const { notebook } = useSelector((state) => {
		return state;
	});

	return (
	<div>
        {notebook.map((item, index) => {
            return (
               <NoteCard
               key={index} 
               listInfo={item}
              
               />


                
            );
          })}
          </div>
	);
}

export default User;
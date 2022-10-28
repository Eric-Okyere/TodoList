import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import {db} from "../firebase/config"
import { doc, setDoc, serverTimestamp} from "firebase/firestore";



function Userform(props) {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");



    const Adds = async(e)=>{
            e.preventDefault();
			
		let newUser = { name, date, id: uuid(), timestamp: serverTimestamp(),  }; console.log(newUser); 
		   
		
		try {
			await setDoc(doc(db, "Members", newUser.id),  newUser);
		} catch (e) {
			console.log(e);
		}
		setName('');
		setDate('');
	 

		
		

		}
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name <span>&#9831;</span></Form.Label>
				<Form.Control
				required
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Phone Number <span>&#9742;</span></Form.Label>
				<Form.Control
				required
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</Form.Group>

			

			<Button title="Submit" onClick={Adds} variant="primary" type="submit">
				 &#10009;
			</Button>
		</Form>
	);
}

export default Userform;
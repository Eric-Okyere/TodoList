import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditNote } from "../action/noteAction";
import { doc, updateDoc } from "firebase/firestore";
import {db}from "../firebase/config"


function Userform(props) {
	const [name, setName] = useState(props.listInfo.name);
	const [date, setDate] = useState(props.listInfo.date);

	const dispatch = useDispatch();

    const Edits =async(e)=>{
            e.preventDefault();
		dispatch(EditNote({id: props.listInfo.id, name, date }));
		try{
			const washingtonRef = doc(db, "Members", props.listInfo.id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, { id: props.listInfo.id, name, date});

		}catch(e){console.log(e)}
		   setName("");
		   setDate("");
		props.hide();
		
		}

		
	return (
		<Form className="modacont">
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title </Form.Label>
				<Form.Control
				required
					type="text"
					value={name}
					placeholder="Enter Title"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Date </Form.Label>
				<Form.Control
				required
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</Form.Group>


			<Button title="Submit" onClick={Edits} variant="primary" type="submit">
			<span class="material-symbols-outlined">
			add_box
			</span>
			</Button>
		</Form>
	);
}

export default Userform;
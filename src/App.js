import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import { Row, Col, Container } from "react-bootstrap";
import NoteMap from "./component/NoteMap"
import './App.css';
import NoteForm from "./component/NoteForm.jsx";
import Toog from "./component/Toog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import React, { useEffect} from "react";
import {collection, orderBy, query, onSnapshot} from "firebase/firestore";
import {db} from "./firebase/config"
import { AddNewNote} from "./action/noteAction"

function App() {
	
	
	const [darkMode, setDarkMode] = useState(false)
	const dispatch = useDispatch();
	useEffect(() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "Members"), orderBy("timestamp", "desc"));
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const notebook = [];
					querySnapshot.forEach((doc) => {
						notebook.push(doc.data());
					});
					dispatch( AddNewNote(notebook));
					console.log(notebook);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (

		
		<div className={`${darkMode && 'dark-mode'}`}>
		<div className="main container">
		

		
		<div className="subdiv">
		<Col md={10}><Header handleToogle={setDarkMode} /></Col>
		<Col md={2}><Toog handleToogle={setDarkMode}/></Col>
		</div>
	
		
		
			
				<Row>
					<Col className="col1" md={3}>
					
					
				<NoteForm />
					</Col>
          <Col className="col2" md={9}>
		 
          <NoteMap />
					</Col>
				</Row>
			
		</div>
		</div>
		
	);
}

export default App;
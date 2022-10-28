import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Col, Modal} from 'react-bootstrap'
import EditNote from './EditNote';
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import { DeleteOneNote } from '../action/noteAction';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../firebase/config"




function CustomersInfo(props) {
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	

  

    const DeleteMyNote=async(e)=>{
      e.preventDefault();
      await deleteDoc(doc(db, "Members", props.listInfo.id));
    }

    


   
  return (
    
    <div>
   
    <Modal  show={show} onHide={handleClose}>
    <Modal.Header closeButton className='modacont'>
      <Modal.Title  ><h3>Feel Free To Edit Your Input</h3></Modal.Title>
    </Modal.Header>
    
    <Modal.Body className='modacont'>
      <EditNote edit={props.EditNote} listInfo={props.listInfo} hide={handleClose} />
    </Modal.Body>
  </Modal>



 <div className="tablemain">
    <Col  >
    <Table striped>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{props.listInfo.name}</td>
          <td>{props.listInfo.date}</td>
          <td><Button onClick={handleShow}><span>&#9999;</span></Button>
          <Button onClick={DeleteMyNote} title="Delete"  variant="primary" type="submit">
                  <span> &#10006;</span> 
                 </Button>
          </td>
        </tr>
      
      
      </tbody>
    </Table>
            </Col>
            </div>
    </div>
  )
}

const mapDispatch={
  DeleteOneNote
};

export default connect(null, mapDispatch)(CustomersInfo);
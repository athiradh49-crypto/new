import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Hero2 = (props) => {


  return (
   <div className='text-center p-5 bg-light'>
    <h1>Campus Complaint Box</h1>
    <p>Report campus issues easily</p>
    <input type='text' placeholder='Department name' className='form-control mb-3' value={props.department} onChange={(e)=>props.setDepartment(e.target.value)}></input>
    <input type='text' placeholder='Complaint Description' className='form-control mb-3' value={props.description}onChange={(e)=>props.setDescription(e.target.value)}></input>
    <input type='text' placeholder='Image URL' className='form-contorl mb-3' value={props.image} onChange={(e)=>props.setImage(e.target.value)}></input>
    <Button className='btn btn-dark mt-3'onClick={props.addComplaints}>Submit</Button>
   
   </div>
   );
};

export default Hero2;
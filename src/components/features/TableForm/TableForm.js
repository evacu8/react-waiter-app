import { Form } from 'react-bootstrap';
import React, { useState } from "react";


const TableForm = props => {

  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const handleSubmit = () => {

  };

  return (
    <div className='col-6 col-md-4'>
      <h2>Table {props.id}</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center">
          <Form.Label htmlFor="status" className="mb-0 me-3"><strong>Status:</strong></Form.Label>
          <Form.Select 
            aria-label="Status select"
            id="status"              
            value={status} 
            onChange={e => setStatus(e.target.value)} >
            <option value="1">Free</option>
            <option value="2">Reserved</option>
            <option value="3">Busy</option>
            <option value="4">Cleaning</option>
          </Form.Select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <Form.Label htmlFor="peopleAmount" className="mb-0 me-3"><strong>People:</strong></Form.Label>
          <div className='d-flex'>
            <Form.Control 
              type="text"
              id="peopleAmount"
              aria-describedby="peopleAmount"
            />
            <Form.Text 
              className=''
              id="peopleAmount"
              value={peopleAmount} 
              onChange={e => setPeopleAmount(e.target.value)} >
                {peopleAmount}
            </Form.Text>
            <div className='mx-3'>/</div>
            <Form.Control
              type="text"
              id="maxPeopleAmount"
              aria-describedby="maxPeopleAmount"
            />
            <Form.Text 
              className=''
              id="maxPeopleAmount"
              value={maxPeopleAmount} 
              onChange={e => setMaxPeopleAmount(e.target.value)} >
                {maxPeopleAmount}
            </Form.Text>
          </div>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <Form.Label htmlFor="bill" className="mb-0 me-3"><strong>Bill:</strong></Form.Label>
          <div className='me-2'>$</div>
          <Form.Control 
            type="text"
            id="bill"
            aria-describedby="bill"
          />
          <Form.Text 
            className='col-6'
            id="bill"
            value={bill} 
            onChange={e => setBill(e.target.value)} >
              {bill}
          </Form.Text>
        </div>
      </Form>
      <button type="button" className='btn btn-primary' onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default TableForm;
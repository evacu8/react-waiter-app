import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { updateTableData } from '../../../redux/tablesRedux';
import clsx from 'clsx';

const TableForm = props => {

  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  useEffect(() => {setBill(status==="Busy" ? props.bill : 0)}, [status])
  
  const dispatch = useDispatch();

  const payload = {
    id: props.id,
    status: status,
    peopleAmount: peopleAmount,
    maxPeopleAmount: maxPeopleAmount,
    bill: bill
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTableData(payload));

  };

  return (
    <div className='col-sm-6 col-md-4'>
      <h2>Table {props.id}</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center col-9">
          <Form.Label htmlFor="status" className="mb-0 me-3"><strong>Status:</strong></Form.Label>
          <Form.Select 
            aria-label="Status select"
            id="status"              
            value={status} 
            onChange={e => setStatus(e.target.value)} 
            >
            <option value="Free">Free</option>
            <option value="Reserved">Reserved</option>
            <option value="Busy">Busy</option>
            <option value="Cleaning">Cleaning</option>
          </Form.Select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <Form.Label htmlFor="peopleAmount" className="mb-0 me-3"><strong>People:</strong></Form.Label>
          <div className='d-flex col-6 col-sm-6 col-lg-5 col-xl-4'>
            <Form.Control 
              type="text"
              id="peopleAmount"
              aria-describedby="peopleAmount"
              value={peopleAmount} 
              onChange={e => setPeopleAmount(e.target.value)} 
            />
            <div className='mx-3'>/</div>
            <Form.Control 
              type="text"
              id="maxPeopleAmount"
              aria-describedby="maxPeopleAmount"
              value={maxPeopleAmount} 
              onChange={e => setMaxPeopleAmount(e.target.value)} 
            />
          </div>
        </div>
        <div className={clsx('mb-3', 'd-flex', 'align-items-center', 'col-6', 'col-sm-6', 'col-lg-5', 'col-xl-4', status!=="Busy" && 'd-none')}>
          <Form.Label htmlFor="bill" className="mb-0 me-3"><strong>Bill:</strong></Form.Label>
          <div className='me-2'>$</div>
          <Form.Control 
            type="text"
            id="bill"
            aria-describedby="bill"
            value={bill} 
            onChange={e => setBill(e.target.value)}
          />
        </div>
      </Form>
      <button type="button" className='btn btn-primary' onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default TableForm;
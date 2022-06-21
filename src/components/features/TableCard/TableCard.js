import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTableData } from '../../../redux/tablesRedux';
import DeleteModal from '../../views/DeleteModal/DeleteModal';

const TableCard = props => {

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleRemove = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(removeTableData(props.id));
  }

  return (
    <Container className='col-lg-8 '>
      <Card className='mt-1 rounded-0 border-0 border-bottom '>
        <Card.Body className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <Card.Title className='mb-0 me-3'>Table {props.id}</Card.Title>
            <Card.Text>
              <strong>Status:</strong> {props.status}
            </Card.Text>
          </div>
          <div>
            <Link to={`/table/${props.id}`}>
              <button type="button" className='btn btn-primary me-2'>Show more</button>
            </Link>
              <button type="button" className='btn btn-outline-danger' onClick={handleShow}>Delete</button>
          </div>
        </Card.Body>
      </Card>
      <DeleteModal id={props.id} show={showModal} handleClose={handleClose} handleRemove={handleRemove}/>
    </Container>
  );
};

TableCard.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
}

export default TableCard;
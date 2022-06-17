import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableCard = props => {
  return (
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
            <button type="button" className='btn btn-primary'>Show more</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TableCard;
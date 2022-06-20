import TableForm from '../../features/TableForm/TableForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { addNewTable } from '../../../redux/tablesRedux';


const AddTable = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = payload => {
    // dispatch(addNewTable(payload));
    navigate("/");
  };

  return (
    <div>
      <TableForm       
      actionText="Add Table"
      action={handleSubmit} /> 
    </div>
  );
};

export default AddTable;
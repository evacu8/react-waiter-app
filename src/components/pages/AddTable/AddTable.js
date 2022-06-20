import TableForm from '../../features/TableForm/TableForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTableData, getLastTable } from '../../../redux/tablesRedux';


const AddTable = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = payload => {
    dispatch(addTableData(payload));
    navigate("/");
  };

  const lastTable = useSelector(state=>getLastTable(state));
  
  const id = (parseInt(lastTable.id) + 1).toString();

  return (
    <div>
      <TableForm
      id={ id }
      actionText="Add Table"
      action={handleSubmit} /> 
    </div>
  );
};

export default AddTable;
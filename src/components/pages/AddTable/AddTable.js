import TableForm from '../../features/TableForm/TableForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTableData, getAllTables } from '../../../redux/tablesRedux';


const AddTable = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = payload => {
    dispatch(addTableData(payload));
    navigate("/");
  };

  const allTables = useSelector(state=>getAllTables(state));

  const checkId = (allTables) => {
    const idArray = [];
    for (let table of allTables){
      idArray.push(parseInt(table.id));
    }
    const filteredArray = idArray.filter(id => !(idArray.includes(id + 1)));
    const lowestId = filteredArray[0] + 1
    const id = lowestId.toString();
    return id;
  }
    
  const id = checkId(allTables) ;

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
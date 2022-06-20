import { useParams, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateTableData } from '../../../redux/tablesRedux';

const Table = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const tableData = useSelector(state => getTableById(state, id));

  const handleSubmit = payload => {
    dispatch(updateTableData(payload));
    navigate("/");
  };

  if(!tableData) return <Navigate to="/" />;

  return (
    <TableForm
      key={tableData.id}
      id={tableData.id}
      status={tableData.status}
      peopleAmount={parseInt(tableData.peopleAmount)}
      maxPeopleAmount={parseInt(tableData.maxPeopleAmount)}
      bill={parseInt(tableData.bill)}
      actionText="Update"
      action={handleSubmit}
    />
  );
};

export default Table;
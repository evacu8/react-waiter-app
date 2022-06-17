import { useParams, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';

const Table = () => {

  const { id } = useParams();
  
  const tableData = useSelector(state => getTableById(state, id));

  if(!tableData) return <Navigate to="/" />;

  return (
    <TableForm
      key={tableData.id}
      id={tableData.id}
      status={tableData.status}
      peopleAmount={parseInt(tableData.peopleAmount)}
      maxPeopleAmount={parseInt(tableData.maxPeopleAmount)}
      bill={parseInt(tableData.bill)}
    />
  );
};

export default Table;
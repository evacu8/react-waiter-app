import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Container } from "react-bootstrap";
import TableCard from "../TableCard/TableCard"

const AllTables = () => {

  const tables = useSelector(state => getAllTables(state));

  return (
    <Container>
      <h2>AllTables</h2>
      <ul className="d-flex flex-wrap row">
        {tables.map(table => 
          <TableCard 
            key={table.id} 
          />)}
      </ul>

    </Container>
  );
};

export default AllTables;
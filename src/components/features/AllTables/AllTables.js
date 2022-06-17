import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Container } from "react-bootstrap";
import TableCard from "../TableCard/TableCard";
import Spinner from 'react-bootstrap/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from "react";

const AllTables = () => {

  const tables = useSelector(state => getAllTables(state));

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(tables){
      setLoaded(true)
    }
  }, [tables])

  return (
    <Container>
      <h2 className="mb-4">All Tables</h2>
      <Spinner animation="border" role="status" className={clsx(loaded && 'd-none')}></Spinner>
      <ul className="d-flex flex-wrap row">
        {tables.map(table => 
          <TableCard 
            key={table.id}
            id={table.id}
            status={table.status}
          />)}
      </ul>

    </Container>
  );
};

export default AllTables;
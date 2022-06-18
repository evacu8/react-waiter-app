import { API_URL } from '../config';

//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = actionName => createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
  return(dispatch) => {
    fetch(API_URL)
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
  }
};
export const updateTableData = (payload) => {
  return(dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    fetch(`${API_URL}/${payload.id}`, options)
    .then(tables => dispatch(updateTables(tables)));
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;
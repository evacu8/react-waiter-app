import { API_URL } from '../config';
console.log("API_URL:", API_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);
// export const getLastTable = ({ tables }) => tables.find(table => parseInt(table.id) === tables.length);
export const getLastTable = ({ tables }) => tables.find(table => (parseInt(table.id) +1) !== true);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = () => createActionName('UPDATE_TABLES');
const EDIT_TABLE = () => createActionName('EDIT_TABLE');
const ADD_TABLE = () => createActionName('ADD_TABLE');
const REMOVE_TABLE = () => createActionName('REMOVE_TABLE');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const editTable = payload => ({type: EDIT_TABLE, payload});
export const addNewTable = payload => ({type: ADD_TABLE, payload});
export const removeTable = payload => ({type: REMOVE_TABLE, payload});

export const fetchTables = () => {
  return(dispatch) => {
    fetch(`${API_URL}/tables`)
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
    fetch(`${API_URL}/tables/${payload.id}`, options)
    .then(dispatch(editTable(payload)));
  }
};

export const addTableData = (payload) => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    fetch(`${API_URL}/tables`, options)
    .then(() => dispatch(addNewTable(payload)))
    .then(() => fetchTables());
  }
};

export const removeTableData = (payload) => {
  return(dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    };
    fetch(`${API_URL}/tables/${payload}`, options)
    .then(() => dispatch(removeTable(payload)))
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map(
        (table) => table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case ADD_TABLE:
      return [...statePart, ...action.payload];
    case REMOVE_TABLE:
      return statePart.filter(table => (table.id !== action.payload))
    default:
      return statePart;
  };
};
export default tablesReducer;
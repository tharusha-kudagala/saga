import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFetch } from './actions'

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  const fetchDataHandler = () => {
    dispatch(getUsersFetch())
  }
  return (
    <div>
      <ol>
        {users.map(users => (<li key={users.id}>{users.name}</li>))}
      </ol>
    <button onClick={fetchDataHandler}>Fetch</button>
    </div>
  );
}

export default App;

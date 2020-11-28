
import { Todo, TodoReducer } from './components/todo';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(TodoReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Todo />      
    </Provider>

  );
}

export default App;

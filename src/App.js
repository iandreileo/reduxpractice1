
import { Todo, TodoReducer } from './components/todo';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AnotherComp from './components/todo/anothercomp/AnotherComp';

const store = createStore(TodoReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Todo /> 
      <AnotherComp />     
    </Provider>

  );
}

export default App;

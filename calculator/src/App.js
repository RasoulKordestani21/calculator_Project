import './App.css';
import Button from './components/Button';
import { Provider } from 'react-redux';
import store from './redux/store';
import  Test  from './components/Test'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
        <Button />

      </div>
    </Provider>
  )
}

export default App;

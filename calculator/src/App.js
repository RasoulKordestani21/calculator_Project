import './App.css';
import Button from './components/Button';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button />
      </div>
   </Provider>
  )
}

export default App;

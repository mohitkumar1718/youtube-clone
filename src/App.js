import { Provider } from 'react-redux';
import './App.css';
import Body from "./component/Body"
import store from './utils/store';
import Header from './component/Header';
function App() {
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;

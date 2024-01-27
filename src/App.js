import { Provider } from 'react-redux';
import './App.css';
import Body from "./component/Body"
import store from './utils/store';
import Header from './component/Header';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import WatchPage from './component/WatchPage';
import MainContainer from "./component/MainContainer"
function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
  }])
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;

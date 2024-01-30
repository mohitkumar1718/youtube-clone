import { Provider } from 'react-redux';
import './App.css';
import Body from "./component/Body"
import store from './utils/store';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import WatchPage from './component/WatchPage';
import MainContainer from "./component/MainContainer"
import SearchContent from './component/SearchContent';
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
    },
    {
      path:"/search/:id",
      element:<SearchContent/>
    }
  ]
  }])
  return (
    <Provider store={store}>
    <div >
    
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;

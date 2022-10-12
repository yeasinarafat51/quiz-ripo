
import { RouterProvider } from 'react-router-dom';
import './App.css';

import router from './Components/Routes';


function App() {

  return (
    <div className='body'>
      
      <RouterProvider router={router}/>

    </div>
  )
}

export default App;

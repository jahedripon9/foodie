import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='container mx-auto px-4'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

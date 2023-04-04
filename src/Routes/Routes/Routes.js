import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                // path: '/login',
                // element: <Login />
            },
            {
                // path: '/',
                // element: <Appointment />
            } 
        ]
    }
])

export default router; 
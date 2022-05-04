import { Route, Routes, useRoutes} from 'react-router-dom';
import { Details } from '../Pages/Details';
import { Home } from '../Pages/Home';


export const MainRoutes = () =>{
    return useRoutes([
        { path:'/', element:<Home />},
        { path:'/Details', element:<Details />},
    ])
}
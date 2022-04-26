
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home';
import { Property } from './pages/Property';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Account } from './pages/Account';
import {Favorites} from './pages/Favorites';
import { Descripcion } from './pages/Home/components/Descripcion';

export const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property' element={<Property />} />
            <Route path='/account' element={<Account />} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/descripcion' element={<Descripcion />}/>
        </Routes>
    </BrowserRouter>
)
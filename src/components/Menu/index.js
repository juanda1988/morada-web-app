import { type } from '@testing-library/user-event/dist/type';
import {IoHome, IoPerson,IoStar, IoAdd} from 'react-icons/io5';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';

const MenuCustomerItems = [
    {
        icon:IoHome,
        label:'inicio',
        path:'/'
    },

    {
        icon:IoStar,
        label:'Favoritos',
        path:'/favorites'
    },

    {
        icon:IoPerson,
        label:'Perfil',
        path:'account'
    }
];
const MenuAdminItems = [
    {
        icon:IoHome,
        label:'inicio',
        path:'/'
    },

    {
        icon:IoAdd,
        label:'Agregar',
        path:'/add-property'
    },

    {
        icon:IoPerson,
        label:'Perfil',
        path:'account'
    }
]
export const Menu = () => {

    const typeProfile = 2;
    return(
    <MenuWrapper>
        {   
            typeProfile ===1 && MenuCustomerItems.map(item => <MenuItem {...item}/>)
        }
        {   
            typeProfile ===2 && MenuAdminItems.map(item => <MenuItem {...item}/>)
        }
       
        
    </MenuWrapper>
)}
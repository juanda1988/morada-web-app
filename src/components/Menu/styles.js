
import styled from 'styled-components';
import { MENU_HEIGHT } from '../../constants/styles';

export const MenuWrapper = styled.div`
   
   width: 100%;
   height: ${MENU_HEIGHT}px;
   position: fixed;
   left:0;
   bottom:0;
   background-color: #fff;
   display:flex;
   //justify-content:space-between;
   a{
      flex: 1;
      text-decoration: none;
   
   }
`;

export const MenuItemWrapper = styled.section`
   border: 1px solid #ccc;
   display: flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   svg {
      color:#4A148C;
      font-size:1.3em;
   }

   p{
      margin:5px auto;
      color: '#4a148c'
   }
   &:hover {
      background-color:#4A148C;
      svg{
         color: #fff;
      }
      p{
         color: #fff;
      }
   }
`;
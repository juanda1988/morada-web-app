import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../../constants/styles';



export const PropertyTypeButtonWrapper = styled.div`
   background-color:${props =>props.selected? PRIMARY_COLOR: '#fff'};
   border-radius: 10px;
   min-width: 150px;
   margin: 0 5px;
   display: flex;
   flex-direction: column;
   align-items:center;
   
   p{
       color: ${props => props.selected? '#fff':'#4A148C'};
   }
   &:hover{
       background:#4A148C;
       cursor:pointer;
       svg {
           color: #fff;
       }
       p{
           color:#fff;
       }
   }
`

export const IconWrapper = styled.div`
margin-top: 9px;
 svg {
     font-size: 1.8em;
     color: ${props => props.selected ?'#fff':PRIMARY_COLOR };
 }

`;
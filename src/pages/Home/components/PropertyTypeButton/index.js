
import { IconWrapper, PropertyTypeButtonWrapper } from "./styles";


export const PropertyTypeButton = ({icon:Icon,label,selected,onPress,id}) => (
   <PropertyTypeButtonWrapper onClick={()=> onPress(id)} selected={selected}>
      <IconWrapper selected={selected}>
         <Icon />
      </IconWrapper>
        <p>{label}</p>
   </PropertyTypeButtonWrapper>

)
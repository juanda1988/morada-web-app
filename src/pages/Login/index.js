import {Page} from "../../components/Page";
import {FormControl, PageTittle, FormControlInput,FormControlAction} from "../../globalStyles";
import {Button} from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye,IoEyeOff} from 'react-icons/io5';
import { useState } from "react";

export const Login = () => {

  let variable = 1;
  const [visiblePass, setVisiblePass] = useState(false);

 const tooglePasswordVisible =()=>{
   
   setVisiblePass(!visiblePass);
 }
  return(
    <Page hideMenu>
          <PageTittle>Iniciar Sesion </PageTittle>
          <br />
          <form>
              <FormControl>
                <FormControlInput>
                <label>Correo electronico</label>
                <input type="email" />
                </FormControlInput>
              </FormControl>
                <FormControl>
                <FormControlInput>
                  <label>Contraseña</label>
                  <input type={visiblePass? "text" : "password"} />
                </FormControlInput>
                <FormControlAction>
                   <ButtonIcon icon={visiblePass? IoEyeOff:IoEye} onPress={tooglePasswordVisible}/>
                </FormControlAction>
              </FormControl>
              <br />
              <Button label="ingresar" onPress = {()=> alert("")}/>
          </form>
    </Page>);
}
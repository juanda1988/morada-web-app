import {Page} from "../../components/Page";
import {FormControl, PageTittle} from "../../globalStyles";
import {Button} from "../../components/Button"
export const Login = () => (
    <Page hideMenu>
          <PageTittle>Iniciar Sesion</PageTittle>
          <br />
          <form>
              <FormControl>
              <div>
                <label>Correo electronico</label>
                <input type="email" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Contraseña</label>
                <input type="password" />
              </div>
              </FormControl>
              <br />
              <Button label="ingresar" onPress = {()=> alert("")}/>
          </form>
    </Page>
)
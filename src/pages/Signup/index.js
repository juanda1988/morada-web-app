import {Page} from "../../components/Page";
import {FormControl, PageTitle} from "../../globalStyles";
import {Button} from "../../components/Button";
export const Signup = () => (
    <Page hideMenu>
          <PageTitle>Registrarse</PageTitle>
          <br />
          <form>
             <FormControl>
              <div>
                <label>Nombre</label>
                <input type="name" />
              </div>
              </FormControl>
             <FormControl>
              <div>
                <label>Apellidos</label>
                <input type="name" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Correo electronico</label>
                <input type="email" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Celular</label>
                <input type="telefono" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Contraseña</label>
                <input type="password"/>
              </div>
              </FormControl>
              <br />
              <Button label="Registrarse" onPress = {()=> alert("Gracias por completar el registro")}/>
          </form>
    </Page>
)
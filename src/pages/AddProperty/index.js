import {Page} from "../../components/Page";
import {FormControl, PageTittle} from "../../globalStyles";
import {Button} from "../../components/Button";
export const AddProperty = () => (
    <Page hideMenu>
          <PageTittle>Registrar Propiedad</PageTittle>
          <br />
          <form>
             <FormControl>
              <div>
                <label>Nombre de la propiedad</label>
                <input type="name" />
              </div>
              </FormControl>
             <FormControl>
              <div>
                <label>Dirección de la propiedad</label>
                <input type="name" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label> Descripción de la propiedad</label>
                <input type="name" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Email del propietario</label>
                <input type="email" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                <label>Celular de contacto propietario</label>
                <input type="telefono" />
              </div>
              </FormControl>
              <FormControl>
              <div>
                    <input type="radio" value="Apartamento" name="gender" /> Apartamento
                    <input type="radio" value="Casa" name="gender" /> Casa
                    <input type="radio" value="Lote" name="gender" /> Lote
                    <input type="radio" value="Finca" name="gender" /> Finca
                    <input type="radio" value="Local" name="gender" /> Local
              </div>
              </FormControl>
              <br />
              <Button label="Registrarse" onPress = {()=> alert("Gracias por completar el registro")}/>
          </form>
    </Page>
)
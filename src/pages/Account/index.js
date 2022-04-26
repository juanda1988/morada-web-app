import { Button } from "../../components/Button";
import {Page} from "../../components/Page";
import { PageTittle } from "../../globalStyles";
export const Account = () => {

    const isAuth = false;

    const UserInfo = () => (
        <div>
            <h3>Jerson</h3>
            <h5>99999111</h5>
            <p>jerson.suaza@cedesistemas.edu.co</p>
            <hr />
            <Button label="cerrar Sesión" onPress={() =>{alert('cerrar sesión')}}/>
        </div>
    )
    const UserUnauthorized = () =>(
        <div>
            <h2>No estás autenticado</h2>
            <p>Para acceder a tu perfil de usuario debes iniciar sesión</p>
            <hr />
            
            <Button label="iniciar sesión" linkTo={"/login"}/>
            <br />
            <p>¿No estás registrado aun?</p>
            <Button label="registrarse" linkTo={"/signup"}/>
        </div>
    )

    return(
    <Page>
          <PageTittle>Mi cuenta</PageTittle>
          {
              isAuth ? <UserInfo /> : <UserUnauthorized />
          }
    </Page>
    )
};
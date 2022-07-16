import { useContext, useState } from "react";
import { Page } from "../../components/Page";
import {
  FormControl,
  FormControlInput,
  FormControlAction,
  PageTitle,
} from "../../globalStyles";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/TokenLS";
import { UserContext } from "../../contexts/UserContext";

export const Login = () => {

  const {user, setUser} = useContext(UserContext);

  const [visiblePass, setVisiblePass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const tooglePasswordVisible = () => {
    setVisiblePass(!visiblePass);
  };

  const onSubmitLogin = (data) => {
    console.log("data", data);
    loginRequest(data);
  };

  const loginRequest = async (data) => {
    try {
      const response = await requestHttp({
        endpoint: "/users/login",
        body: data,
      });
      const {data: dataResponse} = response;
      await requestGetUserInfo(dataResponse.token);
      setToken(dataResponse.token);
      showAlert(
        "Bienvenido",
        "Validación correcta",
        SW_ICON.SUCCESS, 
        () => { navigate('/') }
      );
    } catch (error) {
      console.log("error", error);
      showAlert("Error", "Credenciales incorrectas", SW_ICON.ERROR);
    }
  };

  const requestGetUserInfo = async (token) => {
    try {
      const response = await requestHttp({
        method: HTTP_VERBS.GET,
        endpoint: '/users/info',
        token
      });
      const {data} = response;
      setUser({
        name: data.user.name,
        phone: data.user.phone,
        role: data.user.role,
        identification: data.user.document,
        email: data.user.email,
        isAuthenticated: true
      });
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Page hideMenu>
      <PageTitle>Iniciar sesión</PageTitle>
      <br />
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <FormControl>
          <FormControlInput>
            <label>Correo electrónico</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email?.type === "required" && (
              <span>El campo correo es requerido</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Ingrese un correo electrónico valido</span>
            )}
          </FormControlInput>
        </FormControl>
        <FormControl>
          <FormControlInput>
            <label>Contraseña</label>
            <input
              type={visiblePass ? "text" : "password"}
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <span>El campo contraseña es requerido</span>
            )}
          </FormControlInput>
          <FormControlAction>
            <ButtonIcon
              icon={visiblePass ? IoEyeOff : IoEye}
              onPress={tooglePasswordVisible}
            />
          </FormControlAction>
        </FormControl>
        <br />
        <Button
          disabled={!isValid}
          type="submit"
          onPress={() => {}}
          label="Ingresar"
        />
      </form>
    </Page>
  );
};
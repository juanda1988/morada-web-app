import { Fragment, useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { PropertyTypesContainer } from "../../styles";
import myimage from "../Hello/th.jpg";
import { PropertyTypeWelcomeWrapper } from "./styles";
import { BsHandThumbsUp } from "react-icons/bs";

export const Hello = ({ name }) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <PropertyTypesContainer>
      <Fragment>
        <img src={myimage} alt="bienvenida" />

        <PropertyTypeWelcomeWrapper>
          <h2>Hi, {user.name}</h2>
          <h1>Find</h1>
          <h2>
            Best place <span>nearby</span>{" "}
            <span>
              <BsHandThumbsUp />
            </span>
          </h2>
        </PropertyTypeWelcomeWrapper>
      </Fragment>
    </PropertyTypesContainer>
  );
};

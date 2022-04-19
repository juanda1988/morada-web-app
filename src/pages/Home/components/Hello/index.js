import { Fragment } from "react";
import { PropertyTypesContainer } from "../../styles";
import myimage from "../Hello/th.jpg"

export const Hello = ({name}) => (
    <PropertyTypesContainer>
        <Fragment>
            <img src={myimage} alt="bienvenida"/>
            <h1>Hi {name}</h1>
        </Fragment>
    </PropertyTypesContainer>
)
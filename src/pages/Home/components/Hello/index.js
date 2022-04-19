import { Fragment } from "react";
import { PropertyTypesContainer } from "../../styles";

export const Hello = ({name}) => (
    <PropertyTypesContainer>
        <Fragment>
            <img src="C:\Users\Juan David\Documents\Fullsatack Cedesistemas\proyectos\morada-app\morada-web-app\th.jpg" alt="bienvenida"/>
            <h1>Hi {name}</h1>
        </Fragment>
    </PropertyTypesContainer>
)
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel"
import { Subtitle } from "../../../../globalStyles"
import { PropertyCardWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./styles"

export const PropertyCard = () => (
    <PropertyCardWrapper>
        <PropertyImageWrapper>
            <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg" />
        </PropertyImageWrapper>
        <PropertyInfoWrapper>
            <h3>Apartamento en Laureles</h3>
            <Subtitle>
                Laureles, Medellin
            </Subtitle>
            <PropertyTypeLabel />
            <p>Venta</p>
            <p>$400.000</p>

        </PropertyInfoWrapper>
    </PropertyCardWrapper>
)
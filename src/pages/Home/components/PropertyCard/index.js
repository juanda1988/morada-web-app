import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getStaticImage } from "../../../../utils/StaticImage";
import { Descripcion } from "../Descripcion";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import {
  PropertyCardWrapper,
  PropertyImageWrapper,
  PropertyInfoWrapper,
  PropertyValueWrapper,
} from "./styles";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";

export const PropertyCard = (props) => (
  <PropertyCardWrapper to={`property/${props._id}`}>
    <PropertyImageWrapper>
      <img
        alt="foto propiedad"
        src={getStaticImage(props.mainImage)}
        onSubmit={() => {
          <Descripcion />;
        }}
      />
    </PropertyImageWrapper>
    <PropertyInfoWrapper>
      <h3>{props.title}</h3>
      <SubTitle>{getCityZoneLabel(props.city, props.zone)}</SubTitle>
      <PropertyTypeLabel typeId={props.propertyType} />
      <PropertyBusinessType businessType={props.businessType} />
      <PropertyValueWrapper>
        <p>{getCurrencyFormat(props.value)}</p>
      </PropertyValueWrapper>
    </PropertyInfoWrapper>
  </PropertyCardWrapper>
);

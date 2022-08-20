import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { UserContext } from "../../contexts/UserContext";
import { getCurrencyFormat } from "../../utils/CurrencyFormat";
import {
  getBusinessTypeLabel,
  getCityZoneLabel,
  getPropertyTypeLabel,
} from "../../utils/GetDataConstants";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { getStaticImage } from "../../utils/StaticImage";
import { PropertyTypeButton } from "../Home/components/PropertyTypeButton";
import {
  PropertyDetail_Global,
  PropertyDetail_Global_DOS,
  PropertyDetail_Options,
  PropertyGalleryWrapper,
  PropertyInfoWrapper,
  PropertyTypeDetailWrapper,
  PropertyTypesContainerHead,
} from "./styles";
import { IoStar, IoAddCircle, IoHome } from "react-icons/io5";

const PropertiesRequest = [
  { id: 1, icon: IoStar, label: "Agregar a Favoritos" },
  { id: 2, icon: IoAddCircle, label: "Estoy interesado" },
];

export const Property = () => {
  const { idProperty } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [property, setProperty] = useState([]);

  //console.log(property.property._id);

  useEffect(() => {
    const Consultar = async () => {
      await getProperty();
    };
    Consultar();
  }, []);

  const getProperty = async () => {
    try {
      const response = await requestHttp({
        method: HTTP_VERBS.GET,
        endpoint: `/properties/${idProperty}`,
      });
      const { data } = response;
      setProperty(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <PropertyDetail_Global>
        <PropertyDetail_Global_DOS>
          <PropertyTypeDetailWrapper>
            <PropertyGalleryWrapper>
              <img
                alt="foto propiedad"
                src={getStaticImage(
                  property.property ? property.property.mainImage : "img"
                )}
              />
            </PropertyGalleryWrapper>

            <PropertyInfoWrapper>
              <h1>{property.property ? property.property.title : ""}</h1>
              <h2>
                {property.property ? property.property.shortDescription : ""}
              </h2>

              <h3>{property.property ? property.property.description : ""}</h3>
              <h3>
                {property.property
                  ? getCityZoneLabel(property.property.city)
                  : ""}
              </h3>
              <h3>
                {property.property
                  ? getCityZoneLabel(property.property.zone)
                  : ""}
              </h3>
              <h3>
                {property.property
                  ? getPropertyTypeLabel(property.property.propertyType)
                  : ""}
              </h3>
              <h3>
                {property.property
                  ? getBusinessTypeLabel(property.property.businessType)
                  : ""}
              </h3>
              <h3>
                {property.property
                  ? getCurrencyFormat(property.property.value)
                  : ""}
              </h3>
              <br />
            </PropertyInfoWrapper>
            <PropertyDetail_Options>
              {user.isAuthenticated ? (
                PropertiesRequest.map((item, key) => (
                  <PropertyTypeButton
                    key={key}
                    icon={item.icon}
                    label={item.label}
                    id={item.id}
                  />
                ))
              ) : (
                <a href="/Login">
                  ¿Para agregar favoritos y enviar una solicitud de interes?
                  <span> " Inicia seccion "</span>{" "}
                </a>
              )}
            </PropertyDetail_Options>
          </PropertyTypeDetailWrapper>
        </PropertyDetail_Global_DOS>
      </PropertyDetail_Global>
    </Page>
  );
};

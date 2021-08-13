import React from "react";
import Icon1 from "../../images/svg-I.svg";
import Icon2 from "../../images/svg-E.svg";
import Icon3 from "../../images/svg-G.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>Previous Work</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>IMDB Clone API</ServicesH2>
          <ServicesP>
            From fetching movies to user reviews, authentication much more.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ECommerce Site</ServicesH2>
          <ServicesP>
            A clothing Site which have all functionalities from previewing
            products to order them with payment gateway.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>GitHub</ServicesH2>
          <ServicesP>For more projects check out Github.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

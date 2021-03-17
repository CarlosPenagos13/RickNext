import React from "react";
import { Container, A } from "./Styled";

const Footer = () => (
  <Container>
    <div>
      <h4>Nosotros</h4>
      <A>Conoce más</A>
    </div>
    <div>
      <h4>Make by:</h4>
      <p>
        Next.js, styled components, redux, semantic React
        <br />
        Hecho por @LilRabb 
      </p>
    </div>
  </Container>
);

export default Footer;

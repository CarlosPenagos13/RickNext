import styled from "styled-components";

export const CharContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 300px));
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
  .ui.card.card {
    background-color: #0bda51;
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
`;

export const Abo = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 10%;
  padding-bottom: 16%;
`;

export const Body = styled.body`
  margin: 0;
  margin-bottom: 40px;
`;

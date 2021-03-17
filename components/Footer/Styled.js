import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  background-color: #06500c;
  margin-top: 20px;
  color: white;
  grid-template-columns: repeat(2, minmax(100px, 400px));
  height: 120px;
`;

export const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

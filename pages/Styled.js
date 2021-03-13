import styled from "styled-components";

export const CharContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 300px));
  gap: 20px;
  justify-content: center;

  .ui.card.card {
    background-color: #606579;
    flex-wrap: wrap;
  }
`;

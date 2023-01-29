import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2rem orange;
  cursor: pointer;
`;

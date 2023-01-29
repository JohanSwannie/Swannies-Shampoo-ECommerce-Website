import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  text-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2rem orange;
  margin-bottom: 25px;
  border-radius: 20%;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
    color: #fff;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

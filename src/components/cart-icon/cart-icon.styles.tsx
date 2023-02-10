import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  bottom: 12px;
  line-height: 0.5;
`;

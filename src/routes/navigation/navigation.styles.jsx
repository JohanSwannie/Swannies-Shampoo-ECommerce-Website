import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(236, 225, 205, 0.5);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 160px;
  padding: 25px;
`;

export const Image = styled.img`
  width: 200px;
  height: 90px;
  mix-blend-mode: multiply;
`;

export const BusinessName = styled.div`
  font-family: "Stint Ultra Condensed", cursive;
  font-size: 40px;
  font-weight: lighter;
  padding: 10px 15px;
  opacity: 0.9;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

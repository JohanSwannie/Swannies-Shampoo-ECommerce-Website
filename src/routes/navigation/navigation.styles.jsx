import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(236, 225, 205, 0.9);
  margin: 0 0 10px 0;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 160px;
  padding: 25px;
`;

export const Image = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 0;
  border-radius: 50%;
  mix-blend-mode: multiply;
`;

export const BusinessName = styled.div`
  font-family: "Stint Ultra Condensed", cursive;
  font-size: 40px;
  font-weight: lighter;
  padding: 10px 15px;
  margin-left: 1rem;
  line-height: 2;
  opacity: 0.9;
`;

export const NavLinks = styled.div`
  font-family: "Stint Ultra Condensed", cursive;
  width: 40%;
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

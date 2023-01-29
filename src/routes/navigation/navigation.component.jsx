import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CompanyLogo from "../../assets/swannies-shampoo-company-logo.PNG";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Image,
  BusinessName,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Image src={CompanyLogo} alt="companyLogo" />
        </LogoContainer>
        <BusinessName>
          Swannie's Shampoo Mecca - Shampoos are forever!
        </BusinessName>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

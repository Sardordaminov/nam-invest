import styled from "styled-components";

export const NavbarMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

export const NavbarTopStlyes = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-bottom: 1px solid #eeeeee50;
`;
export const Container = styled.div`
  width: 1200px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: transparent;
`;
export const LogoBx = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  .logotype {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .gerb-logo {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .nav-logo {
    cursor: pointer;
    width: 190px;
    height: 55px;
    margin-left: 10px;
  }
  .multi-lang {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .multi-lang .fa-chevron-down {
    margin-left: 3px;
    font-size: 12px;
    transition: 0.1s ease;
  }
  .multi-lang .fa-chevron-down.active {
    transform: rotate(180deg);
  }
`;
export const ContainerItem = styled.div`
  width: fit-content;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #fff;
    margin: 0px 15px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    transition: 0.2s ease;
    &:hover {
      color: #00aeef;
    }
  }
`;
export const SearchBx = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 5px;
  i {
    font-size: 20px;
    color: white;
  }
`;
export const NavbarBot = styled.div`
  width: 100vw;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;
export const NavItems = styled.div`
  position: relative;
`;

export const NavItemModalBx = styled.div`
  position: absolute;
  width: 300px;
  min-height: 150px;
  top: 35px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 10;
  transform: translateX(-0%);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
`;
export const NavItem = styled.div`
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  i {
    margin-left: 5px;
    transition: transform 0.2s ease;
  }
  &:hover {
    i {
      transform: rotate(180deg);
    }
    ${NavItemModalBx} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
export const NavItemModal = styled.div`
  margin: 0px 0px 15px 0px;
  a {
    color: #00000090;
    margin: 10px 0px;
    transition: 0.2s ease;
    &:hover {
      color: #00aeef;
    }
  }
`;

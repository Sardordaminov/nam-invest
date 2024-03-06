import styled from "styled-components";

export const NavbarTopStlyes = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
export const Container = styled.div`
  width: 1200px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: black;
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
    font-family: "Montserrat", sans-serif;
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

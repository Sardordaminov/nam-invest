import styled from "styled-components";

export const HomeStyles = styled.div`
  position: relative;
  width: 100vw;
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
`;
export const HomeItem = styled.div`
  width: 500px;
`;
export const HomeTitle = styled.h1`
  padding: 15px 0px;
  line-height: 75px;
  font-size: 55px;
  color: #fff;
`;
export const HomeItemBtn = styled.button`
  padding: 10px 30px;
  font-size: 14px;
  background-color: #00aeef30;
  color: #fff;
  border: none;
  backdrop-filter: blur(2px);
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    backdrop-filter: blur(10px);
    transform: scale(1.01);
  }
`;
export const HomeSocialIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  a {
    color: #fff;
    font-size: 16px;
    margin: 0px 7px;
    transition: 0.2s ease;
    &:hover {
      color: #00aeef;
    }
  }
`;

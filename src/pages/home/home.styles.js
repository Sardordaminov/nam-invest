import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100vw;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

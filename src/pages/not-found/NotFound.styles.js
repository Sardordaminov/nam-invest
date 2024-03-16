import styled from "styled-components";

export const NotFoundStyles = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 20px;
  }
  a {
    padding: 13px 25px;
    backdrop-filter: blur(2px);
    background-color: #ffffff30;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 13px;
    border-radius: 5px;
    transition: 0.4s ease;
  }
`;

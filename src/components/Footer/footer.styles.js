import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  background-color: #ffffff;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterTopStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
`;
export const LogoBx = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
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
`;
export const Item = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  a {
    color: #000000;
    font-weight: 600;
    cursor: pointer;
    margin: 0px 0px 20px 0px;
    transition: 0.2s ease;
    &:hover {
      color: #00aeef;
    }
  }
`;
export const SecItem = styled.div`
  padding: 0px 15px;
  h3 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
      color: #00aeef;
    }
  }
`;
export const FooterBottomStyle = styled.div`
  border-top: 1px solid #eee;
  padding: 20px 0px;
  a {
    text-decoration: underline;
    color: #00aeef;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const Card = styled.div`
  width: 90%;
  max-width: 500px;
  min-width: 320px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    color: #fafafa;
  }

  h3 {
    color: #e0e0e0;
    margin-bottom: 40px;
  }

  h4 {
    color: #9e9e9e;
    margin-bottom: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 48%;
  min-width: 140px;
  max-width: 260px;
  /* margin: 0px 10px; */

  @media (max-width: 554px) {
    width: 100%;
  }
`;

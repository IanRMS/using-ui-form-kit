import styled from "styled-components";

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 90%;
  max-width: 768px;
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
  }
`;

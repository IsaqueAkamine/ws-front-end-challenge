import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  background-color: #ded;
  flex-direction: column;
  align-items: center;
  margin-right: 6px;


  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
`;


export const UserDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserDescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserDescriptionText = styled.text`

`;

export const UserContactContainer = styled.div`
  margin-top: 18px;
  background-color: '#af0';
`;
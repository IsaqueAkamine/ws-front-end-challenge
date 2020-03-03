import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc(100vh -50px);
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px 15px;
  // background-color: #af0;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  // background-color: '#0fa';
  margin-right: 6px;

  // box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  // background-color: '#fc3';
  margin-top: 8px;
  margin-left: 6px;

  // box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
`;

export const GroupCards = styled.div`
  display: flex;
  margin-top: 8px;
`;
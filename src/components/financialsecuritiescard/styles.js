import styled from "styled-components";

export const Container = styled.div`
  display: flex;
//   height: 250px;
  width: 100%;
  background-color: #ded;
  flex-direction: column;
  align-items: center;
  margin-right: 6px;

  box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.2);
`;

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 8px;
`;

export const NumberText = styled.text`
    color: #fff;
    font-size: 28px;
`;

export const ValueText = styled.text`
    font-size: 18px;
    font-weight: bold;
`;
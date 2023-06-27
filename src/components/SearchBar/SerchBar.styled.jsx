import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  margin: 30px 0;
  border: 1px solid black;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: none;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
}`;

export const Btn = styled.button`
  background: none;
  color: black;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${(props) => (props.messageError ? "red" : "#eee")};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  background: transparent;
  border: none;
  svg {
    color: red;
  }
`;

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }

`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #0d2636;
      text-decoration: none;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

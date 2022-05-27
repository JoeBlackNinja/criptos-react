import styled from "@emotion/styled";

const Label = styled.div`
    background-color: red;
    color: #FFF;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
`;

const ErrorMensaje = ({children}) => {
  return (
    <Label>{children}</Label>
  )
}

export default ErrorMensaje
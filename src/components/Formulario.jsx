import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from "../data/monedas";
import ErrorMensaje from "./ErrorMensaje";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = (props) => {

  const [criptos,setCriptos] = useState([]);

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
  const [ criptomoneda, SelectCriptoMonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos);
  
  const [isValidFormulario,setIsValidFormulario] = useState(false);
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map(cripto => {
        
        const objeto ={
          id:cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName
        }
        return objeto;
      });
      setCriptos(arrayCriptos);

    }
    consultarAPI();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if([moneda,criptomoneda].includes('')){
      setIsValidFormulario(true);
      return
    }
    setIsValidFormulario(false);
    props.setMonedas({
      moneda,
      criptomoneda
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <SelectMonedas/>
      <SelectCriptoMonedas/>

      <InputSubmit 
          type='submit' 
          value='Cotizar'
      />
      
        {isValidFormulario && <ErrorMensaje>Todos los campos son obligatorios</ErrorMensaje>}
      
    </form>
  )
}

export default Formulario
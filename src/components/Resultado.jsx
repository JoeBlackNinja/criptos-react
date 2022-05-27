import styled from "@emotion/styled";

const DivResultado = styled.div`
    color:#FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    display: block;
    width: 100px;

`;

const Resultado = (props) => {
  return (
    <DivResultado>
        <Imagen 
            src={`https://cryptocompare.com/${props.resultado.IMAGEURL}`} 
            alt='imagen cripto'
        />
        <div>
            <Precio>El precio es de:{' '}<span>
                { props.resultado.PRICE}</span></Precio>
            <Texto>El precio mas alto del día:<span>
                {props.resultado.HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del día:<span>
                {props.resultado.LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas:<span>
                {props.resultado.CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización:<span>
                {props.resultado.LASTUPDATE}</span></Texto>
        </div>
    </DivResultado>
  )
}

export default Resultado
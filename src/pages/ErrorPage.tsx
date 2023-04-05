import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
`
 
export default function ErrorPage(){
    const error = useRouteError();
    return (
        <Div> Página não Existe </Div>
    );
};


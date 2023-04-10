import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
`

interface descriptiveText {
  name: string
}

 
export default function ErrorPage(props:descriptiveText){
  const { name } = props;
  const error = useRouteError();

    return (
        <Div> {name} </Div>
    );
};


import styled from 'styled-components'


export const TextBackground = styled.div`

    height: 31px;
    border-radius: 8px;
    background-color:  ${props => props.color};
    color:  ${({theme}) => theme.colors.background};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    &.textGray{
        color:${({theme}) => theme.colors.gray200};
    }

`

export const DivDetailsCoin = styled.div`

    min-width: 13.875rem;
 
    .iconCoin{
        height: 32px;
        width: 32px;
      
    }

    .text-min{
        font-size: 12px;
    }


    .percentage{
    height: 31px;
    border-radius: 8px;
    background-color:  ${({theme}) => theme.colors.green};
    color:  ${({theme}) => theme.colors.background};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    font-weight: bold;
    }
`


export const ItemCard = styled.div`
    text-align: left;
    height: 119px;
    display: flex;
    justify-content: center;
    margin-top: 70px;

    @media (max-width: 900px){
    margin-top: 2px;
    margin-bottom: 10px;
  }


`



export const CardCustom = styled.div`
    height: 119px;
    width: 319px;
    min-height: 119px;
    min-width: 319px;
    padding-left: 24px;
    padding-top: 22px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.gray150};
    border-radius: 0.5rem;
`





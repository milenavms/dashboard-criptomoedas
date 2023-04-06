import styled from 'styled-components'

export const TableValuesCustom = styled.div`

.iconCoin{
    height: 24px;
    width: 24px;
    padding-right: 0px;
}

.symbol{
    color:  ${({theme}) => theme.colors.gray200};
    margin-left: 8px;
}

.check-high{
    padding-top: 0.5rem;
    color: ${({theme}) => theme.colors.green};
}

.check-low{
    padding-top: 0.5rem;
    color: ${({theme}) => theme.colors.red}
}

.check-low  img{
  padding-bottom: 0.2rem;
  margin-right: 0.1rem;
}

.check-high img{
  padding-bottom: 0.2rem;
  margin-right: 0.2rem;
}

.triangulo{
  display: inline-block;
  margin-right: 50px;
}

`
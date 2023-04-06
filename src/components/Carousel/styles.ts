import styled from 'styled-components'

export const MainCarousel = styled.div`

 .main-carousel{
    width: 100%;
    max-width: 100%;
    margin:  0 auto;
    display: flex;
    justify-content:left;
  }

  .carousel{
    cursor: grab;
    overflow: hidden;
  }

  .inner-carousel{
    display: flex;
    margin-bottom: 5.5rem;
  }

  .item-flex-container{
    height: 7.375rem;
    width: 13.875rem;
    min-height: 7.375rem;
    min-width: 13.875rem;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.gray150};
    border-radius: 0.5rem;
    margin-right: 2rem;
  
  }

  
  .flex-1{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 0.75rem;
  }

  .flex-1 img{
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
  }


  .flex-2{
    display: flex;
    flex-direction: column;
 
  }

  .flex-2 .flex-1 img{
    height: 0.625rem;
    width: 0.625rem;
    margin-left: 0.2rem;
   
  }

  .flex-1  h1{
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    color:  ${({theme}) => theme.colors.black};
  }

  .current-price{
    padding-top: 0.7rem;
    font-size: 1rem;
    color:  ${({theme}) => theme.colors.gray200};
  }

  .flex-2 h2{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.75rem;
    font-weight: 700;
    color:  ${({theme}) => theme.colors.black};
  }

  h5{ 
    padding-top: 1rem;
    color:  ${({theme}) => theme.colors.black};
    
  }

  .check-high{
    padding-top: 0.5rem;
    color:  ${({theme}) => theme.colors.green};
  }

  .check-low{
    padding-top: 0.5rem;
    color:  ${({theme}) => theme.colors.red};
  }

  @media (max-width: 900px){
    .inner-carousel{
      margin-bottom: 3rem;
    }
  }

 `
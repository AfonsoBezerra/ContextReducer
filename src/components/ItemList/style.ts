import styled from 'styled-components';

export const Container = styled.div`
  height:calc(100% - 70px);
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  >h1{
    margin: 2rem 0;
  }
  .center{
    width: 100%;
    display: flex;
    justify-content:center;
  .Allcards{
    width: 100%;
   display: flex;
   flex-direction: row;
   justify-content:center;
   align-items: center;
   flex-wrap: wrap;
   max-width: 100vw;
   height: auto;
  .Cards{
    z-index: 1;
    width: auto;
    margin: 1rem 2rem;
    height: auto;
    background-color: #D3D3D380;
    border-radius: 15px;
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
    justify-content: end;
    box-shadow: 3px 4px 5px .3px rgba(0,0,0,.1);
    transition: all .5s;
    >span{
      margin-top: 1rem;
      font-size: 15px;
      opacity: 0.8;
    }
    .image{
      width: 200px;
      height: 200px;
      transition: all .5s;
      img{
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 15px;
        box-shadow: 0px 0px 5px .5px rgba(0,0,0,.5);
      }
      :hover{
        transform: scale(105%);
      }

    }
    .line{
      padding: 0.5rem 0 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .column{
        padding: 1rem;
        display: flex;
        flex-direction:column;
        text-align: center;
        span{
          font-size:15px;
          opacity: 0.8;
        }
        h1{
          font-size:18px
        }
      }
    }
    h1{
      font-size: 22px;
      margin-top: .5rem;
    }

    :hover{
       transform: scale(107%);
       box-shadow: 3px 4px 10px 1px rgba(0,0,0,.2);
    }
  }
}
}
  .add{
    margin-top: 1rem;
    width: 50px;
    border: none;
    outline: none;
    background-color:transparent;
    transition: all .5s;
    :hover{
      transform: scale(120%);
    }
  }
`;

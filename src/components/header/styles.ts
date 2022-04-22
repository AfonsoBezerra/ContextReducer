import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255,255,0.88);
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  padding: 0 3rem;
  align-items: center;
  top: 0;
  z-index: 999999;

  .headerTop{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .logo{
      width: 110px;
      height: 90px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  button{
    border: none;
    outline: none;
    background-color:transparent
  }
  .cartIcon{
    z-index: 9;
    transform: scale(130%);
    transition: all .5s;
    cursor: pointer;
    :hover{
      transform: scale(140%);
    }
    .circle{
      position: absolute;
      opacity: 1;
      top: 0;
      right: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #830101;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        color: #FFF;
        font-size: .6rem;
      }
    }
    .active {
        opacity: 1;
      }
  }

  .sidebar{
    transition: all .5s;
  .sidebarCart{
    position: absolute;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index:0;
    width: 600px;
    max-height: 100vh;
    overflow-y: auto;
    right: -300px;
    top: 0;
    opacity: 0;
    background-color:#E3E3E3;
    transition: all .3s;
    padding: 1rem;
    border-radius: 0 0px 0px 10px;
@media (max-width: 767px){
      width: 350px;
      padding: 1rem .5rem;
    }
    .header{
      display: flex;
      justify-content:space-between;
    button{
      z-index: 9999;
      background-color:transparent;
      border: none;
      outline: none;
      transition: all .4s;
      cursor: pointer;
      :hover{
        transform: scale(110%)
      }
    }
    .totalValue{
      display: flex;
      align-items: center;
      span{
        font-size:15px;
        opacity: 0.6;
        padding: 0 .5rem;
      }
      h1{
        font-size:17px;
      }
    }
  }
    .container{
      width: 100%;
      display: flex;
      justify-content:center;
      h1{
        font-size: 15px;
        span{
          color: red;
          font-size: 18px;
        }
      }
    }
    .clearCart{
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 1.2rem;
        background: white;
        height: 35px;
        border-radius:10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: all .5s;
        :hover{
          transform: scale(105%);
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
      }
    }
  }
  .active{
    opacity: 1;
    z-index: 9;
    right: 0px;
    animation: animationFade .4s ease-in-out;
  }

    @keyframes animationFade {
      from {
        right: -300px;
        opacity: 0;
      }
      to {
        right: 0px;
        opacity: 1;
      }
    }

    .cardsProducts{
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
  @media (max-width: 767px){
        padding: 1rem .2rem;
      }
      .cardCart{
        margin-bottom: 1rem;
        width:80%;
        height: 70px;
        padding: 1rem;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius:10px;
        background-color: white;
        @media (max-width:768px){
          width: 100%;
        }
        .thumbnail{
          width: 55px;
          height: 55px;
          img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
        }
        .textCards{
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 1fr 1fr auto;
          align-items: center;
          padding: 0 1rem;
      @media (max-width: 767px){
            gap: 1rem;
            padding: 0 .5rem;
          }
          .column{
            display: flex;
            flex-direction: column;
            span{
              font-size:13px;
              opacity: 0.6;
              font-weight: bold;
            }
            h1{
              font-size:16px
            }
        @media (max-width: 767px){
              span{
                font-size:10px
              }
              h1{
                font-size:13px
              }
            }
          }
          .tamanho{
              display: flex;
              flex-direction: column;
              align-items: center;
              span{
                font-size:13px;
                opacity: 0.6;
                font-weight: bold;
              }
              h1{
                font-size:16px
              }
          @media (max-width: 767px){
                span{
                  font-size:10px
                }
                h1{
                  font-size:13px
                }
            }
            }
          .price{
            display: flex;
            flex-direction: column;
            text-align: center;
            span{
                font-size:13px;
                opacity: 0.6;
                font-weight: bold;
              }
            h1{
              font-size: 20px
            }
        @media (max-width: 767px){
              h1{
                font-size:15px
              }
            }
          }
          .actionDel{
            display: flex;
            justify-content:end
          }
      }
      }

    }

  }
`;

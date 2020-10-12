import Styled from 'styled-components';
import landingBg from '../../images/landing.svg';


export const LandingStyled = Styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);


   .content-wrapper{
      position: relative;

      width: 100%;
      height: 100%;
      max-width: 1100px;
      max-height: 680px;

      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;

      background: url(${landingBg}) no-repeat 80% center;
      


      main{
            max-width: 350px;

         h1{
            font-size: 76px;
            font-weight: 900;
            line-height: 70px;
         }
         p{
            margin-top: 40px;
            font-size: 24px;
            line-height: 34px;
         }
      }

      .location{
         position: absolute;
         right: 0;
         top: 0;
         display: flex;
         flex-direction: column;
         text-align: right;

         strong{
            font-weight: 800;
         }
      }

      .enter-app{
         position: absolute;
         right: 0;
         bottom: 0;
         width: 80px;
         height: 80px;

         background-color: #ffd666;
         border-radius: 30px;

         display: flex;
         align-items: center;
         justify-content: center;

         transition: background-color .2s;

      }
      .enter-app:hover{
         background-color: #96feff;
      }
   }
   
`
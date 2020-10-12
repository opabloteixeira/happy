import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import { LandingStyled } from './styles';
import Logo from '../../images/Logo.svg';

const Landing: React.FC = () => {
   return (
      <LandingStyled>
         <div className="content-wrapper">
            <img src={ Logo } alt="Happy"/>
            <main>
               <h1>
                  Leve felicidade para o mundo
               </h1>
               <p>Visite orfanatos e mude o dia de muitas crianças</p>
            </main>

            <div className="location">
               <strong>Pelotas</strong> 
               <span>Rio Grande do Sul</span>
            </div>

            <Link to="/app" className="enter-app">
               <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>
         </div>
      </LandingStyled>
   );
}

export default Landing;

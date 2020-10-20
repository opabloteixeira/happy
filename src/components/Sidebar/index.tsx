import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';


import mapMarkerImg from '../../images/marker.svg';
import SideBarStyled from './styles';

export default function Sidebar(){

   const { goBack } = useHistory();

   return (
   <SideBarStyled>
      <img src={mapMarkerImg} alt="Happy" />
      <footer>
         <button type="button" onClick={goBack}>
         <FiArrowLeft size={24} color="#FFF" />
         </button>
      </footer>
   </SideBarStyled>
   )
}

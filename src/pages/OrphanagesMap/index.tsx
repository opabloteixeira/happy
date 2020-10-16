import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { PageMap } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import Leaflet from 'leaflet';
import mapMarkerImg from '../../images/marker.svg';

import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
   iconUrl: mapMarkerImg,
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2]
})

const OrphanagesMap: React.FC = () => (

         <PageMap>
            <aside>
               <header>
                  <img src={mapMarkerImg} alt="happy"/>
                  <h2>Escolha um orfanato no mapa</h2>
                  <p>{`Muitas crianças estão esperando a sua visita :)`}</p>
               </header>

               <footer>
                  <strong>
                     Pelotas
                  </strong>
                  <span>Rio Grande do Sul</span>
               </footer>
            </aside>

            <Map
               center={[-31.759757,-52.3602303]}
               zoom={15}
               style={{
                  width: '100%',
                  height: '100%'
               }}
            >
               {/* <TileLayer
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
               /> */}
               <TileLayer
                  url= {`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}

               />

               <Marker
                  position={[-31.759757,-52.3602303]}
                  icon={mapIcon}
               >

                  <Popup
                     closeButton={false}
                     minWidth={240}
                     maxWidth={240}
                     className="map-popup"
                  >
                     Lar dos Meninos
                     <Link to="#">
                        <FiArrowRight size={20} color="#FFF"/>
                     </Link>
                  </Popup>

               </Marker>
            </Map>

            <Link to="" className="create-orphanage">
               <FiPlus size={32} color="#fff" />
            </Link>
         </PageMap>

)


export default OrphanagesMap;

import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { PageMap } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../../images/marker.svg';

import mapIcon from '../../utils/MapIcon';
import api from '../../services/api';


interface Orphanage {
   id: number;
   name: string;
   latitude: number;
   longitude: number;
}


const OrphanagesMap: React.FC = () => {

   const [orphanages, setOrphanages] = useState<Orphanage[]>([])

   useEffect(() => {
      api.get('orphanages').then(response => {
         setOrphanages(response.data);
      })
   }, []);

   console.log(orphanages);
   return (

      <PageMap>
         <aside>
            <header>
               <img src={mapMarkerImg} alt="happy" />
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
            center={[-31.742148, -52.349234]}
            zoom={10}
            style={{
               width: '100%',
               height: '100%'
            }}
         >
            {/* <TileLayer
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
               /> */}

            <TileLayer
               url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}

            />

            {orphanages.map(orphanage => (
               <Marker
                  key={orphanage.id}
                  position={[
                     orphanage.latitude,
                     orphanage.longitude
                  ]}
                  icon={mapIcon}
               >

                  <Popup
                     closeButton={false}
                     minWidth={240}
                     maxWidth={240}
                     className="map-popup"
                  >
                     {orphanage.name}
                     <Link to={`orphanages/${orphanage.id}`}>
                        <FiArrowRight size={20} color="#FFF" />
                     </Link>
                  </Popup>

               </Marker>
            ))}
         </Map>

         <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#fff" />
         </Link>
      </PageMap>
   )

}


export default OrphanagesMap;

import React from 'react';
import './styles.css';
import img from '../../Header/whatsapp.png'

const Whatsapp = () => {
   return (
      <>
         <div className="whatsapp">
            <a href="https://wa.me/919099672704" target="_blank">
               <img src={img} width="70px" class="whatsapp_btn" />
            </a>
         </div>
      </>
   )
}
export default Whatsapp;
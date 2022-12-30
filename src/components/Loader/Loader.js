import React from 'react';
import './Loader.scss';
const Loader =props=>{
   const {
    classes="",
    color="loaderColor",
    showVerifyText="false",
    position="justify-content-centent align-items-center"
   } =props
     return(
        <div className={`d-flex flex-column ${position} w-100 ${classes}`}>
            <div class={`spinner-border ${color}`} role="status">
             <span class="visually-hidden">Loading...</span>
             
            </div>
         
           {/* {showVerifyText && <p>Verifying</p>} */}
        </div>
     )

}
export default Loader
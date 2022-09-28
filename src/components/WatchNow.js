import React from 'react';

function WatchNow({ object }) {
   for (const [key, value] of Object.entries(object)) {
      if (key !== 'link') {
         value.map((el) => {
            return (
               <div key={el.provider_id}>
                  {/* <img src={`${logoApi}${el.logo_path}`} alt="" /> */}
                  <h2>{el.provider_name}</h2>
               </div>
            );
         });
      }
   }
}

export default WatchNow;

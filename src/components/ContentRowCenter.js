import React from 'react';
import Nosotros from './Nosotros';
import Eventos from './Eventos';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <Nosotros />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Eventos />

        </div>
    )
}

export default ContentRowCenter;
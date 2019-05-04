import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WheatherExtraInfo = ({ humidity, wind }) => (
   // TEMPLATE LITERALS
   <div className = "weatherExtraInfoCont">
        
        <span className = "extraInfoText">{`Humedad: ${humidity} % - `}</span>
        <span className = "extraInfoText">{`Vientos: ${wind} `} </span>
    </div>
);
WheatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired, 
}

export default WheatherExtraInfo;
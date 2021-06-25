import React from 'react'
import PropTypes from 'prop-types';
export const GifsGridItem = ({url,titel}) => {
   // console.log(url);
    return (
        <div className="card">
            <img src={url} alt={titel}/>   
            <p>{titel}</p>    
        </div>
    )


}

GifsGridItem.propTypes={
    titel:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}



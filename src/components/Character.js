// Write your Character component here
import React from 'react';
import styled, { keyframes } from "styled-components";
import Image from 'react-image-resizer';



const RickPicContainer = (props) => {
    const {photoData} = props;
    console.log({photoData});
    return(
        <div id='RickPicContainer'>
            <img src={photoData.image}
            style={style.image}
            />
        </div>
    )
}

const style = {
    image: {
        width: '500px'
    }
}

export default RickPicContainer;
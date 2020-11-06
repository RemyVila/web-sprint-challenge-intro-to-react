// Write your Character component here
import React from 'react';
import styled, { keyframes } from "styled-components";
import Image from 'react-image-resizer';


const RickPicContainer = (props) => {
    const {rickData} = props;
    const rickText = [`Name: ${rickData.name}`, <br />, <br />, `Dead or Alive?: ${rickData.status}`];
    return(
        <StyledRickPicContainer>
            <img src={rickData.image}
            style={style.image}
            />
            <StyledRickInfo>
                {rickText}

            </StyledRickInfo>
        
        </StyledRickPicContainer>

    )
}

const style = {
    image: {
        width: '330px',
        display: 'inline-block',

    }
}


const StyledRickPicContainer = styled.div`
    height: 40vh;
    width: 40vw;
`;
const StyledRickInfo = styled.div`
    display: inline-block;
    width: 20vw;
    height: 330px;
    position: relative;
    top: -270px;
`;


export default RickPicContainer;
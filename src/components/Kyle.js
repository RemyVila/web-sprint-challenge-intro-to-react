// Write your Character component here
import React from 'react';
import styled, { keyframes } from "styled-components";
import Image from 'react-image-resizer';


const Kyle = (props) => {
    const {kyleData} = props;
    const kyleText = [`Name: ${kyleData.name}`, <br />, <br />, `Dead or Alive?: ${kyleData.status}`];
    return(
        <StyledKyleContainer>
            <img src={kyleData.image}
            style={style.image}
            />
            <StyledKyleInfo>
                {kyleText}

            </StyledKyleInfo>
        
        </StyledKyleContainer>
    )
}

const style = {
    image: {
        width: '330px',
        display: 'inline-block',

    }
}


const StyledKyleContainer = styled.div`
    height: 40vh;
    width: 40vw;
`;
const StyledKyleInfo = styled.div`
    display: inline-block;
    width: 20vw;
    height: 330px;
    position: relative;
    top: -270px;
`;


// const RickPicContainer = (props) => {
//     const {rickData} = props;
//     const rickText = [`Name: ${rickData.name}`, <br />, <br />, `Dead or Alive?: ${rickData.status}`];
//     return(
//         <StyledRickPicContainer>
//             <img src={rickData.image}
//             style={style.image}
//             />
//             <StyledRickInfo>
//                 {rickText}

//             </StyledRickInfo>
        
//         </StyledRickPicContainer>
        
//     )
// }

const StyledKyleInfo = styled.div`
display: inline-block;
width: 20vw;
height: 330px;
position: relative;
top: -270px;
`;


export default Kyle;
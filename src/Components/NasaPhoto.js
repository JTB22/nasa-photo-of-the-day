import React from "react";
import styled, {keyframes} from "styled-components";


const kf = keyframes`
  50% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const PhotoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: scale(2);
    animation: ${kf} .7s ease-in-out forwards;
`
const Explanation = styled.p`
    max-width: 50vw;
`
const Image = styled.img`
    max-width: 50vw;
`

const NasaPhoto = (props) => {
    return (
        <PhotoWrapper>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <Image src={props.photo.hdurl} />
            <Explanation>{props.photo.explanation}</Explanation>
        </PhotoWrapper>

    ) 
}

export default NasaPhoto;
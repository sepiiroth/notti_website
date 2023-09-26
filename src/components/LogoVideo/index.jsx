import styled from "styled-components";

const VideoContainer = styled.video`
display: block;
margin: 0 auto;
width: 100%;
height: 50%;
`;

function LogoVideo() {
    return (<VideoContainer autoplay="" loop="" playsinline="" muted=""> 
        <source src="" type="video/mp4"></source>
    </VideoContainer>); 
}

export default LogoVideo;
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import drawing from "./images/drawing.jpg"

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Mynerve', cursive;
    }
`
const Polaroid = styled.div`
    width: 450px;
    height: 500px;
    background-color: #f2f2f2;
    border: 1.25px solid #3d3d3d;
    box-shadow: 12px 12px 5px 1px #808080;
    transform: rotate(2deg);
    border-radius: 3px;
`
const Image = styled.img`
    display: block;
    border: 1px solid #3d3d3d;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    box-shadow: inset 0 0 100px black;
`
const Vignette = styled.div`
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 391px;
        height: 391px;
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 30px;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
    }
`
const TextContainer = styled.div`
    margin: auto;
    font-size: 1.5em;
    color: royalblue;
    text-align: center;
    opacity: 0.7;
`

const PolaroidContainer = () => {

    return (
        <>
            <GlobalStyle/>
                <Polaroid>
                    <Vignette>
                        <Image 
                            src={drawing}
                            width="390px"
                            height="390px">
                        </Image>
                    </Vignette>

                    <TextContainer>
                        <p>Drawing of me - by Gemma</p>
                    </TextContainer>
                </Polaroid>
        </>
    )
}

export default PolaroidContainer

// rgba(0, 0, 255, .2)
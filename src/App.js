import './App.css';
import styled from 'styled-components';
import drawing from "./images/drawing.jpg"

const PolaroidContainer = styled.div`
  display: grid;
  grid-template-areas:
    "image"
    "text";
  width: 450px;
  height: 500px;
  background-color: #fffefc;
  border: 1.5px solid #3d3d3d;
  border-radius: 5px;
`
// const ImageContainer = styled.div`
//   grid-area: image;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   width: 390px;
//   height: 390px;
//   background-color: pink;
//   border: 2px solid black;
// `
const Image = styled.img`
grid-area: image;
  width: 388px;
  height: 388px;
  margin: auto;
`
const TextContainer = styled.div`
  grid-area: text;
  margin: auto;
  width: 390px;
  height: 20px;
  border: 2px solid #3d3d3d;
`


function App() {
  return (
    <PolaroidContainer>
    
        <Image 
          src={drawing}>
        </Image>
   
      <TextContainer>

      </TextContainer>
    </PolaroidContainer>
  );
}

export default App;

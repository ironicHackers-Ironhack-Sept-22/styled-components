import './App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button1, DivExample } from './StyledButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-top: 2em;


  & button {
    border-radius: 5px;
  }
`

const LinkEdit = styled(Link)`
  text-decoration: none;
`

const Button2 = styled(Button1)`
  box-shadow: 5px 5px 15px 5px #000000;
`

const Button3 = styled(Button2)`
  color: orangered;
`

const Button4 = styled(Button1)`
  background-color: ${({danger}) => danger ? 'var(--danger)': 'blue'};
 
  ${(props) => props.danger && `
    box-shadow: 2px 2px 10px 2px #333;

    :hover {
      background-color: yellow;
      color: black;
    }
  `}

  padding: ${(props) => props.padding}em;
`



function App() {
  
  return (
    <div className="App">

      <Container>
        <button> Button </button>

        <LinkEdit to='/'> Home page</LinkEdit>
        <Button1> Button 1 </Button1>
        <Button2> Button 2 </Button2>
        <Button3> Button 3 </Button3>
        <Button4 danger> Delete </Button4>
        <Button4 padding={3}> Padding </Button4>
      </Container>

      <DivExample>
                <div className='div-one'>
                    This is the first div
                    <div className='div-one-nested'>
                        This is the div nested inside the first one
                    </div>
                </div>
                <div className='div-two'>This is the second div</div>
                <div className='div-three'>This is the third div</div>
                <div className='other-example'>
                    <div className='div-four'>This is the fourth div</div>
                    <DivExample>This is the Nested DivExample</DivExample>
                </div>
          </DivExample>


    </div>
  );
}

export default App;

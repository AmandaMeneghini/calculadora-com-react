import {Container, Content, Row} from './styles.js'
import Input from './components/Input/index.js'
import Button from './components/Button'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleaOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleaAddNumber = (number) => {

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const rem = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setOperation('');
    }
  }

  const handleMultiplicationNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const multiplication = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiplication))
      setOperation('');
    }
  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('');
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
          
      case '-':
          handleMinusNumbers();
          break;
      
      case '*':
          handleMultiplicationNumbers();
          break;

      case '/':
          handleDivisionNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="○"/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="C" onClick={handleaOnClear}/>
          <Button label="X" onClick={handleMultiplicationNumbers}/>
        </Row> 
        <Row>
          <Button label="7" onClick={ () => handleaAddNumber('7')}/>
          <Button label="8" onClick={ () => handleaAddNumber('8')}/>
          <Button label="9" onClick={ () => handleaAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row> 
        <Row>
          <Button label="4" onClick={ () => handleaAddNumber('4')}/>
          <Button label="5" onClick={ () => handleaAddNumber('5')}/>
          <Button label="6" onClick={ () => handleaAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row> 
        <Row>
          <Button label="1" onClick={ () => handleaAddNumber('1')}/>
          <Button label="2" onClick={ () => handleaAddNumber('2')}/>
          <Button label="3" onClick={ () => handleaAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row> 
      </Content>
    </Container>
  );
}

export default App;

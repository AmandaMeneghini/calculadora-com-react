import {ButtonContainer} from './styles.js';

const Button = ({label, onClick, style}) => {
    return (
      <ButtonContainer onClick={onClick} style={style}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
import stylesWrapper from "../HOC/stylesWrapper";

const ButtonOne = (props) => {
   return (
       <button style={props.styles}>I am Button</button>
   );
}

export default ButtonOne(stylesWrapper);
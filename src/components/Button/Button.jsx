import classes from './Button.module.css'
// como empieza en mayuscula ya es un componente
const Button = ({callback, color, name}) => {
    //const {callback, color, name}= props 
    return <button onClick={callback} className= {classes.color} style> {props.name} </button>
}

export default Button
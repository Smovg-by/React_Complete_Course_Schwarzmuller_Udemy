import './Card.css'

//now card is a CONTAINER component
function Card (props) {
  // так можно применять несколько стилей: стиль обертки и стиль родителя.
  // в строке ПРОБЕЛ!!!
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card

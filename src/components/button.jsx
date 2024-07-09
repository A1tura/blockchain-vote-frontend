import "./css/button.css"

export default function Button(props) {
  const { text, size, styles, onClick, className, type } = props

  return (
    <button className={className} type={type} style={styles} onClick={onClick}>{text}</button>
  )
}

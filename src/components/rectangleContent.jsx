import "./css/rectangle.css"

export default function Rectangle(props) {
  const { background, border, children, styles } = props;

  return (
    <div className="rectangle" style={styles}>
      {children}
    </div>
  )
}

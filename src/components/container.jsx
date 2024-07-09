export default function Container(props) {
  const { color, children } = props;

  return (
    <div className="container" id="container" style={{
      "backgroundColor": color, "width": "100vw", "paddingTop": "10px", "alignContent": "center", "display": "flex", "flexDirection": "column", "flexWrap": "wrap"
    }}>
      {children}
    </div>
  )
}

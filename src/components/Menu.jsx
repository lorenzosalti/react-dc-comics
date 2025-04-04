function Menu(props) {

  return (

    <ul className="menu">
      <li><a href={props.data[0].url}><p>{props.data[0].content}</p></a></li>
      <li><a href={props.data[1].url}><p>{props.data[1].content}</p></a></li>
      <li><a href={props.data[2].url}><p>{props.data[2].content}</p></a></li>
      <li><a href={props.data[3].url}><p>{props.data[3].content}</p></a></li>
      <li><a href={props.data[4].url}><p>{props.data[4].content}</p></a></li>
      <li><a href={props.data[5].url}><p>{props.data[5].content}</p></a></li>
      <li><a href={props.data[6].url}><p>{props.data[6].content}</p></a></li>
      <li><a href={props.data[7].url}><p>{props.data[7].content}</p></a></li>
      <li><a href={props.data[8].url}><p>{props.data[8].content}</p></a></li>
      <li><a href={props.data[9].url}><p>{props.data[9].content}</p></a></li>
    </ul>

  )

}

export default Menu
function Card({ url, title }) {

  return <div className="card">
    <div className="card-img">
      <img src={url} alt={title} />
    </div>
    <h3>{title}</h3>
  </div>

}

export default Card
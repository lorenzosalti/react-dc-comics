function Main({ data }) {

  return (
    <main>
      <div className="container">

        {data.map(comic => <div className="card">
          <img src={comic.thumb} alt={comic.title} />
          <h3>{comic.title}</h3>
        </div>)}

      </div>
    </main>

  )

}

export default Main
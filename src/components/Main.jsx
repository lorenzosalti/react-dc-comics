import Card from "./Card"

function Main({ data }) {

  return (
    <main>
      <div className="container">

        {data.map((comic, i) => <Card key={i} url={comic.thumb} title={comic.title} />)}

      </div>
    </main>

  )

}

export default Main
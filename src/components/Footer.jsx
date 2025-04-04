import Button from "./Button"
import Navbar from "./Navbar"
import Social from "./Social"

function Footer() {

  return (
    <footer>

      <section className="upper">
        <div className="container">
          <Navbar />
        </div>
      </section>

      <section className="central">
        <div className="container">
          <ul>
            <li><h4>dc comics</h4></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>

          <ul>
            <li><h4>shop</h4></li>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
          </ul>

          <ul>
            <li><h4>dc</h4></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
          </ul>

          <ul>
            <li><h4>sites</h4></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
            <li><a href="#">testo</a></li>
          </ul>

          <img src="./src/assets/images/dc-logo-bg.png" alt="dc" />
        </div>
      </section>

      <section className="bottom">
        <div className="container">
          <Button />
          <Social />
        </div>
      </section>

    </footer>

  )

}

export default Footer
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import comics from "./data/comics"

function App() {

  return (
    <>

      <Header />
      <Main data={comics} />
      <Footer />

    </>
  )

}

export default App

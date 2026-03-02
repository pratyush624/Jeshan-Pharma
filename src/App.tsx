import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <main className="main-content">
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App

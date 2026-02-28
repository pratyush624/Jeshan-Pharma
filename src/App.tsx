import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <main className="main-content">
        <Products />
      </main>
    </div>
  )
}

export default App

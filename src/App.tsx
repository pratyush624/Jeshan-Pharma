import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <h1>Jeshan Pharma</h1>
        <p>Welcome to our pharmaceutical company</p>
      </main>
      <Footer />
    </div>
  )
}

export default App

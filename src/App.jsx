import './App.css'
import Benefits from './components/Benefits'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import ReviewGoogle from './components/ReviewGoogle'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Benefits />
        <Products />
        <ReviewGoogle />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App

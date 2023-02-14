import './App.scss'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Process from './components/process'

function App() {

  return (
    <div className="App">
      <Header content="Create an Account" />
      <Hero />
      <Process />
      <Footer />
    </div>
  )
}

export default App

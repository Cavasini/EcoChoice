import './assets/styles/index.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Features from './components/Features'


function App() {


  return (
    <>
        <Header sectionIds={['Home', 'Features', 'About']}/>
        <Hero id="Home"/>
        <Features id="Features"/>
         <About id="About"/>
        <Footer/> 
    </>
  )
}

export default App

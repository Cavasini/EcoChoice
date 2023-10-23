import './assets/styles/index.scss'
import Header from './components/Header'
import Hero from './components/Hero'
// import About from './components/About'
import Footer from './components/Footer'
import Features from './components/Features'
import Overview from './components/Overview'


function App() {


  return (
    <>
        <Header sectionIds={['Home', 'Features', 'About', 'Overview']}/>
        <Hero id="Home"/>
        <Features id="Features"/>
        <Overview/>
         {/* <About id="About"/> */}
        <Footer/> 
    </>
  )
}

export default App

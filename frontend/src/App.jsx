import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'


function App() {

  return (
    <>
    <Container>
      <Navbar />
        <Outlet />
      <Footer />
    </Container>
    </>
  )
}

export default App

import Footer from 'components/footer'
import Home from 'components/home'
import Menu from 'components/menu'
import Cardapio from 'pages/cardapio'
import Inicio from 'pages/inicio'
import NotFound from 'pages/notFound'
import Prato from 'pages/prato'
import Sobre from 'pages/sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter(){
  return(
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} >
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio/>} />
            <Route path='sobre' element={<Sobre/>} />
            <Route path='prato/:id' element={<Prato/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>

  )
}
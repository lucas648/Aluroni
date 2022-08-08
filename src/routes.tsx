import Footer from 'components/footer';
import Menu from 'components/menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(()=> import('pages/cardapio'));
const Home = lazy(()=> import('components/home'));
const Inicio = lazy(()=> import('pages/inicio'));
const NotFound = lazy(()=> import('pages/notFound'));
const Prato = lazy(()=> import('pages/prato'));
const Sobre = lazy(()=> import('pages/sobre'));

export default function AppRouter(){
  return(
    <main className='container'>
      <Router>
        <Menu/>
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>  
            <Route path='/' element={<Home/>} >
              <Route index element={<Inicio/>} />
              <Route path='cardapio' element={<Cardapio/>} />
              <Route path='sobre' element={<Sobre/>} />
            </Route>
            <Route path='prato/:id' element={<Prato/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </main>

  )
}
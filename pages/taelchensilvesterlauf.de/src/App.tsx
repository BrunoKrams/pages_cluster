import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default App

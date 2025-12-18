import Header from './components/Header'
import PainterProfile from './components/PainterProfile'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { painters, paintings } from './data/paintersData'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      
      <section className="painters-section">
        {painters.map((painter) => (
          <PainterProfile
            key={painter.id}
            name={painter.name}
            bio={painter.bio}
            image={painter.profileImage}
          />
        ))}
      </section>

      <Gallery paintings={paintings} />
      
      <Footer />
    </div>
  )
}

export default App

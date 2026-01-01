import Header from './Header'
import PainterProfile from './PainterProfile'
import Gallery from './Gallery'
import Footer from './Footer'
import { painters, paintings } from './../data/paintersData'
import './Main.css'

function Main() {

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
    );
}

export default Main;
import Hero from "./section/Hero"
import Navbar from "./layout/Navbar"
import About from "./section/About"
import Projects from "./section/Projects"
import Experience from "./section/Experience"
// import Testimonials from "./section/Testimonials"
import Contact from "./section/Contact"
import Footer from "./layout/Footer";

function App() {
  

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        {/* <Testimonials/> */}
        <Contact />
        <Footer />

      </main>
    </div>
  )
}

export default App

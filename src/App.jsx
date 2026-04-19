import Footer from "./components/Footer/footer.jsx"
import FooterEnd from "./components/Footer/footerEnd.jsx"
import Header from "./components/Header/header.jsx"
import About from "./components/Main/About.jsx"
import Services from "./components/Main/Services.jsx"

export default function App() {
  return(
    <div>
      <Header />,
      <About />,
      <Services />,
      <Footer />,
      <FooterEnd />
    </div>
  )
}
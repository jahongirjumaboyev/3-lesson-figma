import Footer from "./components/Footer/footer"
import FooterEnd from "./components/Footer/footerEnd"
import Header from "./components/Header/header"
import About from "./components/Main/About"
import Services from "./components/Main/Services"

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
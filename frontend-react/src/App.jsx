import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Pricing from "./containers/pricing/Pricing";
import Programs from "./containers/programs/Programs";
import Testimonial from "./containers/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Temp from "./containers/Temp";

export default function App() {
  return (
    <>
      <Home />
      <div className="px-5 py-10 md:px-10 xl:px-20 2xl:px-28">
        <About />
        <Programs />
        <Pricing />
        <Temp />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

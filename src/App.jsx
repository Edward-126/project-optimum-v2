import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Pricing from "./containers/pricing/Pricing";
import Programs from "./containers/programs/Programs";
import Testimonial from "./containers/testimonial/Testimonial";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Programs />
      <Pricing />
      <Testimonial />
      <Contact />
    </>
  );
}

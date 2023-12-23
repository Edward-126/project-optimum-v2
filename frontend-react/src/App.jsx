import Lenis from "@studio-freight/lenis";

import { inject } from "@vercel/analytics";

import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Pricing from "./containers/pricing/Pricing";
import Programs from "./containers/programs/Programs";
import Testimonial from "./containers/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Trainers from "./containers/coaches/Trainers";
import Temp from "./containers/Temp";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
export default function App() {
  return (
    <>
      <Home />
      <div className="px-5 py-10 md:px-10 xl:px-20 2xl:px-28">
        <About />
        <Trainers />
        <Programs />
        <Pricing />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

inject();

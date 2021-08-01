import Footer from "./Footer"
import Navbar from "./Navbar"
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <Hero />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;
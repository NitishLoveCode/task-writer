import Footer from "../component/Footer";
import Header from "../component/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;

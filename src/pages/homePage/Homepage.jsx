import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Acceuil from "../../components/home/acceuil/Acceuil";
import LearnMore from "../../components/home/learn_more/LearnMore";
import Products from "../../components/productsHome/Products";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Acceuil />
      <Products />
      <LearnMore />
      <Footer />
    </>
  );
};

export default Homepage;

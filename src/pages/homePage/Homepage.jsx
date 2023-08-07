import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Acceuil from "../../components/home/acceuil/Acceuil";
import LearnMore from "../../components/home/learn_more/LearnMore";
import Products from "../../components/productsHome/Products";
import Popular from "../../components/PopularProducts/Popular";
import FeedBacks from "../../components/FeedBacks/FeedBacks"
const Homepage = () => {
  
  
  return (
    <>
      <Navbar  />
      <Acceuil />
      <Products  />
      <LearnMore />
      <FeedBacks />
      <Popular />
      <Footer />
    </>
  );
};

export default Homepage;

import { Hero, ProductsList, Header, Footer } from "../components/index";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Home;

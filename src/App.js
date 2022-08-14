import HomeScreen from "./Pages/HomeScreen";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="main-content">
        <HomeScreen />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;

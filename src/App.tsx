import Main from "./app/pages/Main/Main";
import "./app/styles/App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

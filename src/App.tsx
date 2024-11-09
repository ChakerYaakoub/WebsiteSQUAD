import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServerError500 from "./pages/ServerError500/ServerError500";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import appRoutes from "./appRoutes";
import { useApp } from "./useApp";

function App() {
  // const { data, loading, error } = useApp();

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <ServerError500 />;
  // }

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
  return <></>;
}

export default App;

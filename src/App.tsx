import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import appRoutes from "./appRoutes";

function App() {
  // const { data, loading, error } = useApp();

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <ServerError500 />;
  // }

  // fix  the 404 error in gh-pages
  // https://www.youtube.com/watch?v=uEEj2c3_ydg

  return (
    <div className="App">
      <Router>
        <Header />
        <article>
          <main>
            <Routes>
              {appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </article>
        <Footer />
      </Router>
    </div>
  );
  return <></>;
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/Context.jsx";
import HomeView from "./views/HomeView.jsx";
import LoginView from "./views/LoginView.jsx";
import RegisterView from "./views/RegisterView.jsx";
import MoviesView from "./views/MoviesView.jsx";
import GenreView from "./views/GenreView.jsx";
import DetailView from "./views/DetailView.jsx";
import SettingsView from "./views/SettingsView.jsx";
import CartView from "./views/CartView.jsx";
import ErrorView from "./views/ErrorView.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/movies" element={<MoviesView />}>
              <Route path="genre/:genre_id" element={<GenreView />} />
              <Route path="details/:id" element={<DetailView />} />
            </Route>
            <Route path="/settings" element={<SettingsView />} />
            <Route path="/cart" element={<CartView />} />
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;

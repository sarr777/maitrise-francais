
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Grammaire from "./pages/Grammaire";
import Conjugaison from "./pages/Conjugaison";
import Vocabulaire from "./pages/Vocabulaire";
import ExpressionOrale from "./pages/ExpressionOrale";
import ExpressionEcrite from "./pages/ExpressionEcrite";
import Exercices from "./pages/Exercices";
import Blog from "./pages/Blog";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/grammaire" element={<Grammaire />} />
          <Route path="/conjugaison" element={<Conjugaison />} />
          <Route path="/vocabulaire" element={<Vocabulaire />} />
          <Route path="/expression-orale" element={<ExpressionOrale />} />
          <Route path="/expression-ecrite" element={<ExpressionEcrite />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

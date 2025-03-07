// Importerar React-biblioteket för att använda JSX och skapa en funktionell komponent
import React from "react";
// Importerar bilden som ska användas som bannerbild från assets-mappen
import bannerImage from "../assets/movies.png";

// Definierar typen (sträng) för de props som Header-komponenten kommer att ta emot
type HeaderProps = {
  title: string;
};

// Header-komponenten definieras som en funktionell komponent i React
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    // Här definieras header-sektionen med en klass "header" för CSS-styling
    <header className="header">
      {/* Titeln på sidan skickas som prop och renderas här */}
      <h1>{title}</h1>
      {/* Bannerbilden visas här, och den får en alt-text för tillgänglighet */}
      <img src={bannerImage} alt="Banner" className="banner" />
    </header>
  );
};

// Exporterar Header-komponenten så att den kan användas i andra delar av applikationen
export default Header;

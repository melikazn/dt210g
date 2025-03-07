// Importerar React-biblioteket för att använda JSX och skapa en funktionell komponent
import React from "react";

// Footer-komponenten definieras som en funktionell komponent i React
const Footer: React.FC = () => {
  return (
    // Här definieras footer-sektionen med en klass "footer" för CSS-styling
    <footer className="footer">
      {/* Dynamiskt infogar nuvarande år (hämtat med new Date().getFullYear()) och mitt namn */}
      <p>© {new Date().getFullYear()} Utvecklad av Melika Zolfagharian</p>
    </footer>
  );
};

// Exporterar Footer-komponenten så att den kan användas i andra delar av applikationen
export default Footer;

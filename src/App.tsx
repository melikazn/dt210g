import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import "./App.css";

// Definierar App-komponenten som en funktionell komponent
const App: React.FC = () => {
  return (
    // En div som omsluter hela applikationen, med klassen "app"
    <div className="app">
      {/* Header-komponenten renderas högst upp på sidan med en prop (title) som skickas till den */}
      <Header title="Filmer och Serier" />
      <main>
        {/* ItemList-komponenten renderar listan av filmer */}
        <ItemList />
      </main>
      {/* Footer-komponenten renderar sidfoten */}
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allcategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuitems, setmenu] = useState(items);
  const [cat, change] = useState(allcategories);
  const filter = (category) => {
    if (category === "all") {
      setmenu(items);
      return;
    }
    const newitems = items.filter((item) => item.category === category);
    setmenu(newitems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories cat={cat} filter={filter} />
      <Menu menuitems={menuitems} />
    </main>
  );
}

export default App;

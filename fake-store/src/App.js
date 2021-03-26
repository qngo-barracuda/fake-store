import React from "react";
import { Route } from "react-router-dom";
// import Fuse from "fuse.js";

import Header from "./components/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import "./App.css";
import "./Normalize.css";

function App() {
  // const [query, updateQuery] = useState("");
  // const [cart, setCart] = useState([]);



  // Start of Search Functionality
  // Start of Search Functionality
  // Allows users to search by title, description, and category
  // const fuse = new Fuse(productsList, {
  //   keys: ["title", "description", "category"],
  //   includeScore: true,
  // });

  // Updates the search bar
  // function onSearch({ currentTarget }) {
  //   updateQuery(currentTarget.value);
  // }
  // const result = fuse.search(query);

  // displays the results - if there is a query in search, display what was searched : otherwise display all products
  // const productResults = query
  //   ? result.map((productResult) => productResult.item)
  //   : productsList;
  // End of Search Functionality
  // End of Search Functionality

  return (
    <div className="app-container">
      <Header />

      <Route exact path="/">
        <Store />
      </Route>
      {/* {productsList.length !== 0 ? (
        <Route exact path="/">

          <Store
            productResults={productResults}
            query={query}
            onSearch={onSearch}
            category={category}
            setCategory={setCategory}
          />
        </Route>
      ) : (
        "It's unfolding..."
      )} */}

      <Route path="/product/:id">
        <Product />
      </Route>
      
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;

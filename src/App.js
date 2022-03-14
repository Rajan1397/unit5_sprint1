import "./App.css";

import Wishlist from "./components/Wishlist";

import Vegetables from "./components/Vegetables";

function App() {
  return (
    <>
      <h1>WishList</h1>
      <Wishlist />;
      <Vegetables quantity={10} vName={"tomato"} />
      <Vegetables quantity={8} vName={"potato"} />
      <Vegetables quantity={7} vName={"Onions"} />
    </>
  );
}

export default App;

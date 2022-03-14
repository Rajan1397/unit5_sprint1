import React from "react";

const Wishlist = () => {
  const [query, setQuery] = React.useState("");
  const [Wishlists, setWishlists] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const addTodo = () => {
    const payload = {
      todo: query,
      status: false,
    };

    let updatedWishlists = [...Wishlists, payload];
    setWishlists(updatedWishlists);
  };

  if (Wishlists.length > 3) {
    return <h1>You cannot add more than 3 items in the Wishlist</h1>;
  }
  return (
    <>
      <div>
        <h1>Wishlist App</h1>
        <input
          placeholder="Add Something"
          onChange={handleChange}
          value={query}
        />

        <button onClick={addTodo}>Add</button>
        {Wishlists.map(({ todo, status }) => (
          <div>{todo}</div>
        ))}
      </div>
    </>
  );
};
export default Wishlist;

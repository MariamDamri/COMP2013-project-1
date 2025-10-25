// top bar thingy
export default function NavBar({ username, cartCount }) {
  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">
        <p>hi {username}</p>
      </div>

      <div className="NavDiv NavTitle">
        <h2>Groceries App</h2>
      </div>

      <div className="NavDiv NavCart">
        {/* show cart count */}
        <span>Cart: {cartCount}</span>
      </div>
    </div>
  );
}

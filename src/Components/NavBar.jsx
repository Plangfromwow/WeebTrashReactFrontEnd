export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">WeebTrash</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import { categories } from "../data/categories.js";

export default function Navbar({ selectedCategory, setSelectedCategory }) {
  return (
    <nav className="navbar-news">
      <div className="container nav-content">

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={
              selectedCategory === category.name ? "active" : ""
            }
          >
            {category.name}
          </button>
        ))}

      </div>
    </nav>
  );
}
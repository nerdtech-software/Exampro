import { Link } from 'react-router-dom';

const items = [
  { name: "Amazon Web Services", path: "/amazon" },
  { name: "Azure", path: "/azure" },
  { name: "CompTIA", path: "/comptia" },
  { name: "GitHub", path: "/github" },
  { name: "Google Cloud", path: "/google" },
  { name: "HashiCorp", path: "/hashicorp" },
  { name: "Kubernetes (CNCF)", path: "/kubernetes" },
  { name: "LPI", path: "/lpi" },
  { name: "Oracle Cloud", path: "/oracle" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Popular</h2>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link 
              to={item.path} 
              className="hover:text-blue-600 cursor-pointer block"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

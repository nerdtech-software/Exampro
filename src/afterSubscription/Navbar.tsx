import { FaBell, FaBullhorn } from "react-icons/fa"; // Importing Bell and Megaphone icons from react-icons
import AccountMenu from "../matarialUI/AccountMenu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
       
        <span className="font-bold text-xl">
          Exam<span className="text-orange-500">Pro</span>
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-3">
        <ActionButton icon={<FaBell size={20} />} /> {/* Updated with FaBell */}
        <ActionButton icon={<FaBullhorn size={20} />} /> {/* Updated with FaBullhorn */}
        <AccountMenu/>
      </div>
    </nav>
  );
}


function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
      {icon}
    </button>
  );
}

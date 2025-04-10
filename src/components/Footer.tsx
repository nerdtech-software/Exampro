const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-700 text-sm">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="" className="hover:underline">Articles</a>
            <a href="" className="hover:underline">FAQs</a>
            <a href="" className="hover:underline ">Contact</a>
            <a href="" className="hover:underline">System Status</a>
            <a href="" className="hover:underline">Terms of Use</a>
            <a href="" className="hover:underline">Privacy Policy</a>
          </nav>
  
          {/* Copyright */}
          <div className="text-gray-600 text-sm mt-4 md:mt-0">
            © 2025 ExamPro
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
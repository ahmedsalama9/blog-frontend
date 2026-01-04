const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">MyBlog</h3>
          <p className="text-gray-400">
            Sharing knowledge and ideas about sporting, lifestyle
          </p>
          <div className="flex gap-4 mt-4">
            {/* <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
          <p>Email: info@Blogx.com</p>
          <p>Phone: +20 123 456 7890</p>
          <p className="mt-4 text-gray-400">123 Blog Street, Cairo, Egypt</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BlogX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


const ContactFooter = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Instagram: @chinapuzzles</a>
          <a href="mailto:info@chinapuzzles.com" className="hover:text-white">Email: info@chinapuzzles.com</a>
          <a href="#" className="hover:text-white">LinkedIn: China Puzzles</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} chinapuzzles.com</p>
      </div>
    </footer>
  );
};

export default ContactFooter;

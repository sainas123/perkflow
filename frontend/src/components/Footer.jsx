function Footer() {
  return (
    <footer className="w-full border-t border-purple-200/60 bg-pink-50/80 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center items-center">
        <p className="text-sm font-semibold text-purple-500/80">
          © {new Date().getFullYear()} PerkFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

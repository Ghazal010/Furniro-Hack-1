export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.17] bg-white py-8 md:py-12">
      <div className="container px-4 sm:px-6 lg:px-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-poppins mb-4">Furniro.</h2>
            <p className="text-gray-500 font-poppins text-sm sm:text-base">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium text-sm sm:text-base mb-4">Links</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Home
              </a>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Shop
              </a>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                About
              </a>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium text-sm sm:text-base mb-4">Help</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Payment Options
              </a>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Returns
              </a>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-gray-700">
                Privacy Policies
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium text-sm sm:text-base mb-4">Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-black pb-1 text-sm font-poppins text-gray-500 focus:outline-none"
                />
              </div>
              <button className="border-b border-black pb-1 text-sm font-poppins font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-[#D9D9D9] pt-4 text-center">
          <p className="text-black font-poppins text-sm sm:text-base">
            2024 Furniro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

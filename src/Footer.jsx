import { FaPhone, FaEnvelope, FaHome, FaFacebookF, FaYoutube, FaWhatsapp, FaArrowUp, FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-green-600 shadow-inner text-center py-6 relative">
  
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 text-green-700 text-lg font-bold">
        <p className="flex items-center">
          <FaPhone className="mr-2" /> 01868668422
        </p>
        <p className="flex items-center ">
          <FaEnvelope className="mr-2" /> sarkerarnobsarker21@gmail.com
        </p>
      </div>

      <div className="mt-3 text-green-600">
        <p className="flex items-center justify-center">
          <FaHome className="mr-2" /> THENGAMARA, রংপুর রোড, বগুড়া-5800
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-6 ">
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md hover:scale-110 transition transform duration-300 text-blue-600 hover:bg-blue-300 "
        >
          <FaFacebookF className="text-xl" />
        </a>
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md hover:scale-110 transition transform duration-300 text-red-600 hover:bg-red-300 "
        >
          <FaYoutube className="text-xl" />
        </a>
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md hover:scale-110 transition transform duration-300 text-green-600 hover:bg-green-300 "
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>

      <div className="mt-6 text-green-700 text-sm">
        <p>কপিরাইট © 2025 ARNOB SARKER</p>
        <p className="mt-1">
          নির্মাণ: <span className="font-bold">ARNOB SARKER</span>
        </p>
      </div>

      <a
        href="#top"
        className="fixed bottom-20 left-4 bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-700 transition"
      >
        <FaArrowUp />
      </a>

      <a
        href="#"
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <FaFacebookMessenger className="text-2xl" />
      </a>
    </footer>
  );
}

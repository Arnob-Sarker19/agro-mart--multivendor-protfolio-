import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">যোগাযোগ করুন</h1>
        <p className="mt-2 text-sm">We are always here to help you with agro machinery solutions.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-xl font-semibold mb-4">যোগাযোগের তথ্য</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="text-green-600" size={20} />
              <span>THENGAMARA, রংপুর রোড, বগুড়া-5800</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <span>01868668422</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <span>sarkerarnobsarker21@gmail.com</span>
            </li>
          </ul>

          <div className="mt-8">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.786662634798!2d89.35381389999999!3d24.905257600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcff7deee37a51%3A0xd181e76622215430!2sTMSS%20Engineering%20College%20(TEC)!5e0!3m2!1sen!2sbd!4v1756459938813!5m2!1sen!2sbd" // <-- replace with real map link
              width="100%"
              height="250"
              className="rounded-lg border"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">বার্তা পাঠান</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="আপনার নাম"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <textarea
              rows="5"
              placeholder="আপনার বার্তা"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              পাঠান
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}




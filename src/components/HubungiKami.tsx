import FormHubungiKami from "./FormHubungiKami";

export default function HubungiKami() {
  return (
    <section
      id="hubungi-kami"
      className="sleek-zoom-90 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-linear-to-br from-purple-100 via-pink-50 to-purple-200"
      style={{
        background:
          "linear-gradient(135deg,rgba(217, 245, 9, 0) 0%, rgba(217, 245, 9, 0.35) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <h2 className="font-urbanist font-bold text-2xl text-[#004740] mb-2.5">
                Hubungi Kami
              </h2>
              <p className="font-urbanist font-extrabold text-[#0E1D1B] text-3xl leading-relaxed">
                Siap Membantu Kebutuhan Bisnis Anda.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Kantor */}
              <div className="flex items-start gap-4">
                <img
                  src="/assets/hubungi-kami/location.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#004740]">
                    Kantor Kami
                  </h3>
                  <p className="font-inter text-gray-700">
                    Satrio Tower, Lt. 16, Jl. Prof. Dr. Satrio Kav. 1-4,
                    <br />
                    Kuningan, Jakarta Selatan, 12950
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <img
                  src="/assets/hubungi-kami/phone.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#004740]">
                    Telepon
                  </h3>
                  <p className="font-inter text-gray-700">
                    +62 21 5555 6789
                    <br />
                    +62 812 3456 7890 (WhatsApp)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <img
                  src="/assets/hubungi-kami/mail.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#004740]">
                    Email
                  </h3>
                  <p className="font-inter text-gray-700">
                    hello@anikanusantara.com
                    <br />
                    support@anikanusantara.com
                  </p>
                </div>
              </div>
            </div>

            {/* FIXED MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42275577.16058454!2d95.93751516203211!3d-2.2759975872736554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d82607fd9a2781f%3A0x301f8f1fc28ca40!2sIndonesia!5e0!3m2!1sen!2sid!4v1708570000"
                className="border-0 w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* FORM */}
          <FormHubungiKami />
        </div>
      </div>
    </section>
  );
}

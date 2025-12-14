import FormHubungiKami from "./FormHubungiKami";
import hubungiKamiData from "../data/hubungi-kami.json";

export default function HubungiKami() {
  const { location, telephone, email, pinpoint } = hubungiKamiData;

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
                  <p className="font-inter text-gray-700 w-3/4">{location}</p>
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
                    {telephone.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
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
                    {email.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* FIXED MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 w-full">
              <iframe
                src={pinpoint}
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* FORM */}
          <FormHubungiKami />
        </div>
      </div>
    </section>
  );
}

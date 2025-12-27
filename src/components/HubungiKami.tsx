import FormHubungiKami from "./FormHubungiKami";
import hubungiKamiData from "../data/hubungi-kami.json";

export default function HubungiKami() {
  const { location, telephone, email, pinpoint } = hubungiKamiData;

  return (
    <section
      id="hubungi-kami"
      className="sleek-zoom-90 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20"
      style={{
        background:
          "linear-gradient(170deg,rgba(255, 255, 255, 1) 31%, rgba(16, 192, 254, 0.5) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8 w-full">
            <div>
              <h2 className="font-urbanist font-bold text-2xl md:text-3xl text-[#1B227D] mb-2.5">
                Hubungi Kami
              </h2>
              <p className="font-urbanist text-[#1B1C32] w-[90%] md:w-full text-sm md:text-base leading-relaxed">
                Ada pertanyaan? Kami ingin sekali mendengarnya. Kirimkan pesan
                kepada kami, dan kami akan segera merespons.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Kantor */}
              <div className="flex items-start gap-4">
                <img
                  src="/assets/hubungi-kami/lokasi.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#1B227D]">
                    Kantor Kami
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#1B1C32] w-3/4">
                    {location}
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
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#1B227D]">
                    Telepon
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#1B1C32]">
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
                  src="/assets/hubungi-kami/email.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#1B227D]">
                    Email
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#1B1C32]">
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
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:w-full">
              <iframe
                src={pinpoint}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="w-full overflow-hidden">
             <FormHubungiKami />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const KeunggulanKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const keunggulan = [
    {
      icon: "/assets/keunggulan/price.svg",
      title: "Harga Kompetitif",
      description:
        "Margin yang bersaing memberikan keuntungan lebih untuk mitra dan agen.",
    },
    {
      icon: "/assets/keunggulan/integration.svg",
      title: "Integrasi Fleksibel",
      description:
        "Mudah diintegrasikan dengan berbagai sistem bisnis melalui API yang adaptif.",
    },
    {
      icon: "/assets/keunggulan/security.svg",
      title: "Keamanan Terstandar",
      description:
        "Mengutamakan perlindungan data dan keamanan transaksi sesuai standar industri.",
    },
    {
      icon: "/assets/keunggulan/support.svg",
      title: "Dukungan Profesional",
      description:
        "Tim support yang responsif dan siap membantu kebutuhan operasional mitra.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % keunggulan.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + keunggulan.length) % keunggulan.length
    );
  };

  return (
    <section className="py-16 md:py-24 md:mt-24 relative overflow-hidden bg-transparent sleek-zoom-90">
      {/* Background gradient - only top half */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 z-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(217, 245, 9, 0) 0%, rgba(217, 245, 9, 0.625) 85%, rgba(0, 127, 53, 0.5) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Desktop */}
        <div className="text-center mb-12 md:mb-16 hidden md:block">
          <h3 className="text-[#004740] font-bold text-sm md:text-base mb-4 uppercase tracking-wider text-center">
            KEUNGGULAN KAMI
          </h3>
          <h2 className="text-[#0E1D1B] text-3xl md:text-4xl lg:text-5xl font-bold">
            Dirancang untuk Mendukung Ekosistem
            <br />
            Pembayaran Digital
          </h2>
        </div>

        {/* Header - Mobile */}
        <div className="text-center mb-8 md:hidden">
          <h3 className="text-[#004740] font-bold text-sm md:text-base mb-4 uppercase tracking-wider text-center">
            KEUNGGULAN KAMI
          </h3>
          <h2 className="text-[#0E1D1B] text-2xl font-bold mb-3 px-4">
            Dirancang untuk Mendukung Ekosistem Pembayaran Digital
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {keunggulan.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-transparent hover:border-[#D9F509] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="300"
            >
              <div className="flex justify-start mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#004740] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className="md:hidden relative"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {keunggulan.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-lg mx-auto max-w-md">
                    <div className="flex justify-center mb-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#004740] mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {keunggulan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#007F35]"
                    : "w-2 bg-[#007F35]/30 border-2 border-[#007F35]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch/Swipe handlers */}
          <div
            className="absolute inset-0 z-10"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const startX = touch.clientX;

              const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0];
                const diff = startX - touch.clientX;

                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                  document.removeEventListener("touchmove", handleTouchMove);
                }
              };

              document.addEventListener("touchmove", handleTouchMove);
              document.addEventListener(
                "touchend",
                () => {
                  document.removeEventListener("touchmove", handleTouchMove);
                },
                { once: true }
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default KeunggulanKami;

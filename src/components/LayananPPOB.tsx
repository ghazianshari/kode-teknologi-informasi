"use client";
import { useState } from "react";

const LayananPPOB = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const layanan = [
    {
      icon: "/assets/layanan/water-electric.svg",
      title: "Tagihan Listrik & Air",
      description:
        "Layanan pembayaran PLN pascabayar, token listrik, dan tagihan PDAM berbagai wilayah.",
    },
    {
      icon: "/assets/layanan/bpjs.svg",
      title: "Jaminan Sosial & Kesehatan",
      description:
        "Pembayaran iuran BPJS Kesehatan dan Ketenagakerjaan yang praktis.",
    },
    {
      icon: "/assets/layanan/internet.svg",
      title: "Internet & Telkom",
      description:
        "Bayar tagihan IndiHome, telepon rumah, dan penyedia internet lainnya.",
    },
    {
      icon: "/assets/layanan/multifinance.svg",
      title: "Multifinance",
      description:
        "Angsuran kredit kendaraan dan pinjaman dari berbagai leasing terkemuka.",
    },
    {
      icon: "/assets/layanan/pulsa.svg",
      title: "Pulsa & Paket Data",
      description:
        "Isi ulang pulsa dan paket data semua operator seluler dengan harga bersaing.",
    },
    {
      icon: "/assets/layanan/game-voucher.svg",
      title: "Voucher Game",
      description:
        "Top up voucher game online dan layanan streaming hiburan digital.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % layanan.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + layanan.length) % layanan.length);
  };

  return (
    <section
      id="layanan"
      className="py-16 md:py-24 relative overflow-hidden bg-white sleek-zoom-90"
    >
      {/* Background gradient - only bottom half */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 z-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(217, 245, 9, 0) 0%, rgba(217, 245, 9, 0.625) 85%, rgba(0, 127, 53, 0.5) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[#004740] font-bold text-sm md:text-base mb-4 uppercase tracking-wider text-center">
            LAYANAN KAMI
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan PPOB untuk Kebutuhan
            <br />
            Bisnis Anda
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D9F509]"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="300"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#004740] mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm lg:text-base">
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
              {layanan.map((item, index) => (
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
            {layanan.map((_, index) => (
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

export default LayananPPOB;

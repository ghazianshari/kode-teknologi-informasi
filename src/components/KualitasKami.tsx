"use client";
import { useState } from "react";

const KualitasKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const keunggulan = [
    {
      icon: "/assets/kualitas/stabilitas.svg",
      title: "Stabilitas Sistem Terjamin",
      description:
        "Didukung server berkualitas tinggi untuk memastikan semua transaksi berjalan lancar 24/7.",
    },
    {
      icon: "/assets/kualitas/integrated.svg",
      title: "Integrasi Mudah & Cepat",
      description:
        "API modern, dokumentasi lengkap, dan tim support siap membantu proses integrasi.",
    },
    {
      icon: "/assets/kualitas/price.svg",
      title: "Harga Kompetitif",
      description:
        "Margin yang bersaing memberikan keuntungan lebih untuk mitra dan agen.",
    },
    {
      icon: "/assets/kualitas/fast.svg",
      title: "Dashboard & Transaksi Real-Time",
      description:
        "Pantau transaksi, saldo, dan laporan keuangan secara instan dalam satu platform.",
    },
    {
      icon: "/assets/kualitas/cs.svg",
      title: "Layanan Customer Support",
      description:
        "Tim dukungan profesional yang siap membantu kapan pun Anda butuhkan.",
    },
    {
      icon: "/assets/kualitas/multiplatform.svg",
      title: "Multi-Platform Support",
      description:
        "Akses layanan kami melalui Web, Aplikasi Seluler, atau koneksi API langsung dengan mudah",
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
      {/* <div
        className="absolute inset-x-0 bottom-0 h-1/2 z-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(217, 245, 9, 0) 0%, rgba(217, 245, 9, 0.625) 85%, rgba(0, 127, 53, 0.5) 100%)",
        }}
      /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Desktop */}
        <div className="text-center mb-12 md:mb-16 hidden md:block">
          <h2 className="text-[#1B227D] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Standar Kualitas Layanan Kami
          </h2>
          <h3 className="text-[#1B1C32] font-bold text-sm md:text-base mb-4 tracking-wider text-center">
            Kami menyediakan infrastruktur yang Anda perlukan untuk
            mengembangkan bisnis Anda tanpa
            <br /> mengkhawatirkan kerumitan teknis.
          </h3>
        </div>

        {/* Header - Mobile */}
        <div className="text-center mb-8 md:hidden">
          <h2 className="text-[#1B227D] text-2xl font-bold mb-3 px-4">
            Standar Kualitas Layanan Kami
          </h2>
          <h3 className="text-[#1B1C32] font-bold text-sm md:text-base mb-4 tracking-wider text-center">
            Kami menyediakan infrastruktur yang Anda perlukan untuk
            mengembangkan bisnis Anda tanpa mengkhawatirkan kerumitan teknis.
          </h3>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {keunggulan.map((item, index) => (
            <div
              key={index}
              className="bg-white group hover:bg-[linear-gradient(180deg,rgba(16,192,254,1)0%,rgba(5,51,249,1)83%)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-start mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#1B227D] mb-4 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-[#1B1C32] leading-relaxed group-hover:text-white">
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
                    <h3 className="text-xl font-bold text-[#1B227D] mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#1B1C32] text-center leading-relaxed text-sm">
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
                    ? "w-8 bg-[#0533F9]"
                    : "w-2 bg-transparent border-2 border-[#0533F9]"
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

export default KualitasKami;

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 to-white lg:pb-24"
    >
      <div className="container mx-auto lg:px-12 h-full pt-20 md:pt-24 lg:pt-28">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col pt-4 pb-8 relative">
          <div className="space-y-6 text-center mb-8 relative z-10">
            <h1 className="font-extrabold text-3xl leading-tight text-[#1B227D]">
              Solusi Pembayaran
              <br />
              <span className="text-[#0533F9]">PPOB Terintegrasi</span>
              <br />
              untuk Bisnis Anda
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed px-2">
              <span className="font-bold">KODE TEKNOLOGI KOMBINASI</span> hadir
              sebagai Biller Aggregator PPOB yang menghubungkan berbagai layanan
              pembayaran dalam satu sistem terintegrasi. Dengan teknologi yang
              stabil, aman, dan mudah digunakan, kami membantu mitra bisnis dan
              masyarakat menjalankan transaksi pembayaran secara cepat, akurat,
              dan efisien di seluruh Indonesia.
            </p>

            <a href="#hubungi-kami">
              <button className="text-white mb-5 bg-[#0533F9] hover:bg-[#0533F9]/90 font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Hubungi Kami
              </button>
            </a>
            <a href="#layanan">
              <button className="text-[#0533F9] bg-white border border-[#0533F9] font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Lihat Layanan
              </button>
            </a>
          </div>

          <div className="relative w-full -mt-32 mb-2 z-0">
            <img
              src="/assets/hero/cewe-cewe-mobile.svg"
              alt="Business professionals discussing"
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#1B227D]">
              Solusi Pembayaran
              <br />
              <span className="text-[#0533F9]">PPOB Terintegrasi</span>
              <br />
              untuk Bisnis Anda
            </h1>

            <p className="text-lg text-justify text-gray-700 leading-relaxed">
              <span className="font-bold">KODE TEKNOLOGI KOMBINASI</span> hadir
              sebagai Biller Aggregator PPOB yang menghubungkan berbagai layanan
              pembayaran dalam satu sistem terintegrasi. Dengan teknologi yang
              stabil, aman, dan mudah digunakan, kami membantu mitra bisnis dan
              masyarakat menjalankan transaksi pembayaran secara cepat, akurat,
              dan efisien di seluruh Indonesia.
            </p>
            <div className="text-[#004740]">
              <a href="#hubungi-kami">
                <button className="text-white bg-[#0533F9] hover:bg-[#0533F9]/90 cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Hubungi Kami
                </button>
              </a>
              <a href="#layanan" className="ml-4">
                <button className="bg-transparent border-2 text-[#0533F9] border-[#0533F9] cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Lihat Layanan
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Image positioned at top-right corner */}
          <div
            className="lg:absolute lg:right-0 lg:top-0 lg:w-[48%]"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src="/assets/hero/cewe-cewe.svg"
              alt="Business professionals discussing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

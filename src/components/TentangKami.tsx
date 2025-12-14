const TentangKami = () => {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      {/* <div className="container mx-auto px-0"> */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section - Desktop */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="relative">
            <div className="lg:absolute -top-8 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
            <img
              src="/assets/tentang/cewe-2.svg"
              alt="Team collaboration"
              className="relative z-10 w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* Image Section - Mobile */}
        <div className="block lg:hidden w-full relative">
          <div className="relative">
            {/* <div className="lg:absolute -top-8 -left-8 w-64 h-64 bg-purple-200 rounded-full opacity-50 blur-3xl"></div> */}
            <img
              src="/assets/tentang/cewe-2-mobile.svg"
              alt="Team collaboration"
              className="relative z-10 w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:pl-12 lg:pr-20 sleek-zoom-90">
          <h3 className="text-[#004740] font-bold text-sm md:text-base mb-4 uppercase tracking-wider text-center lg:text-left">
            TENTANG KAMI
          </h3>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
            Mitra Strategis Pembayaran Digital di Indonesia
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-12 leading-relaxed text-center lg:text-justify">
            <span className="font-bold">ANIKA NUSANTARA LANGOWAN</span> adalah
            perusahaan yang bergerak di bidang Biller Aggregator PPOB dengan
            fokus menghadirkan layanan pembayaran digital yang terpercaya dan
            bernilai tambah. Kami berkomitmen menjadi penghubung yang andal
            antara penyedia layanan dan mitra bisnis, guna mendukung ekosistem
            transaksi digital yang inklusif dan berkelanjutan.
          </p>

          {/* Visi Section */}
          <div className="mb-10" data-aos="fade-right" data-aos-duration="800">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/assets/tentang/visi.svg"
                  alt="Visi Kami"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#004740] mb-3">
                  Visi Kami
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-justify">
                  Menjadi Biller Aggregator PPOB terpercaya yang berperan aktif
                  dalam pengembangan ekosistem pembayaran digital nasional.
                </p>
              </div>
            </div>
          </div>

          {/* Misi Section */}
          <div data-aos="fade-right" data-aos-duration="500">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/assets/tentang/misi.svg"
                  alt="Misi Kami"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#004740] mb-3">
                  Misi Kami
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-justify">
                  Menyediakan layanan pembayaran digital yang aman, mudah, dan
                  terintegrasi untuk mendukung pertumbuhan bisnis dan kenyamanan
                  masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TentangKami;

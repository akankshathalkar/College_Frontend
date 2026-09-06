function Home() {
  return (
    <main className="bg-white min-h-screen">

      {/* ================= PROGRAMMES OFFERED ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#0b2d4d]">Programmes </span>
              <span className="text-[#0b8f55]">Offered</span>
            </h2>

            <div className="w-48 h-[2px] bg-[#0b2d4d] mt-10"></div>
          </div>

          {/* Programme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">

            {/* MBA */}
            <div className="overflow-hidden">

              <img
                src="mba.jpg"
                alt="MBA Students"
                className="w-full h-[250px] object-cover"
              />

              <div className="bg-[#0b2d4d] text-white px-8 py-10 min-h-[250px]">

                <p className="text-lg mb-3">
                  #MBA
                </p>

                <h3 className="text-2xl font-medium leading-relaxed">
                  Master of Business
                  <br />
                  Administration
                </h3>

                <div className="border-t border-white/70 mt-6 pt-4">
                  <a
                    href="#"
                    className="text-lg font-semibold hover:underline"
                  >
                    Read more ❯
                  </a>
                </div>

              </div>
            </div>


            {/* MCA */}
            <div className="overflow-hidden">

              <img
                src="mca.jpg"
                alt="MCA Students"
                className="w-full h-[250px] object-cover"
              />

              <div className="bg-[#0b8f55] text-white px-8 py-10 min-h-[250px]">

                <p className="text-lg mb-3">
                  #MCA
                </p>

                <h3 className="text-2xl font-medium leading-relaxed">
                  Master of Computer
                  <br />
                  Application
                </h3>

                <div className="border-t border-white/70 mt-6 pt-4">
                  <a
                    href="#"
                    className="text-lg font-semibold hover:underline"
                  >
                    Read more ❯
                  </a>
                </div>

              </div>
            </div>


            {/* B.Voc */}
            <div className="overflow-hidden">

              <img
                src="bvoc.jpg"
                alt="B.Voc Students"
                className="w-full h-[250px] object-cover"
              />

              <div className="bg-[#347ed5] text-white px-8 py-10 min-h-[250px]">

                <p className="text-lg mb-3">
                  #B. Voc.
                </p>

                <h3 className="text-2xl font-medium leading-relaxed">
                  Bachelor in Vocation
                </h3>

                <div className="border-t border-white/70 mt-6 pt-4">
                  <a
                    href="#"
                    className="text-lg font-semibold hover:underline"
                  >
                    Read more ❯
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
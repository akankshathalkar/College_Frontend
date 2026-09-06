const Administration = () => {
  const administrativeTeam = [
    {
      name: "Mr. Vikas Shelke",
      designation: "Office Superintendent",
      phone: "7304493711",
      image: "/images/administration/vikas-shelke.jpg",
    },
    {
      name: "Mr. A. T. Shirsath",
      designation: "Chief Finance Officer",
      phone: "9011211212",
      image: "/images/administration/at-shirsath.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
     {/* Page Header */}
<section className="relative h-36 overflow-hidden bg-gradient-to-r from-[#294782] via-[#2d5d88] to-[#1f496b]">

  
  {/* Heading */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <h1 className="text-4xl font-bold text-white md:text-5xl">
      Administration
    </h1>
  </div>

</section>

      {/* Administrative Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-semibold text-slate-800">
            Administrative Section
          </h2>

          <p className="max-w-5xl text-justify text-base leading-8 text-gray-600">
            The Establishment Department of PIRENS Institute of Business
            Management and Administration is one of the most significant and
            important departments. The section looks after all establishment
            related affairs of the officers and members of staff of PIRENS
            Institute of Business Management and Administration.
          </p>
        </div>
      </section>

      {/* Administrative Team */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800">
            Administrative Team
          </h2>

          {/* Centered Cards */}
          <div className="flex flex-wrap justify-center gap-8">

            {administrativeTeam.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Staff Image */}
                <div className="flex h-60 w-full justify-center overflow-hidden bg-gray-100">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-52 object-cover"
                      />
                </div>

                {/* Staff Details */}
                <div className="p-6 text-center">

                  <h3 className="text-xl font-semibold text-slate-800">
                    {member.name}
                  </h3>

                  <p className="mt-2 font-medium text-orange-600">
                    {member.designation}
                  </p>

                  <p className="mt-2 text-gray-600">
                    {member.phone}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Faculty Recruitment Procedure */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold text-slate-800 md:text-2xl">
              Faculty Recruitment Procedure
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Faculty recruitment procedure is carried out as per the AICTE
              norms for educational qualification and experience for MBA and
              MCA faculty.
            </p>

            {/* PDF Link */}
            <a
              href="/pdf/faculty-recruitment-procedure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded bg-orange-500 px-5 py-2.5 font-medium text-white transition hover:bg-orange-600"
            >
              Read More
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Administration;
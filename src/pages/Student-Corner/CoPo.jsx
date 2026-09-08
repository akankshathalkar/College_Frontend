const CourseOutcomes = () => {
  return (
    <div className="w-full bg-white">
      
      {/* Page Heading */}
      <div className="w-full bg-gradient-to-r from-[#1d3b63] to-[#274d7d] py-5">
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          Course Outcomes (CO) & Programme Outcomes (PO)
        </h1>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:gap-24">
        
        {/* MBA Section */}
        <div className="flex w-full max-w-md flex-col items-center text-center">
          <h2 className="mb-8 text-xl font-medium text-gray-700 md:text-2xl">
            CO-PO for Master of Business Administration (MBA)
          </h2>

          <a
            href="/pdfs/mba-co-po.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full bg-gradient-to-r from-[#1d3b63] to-[#315781] px-6 py-4 text-lg text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              Master of Business Administration (MBA)
            </button>
          </a>
        </div>

        {/* MCA Section */}
        <div className="flex w-full max-w-md flex-col items-center text-center">
          <h2 className="mb-8 text-xl font-medium text-gray-700 md:text-2xl">
            CO-PO for Master of Computer Application (MCA)
          </h2>

          <a
            href="/pdfs/mca-co-po.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full bg-gradient-to-r from-[#1d3b63] to-[#315781] px-6 py-4 text-lg text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              Master of Computer Application (MCA)
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default CourseOutcomes;
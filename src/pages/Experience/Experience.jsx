function Experience() {
  return (
    <section className="mx-4 p-4">
      <h1 className="text-3xl">Experience</h1>
      <div className="my-6 hover:bg-zinc-800 border-2 border-purple-800 rounded p-5">
        <div className="w-full flex flex-col text-center sm:flex-row justify-between">
          <div className="inline-block">
            <span className="block text-blue-300 text-2xl sm:text-left">
              Zopper
            </span>
            <span>Senior Software Engineer</span>
          </div>
          <div className="inline-block sm:text-right">
            <span className="block">Dec 2022 - Present</span>
            <span className="block">Noida, India</span>
          </div>
        </div>
        <div className="p-5">
          <ul className="marker:text-purple-500 list-outside list-disc">
            <li className="my-2">
              <span className="font-bold text-purple-200">
                Developed a high-performance API Gateway using Node.js, capable
                of handling 8k request per second.
              </span>{" "}
              The gateway has features such as Real-time service discovery, JWT
              Authentication, Caching, and Load Balancing, ensuring optimal
              performance and scalability.
            </li>
            <li className="my-2">
              <span className="font-bold text-purple-200">
                Achieved significant performance enhancement in a django based
                finance system, slashing processing time for large CSV files
                from 8 minutes to under 40 seconds.
              </span>{" "}
              This optimization streamlined audit ledger operations for payins
              and payouts, empowering faster data processing and analysis for
              enhanced operational efficiency.
            </li>
            <li className="my-2">
              Maintained and upgraded legacy projects including Payments and CRM
              systems, resolving bugs and upgrading packages to ensure stability
              and security. Introduced Docker for streamlined development and
              deployment processes, enhancing team productivity and project
              scalability.
            </li>
            <li className="my-2">
              Introduced Test-Driven Development (TDD),{" "}
              <span className="font-bold text-purple-200">
                reducing post-release bugs by 85% and improving test coverage by
                80%
              </span>{" "}
              , resulting in higher code quality, reduced bugs, and improved
              software reliability.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-6 hover:bg-zinc-800 border-2 border-purple-800 rounded p-5">
        <div className="w-full flex flex-col text-center sm:flex-row justify-between">
          <div className="inline-block sm:text-left">
            <span className="block text-blue-300 text-2xl">IndustryBuying</span>
            <span>Software Engineer</span>
          </div>
          <div className="inline-block sm:text-right">
            <span className="block">June 2020 - Dec 2022</span>
            <span className="block">Delhi, India</span>
          </div>
        </div>
        <div className="p-5">
          <ul className="marker:text-purple-500 list-outside list-disc">
            <li className="my-2">
              Efficiently implemented the logistic Order flow fulfillment
              process, ensuring smooth order processing, tracking, and delivery,
              resulting in improved customer satisfaction and retention.
            </li>
            <li className="my-2">
              Integrated various 3rd party applications, including ZOHO CRM for
              efficient customer relationship management, Sentry for real-time
              error logging to enhance application stability, and ClickPost for
              streamlined shipping and logistics management.
            </li>
            <li className="my-2">
              Made significant contributions to the core modules of the MEDUSA
              application, particularly focusing on crucial functionalities such
              as Vendor Onboarding, RFQs (Request for Quotation), and more,
              enhancing the overall user experience and business efficiency.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-6 hover:bg-zinc-800 border-2 border-purple-800 rounded p-5">
        <div className="w-full flex flex-col text-center sm:flex-row justify-between">
          <div className="inline-block sm:text-left">
            <span className="block text-blue-300 text-2xl">
              Technohertz Technologies
            </span>
            <span>Python Developer</span>
          </div>
          <div className="inline-block sm:text-right">
            <span className="block">Oct 2019 - May 2029</span>
            <span className="block">Pune, India</span>
          </div>
        </div>
        <div className="p-5">
          <ul className="marker:text-purple-500 list-outside list-disc">
            <li className="my-2">
              Worked as a Django developer for various projects for their
              clients which requires the creation of API services that should be
              speed optimized and scale-able and will be integrated with various
              web services and mobile applications.
            </li>
            <li className="my-2">
              Worked on various technologies like Django and Vue Js. I also
              worked with Bootstrap for styling the components on the website.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

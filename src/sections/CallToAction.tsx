import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <h2 className="section-title"> Sign up for free</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
          </button>
        </div>
      </div>
    </section>
  );
};

import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flew-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <div className="flex flex-1 md:flex-row flex-col w-full">
          <h1 className={`${styles.heading2}`}>
            {" "}
            What people are
            <br className="sm:block hidden" /> saying about us
          </h1>
          <div className="w-full md:mt-0 mt-6">
            <p
              className={`${styles.paragraph} max-w-full mt-[10px] h-full flex justify-center items-center`}
            >
              {" "}
              Everything you need to accept card payments and grow your business
              anywhere on the planet.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-start justify-center items-center w-full relative z-[1] md:ml-44">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

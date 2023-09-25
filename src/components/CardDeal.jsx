import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          {" "}
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Unlock your perfect card deal in 3 easy steps! Find the ideal credit
          card offer effortlessly with our intuitive comparison tool. Say hello
          to smart savings!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%] z-8" />
      </div>
    </section>
  );
};

export default CardDeal;

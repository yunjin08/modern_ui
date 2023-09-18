import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billings = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Hoobank: Where Invoicing and Billing Excellence Meets Financial
          Precision. Our mission is to provide individuals and businesses with a
          seamless platform to manage their money efficiently, offering
          user-friendly tools for generating invoices, tracking payments, and
          maintaining financial clarity.
        </p>
        <div className="flex sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="object-contain w-[128px] h-[48px] mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_store"
            className="object-contain w-[128px] h-[48px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billings;

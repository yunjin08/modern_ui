import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} group w-[140px] h-[140px] rounded-full ${styles.bg2Gradient} p-[2px] cursor-pointer `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full group-hover:bg-gradient-to-r from-teal-600 via-teal-400 to-teal-200 hover:scale-110 transition`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className={`${styles.textGradient} group-hover:text-primary`}>
              Get
            </span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px]" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className={`${styles.textGradient} group-hover:text-primary`}>
            Started
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

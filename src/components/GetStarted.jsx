import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full ${styles.bg2Gradient} p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className={`${styles.textGradient}`}>Get</span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px]" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className={`${styles.textGradient}`}>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

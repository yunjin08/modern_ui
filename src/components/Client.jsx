import styles from "../style";
import { clients } from "../constants";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} `}>
      <div
        className={`${styles.flexCenter} flex-wrap w-full ss:flex-row flex-col`}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} ss:min-w-[192px] min-w-[120px]`}
          >
            <a href={client.link}>
              <img
                src={client.logo}
                alt="client"
                className="md:w-[192px] w-[150px] object-contain py-2 md:py-0 hover:scale-110 cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;

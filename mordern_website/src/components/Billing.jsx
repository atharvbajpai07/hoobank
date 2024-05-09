import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <img src={bill} alt="bill" className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%] relative z-[5]" />
      <div className="relative z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="relative z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} className="w-[128px] h-[42px] object-contain  cursor-pointer"/>

        </div>
      </div>
    </section>
  );
};

export default Billing;

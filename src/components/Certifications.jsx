import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificateCard = ({ index, certificate, name, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#090426] p-10 rounded-3xl max-w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <p className="text-white tracking-wider text-[18px]">{certificate}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{company}</p>
        </div>
        <div>
          <img
            src={image}
            alt={`certificate-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <div className="mt-12 bg-[#161030] rounded-[20px]">
      <div
        className={`${styles.padding} bg-[#0f0d24] rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Certificates secured</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {certifications.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certificate");

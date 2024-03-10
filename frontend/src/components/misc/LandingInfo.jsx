import styles from "./LandingInfo.module.css";

const LandingInfo = ({ title, imgName, text }) => {
  return (
    <div className={styles.infoDiv}>
      <img src={imgName} alt={title} width={600} height={295} />
      <div className={styles.infoText}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LandingInfo;

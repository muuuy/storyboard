import GenderStyles from "./GenderForm.module.scss";

interface GenderFormData {
  handleGender: (gender: string) => void;
}

const GenderForm: React.FC<GenderFormData> = ({ handleGender }) => {
  return (
    <div>
      <p>Gender</p>
      <div className={GenderStyles.gender_container}>
        <button
          className={GenderStyles.gender_button}
          onClick={() => handleGender("male")}
        >
          Male
        </button>
        <button
          className={GenderStyles.gender_button}
          onClick={() => handleGender("female")}
        >
          Female
        </button>
        <button
          className={GenderStyles.gender_button}
          onClick={() => handleGender("custom")}
        >
          Custom
        </button>
      </div>
    </div>
  );
};

export { GenderForm };

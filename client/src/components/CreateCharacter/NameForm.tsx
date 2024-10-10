import NameStyles from "./NameForm.module.scss";

interface NameFormData {
  handleNameData: (key: string, name: string) => void;
}

const NameForm: React.FC<NameFormData> = ({ handleNameData }) => {
  return (
    <div>
      <form className={NameStyles.name_form}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={(e) => handleNameData("firstName", e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={(e) => handleNameData("lastName", e.target.value)}
        />
      </form>
    </div>
  );
};

export { NameForm };

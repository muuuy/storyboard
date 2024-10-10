import NameStyles from "./NameForm.module.scss";

interface NameFormData {
  handleNameData: (key: string, name: string) => void;
}

/**
 * NameForm
 *
 * A child component of CreateCharacter.
 * It is used to collect the first and last name of the character.
 * It sends the name data to the parent component.
 *
 * @param {Function(string, string)} handleNameData - A function that handles the name data
 * @returns
 */
const NameForm: React.FC<NameFormData> = ({ handleNameData }) => {
  return (
    <div className={NameStyles.name_form}>
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
    </div>
  );
};

export { NameForm };

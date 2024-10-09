import NameStyles from "./NameForm.module.scss";

const NameForm = () => {
  return (
    <div>
      <form className={NameStyles.name_form}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" />
        
        
      </form>
    </div>
  );
};

export { NameForm };

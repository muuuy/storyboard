import { NameForm } from "./NameForm";
import { GenderForm } from "./GenderForm";
import { useState } from "react";
import { NameData } from "./CreateCharacterInterface";

const CreateCharacter = () => {
  const [name, setName] = useState<NameData>({ firstName: "", lastName: "" });
  const [gender, setGender] = useState<string>("");

  const handleNameData = (key: string, name: string) => {
    setName((prev) => ({ ...prev, [key]: name }));
  };

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  return (
    <div>
      <NameForm handleNameData={handleNameData} />
      <GenderForm />
    </div>
  );
};

export { CreateCharacter };

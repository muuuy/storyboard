import { NameForm } from "./NameForm";
import { GenderForm } from "./GenderForm";
import { useState } from "react";
import { LocationForm } from "./LocationForm";

import { NameData, LocationData } from "./CreateCharacterInterface";

const CreateCharacter = () => {
  const [name, setName] = useState<NameData>({ firstName: "", lastName: "" });
  const [gender, setGender] = useState<string>("");
  const [location, setLocation] = useState<LocationData>({
    race: "",
    ethnicity: "",
    birthplace: "",
  });

  // Handles the name data from the child component and sets the state
  const handleNameData = (key: string, name: string) => {
    setName((prev) => ({ ...prev, [key]: name }));
  };

  // Handles the gender data from the child component and sets the state
  const handleGender = (gender: string) => {
    setGender(gender);
  };

  // Handles the location data from the child component and sets the state
  const handleLocation = (key: string, location: string) => {
    setLocation((prev) => ({ ...prev, [key]: location }));
  };

  return (
    <div>
      <form>
        <NameForm handleNameData={handleNameData} />
        <GenderForm handleGender={handleGender} />
        <LocationForm handleLocation={handleLocation} />
      </form>
    </div>
  );
};

export { CreateCharacter };

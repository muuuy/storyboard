interface LocationFormData {
  handleLocation: (key: string, location: string) => void;
}

/**
 * Location Form
 * Handles the location data from the child component and sends it to the parent component.
 * Handles things like:
 * - Race / Species
 * - Ethnicity / Nationality
 * - Birthplace
 *
 * @param {Function(string, string)} handleLocation - A function that handles the location data
 * @returns
 */
const LocationForm: React.FC<LocationFormData> = ({ handleLocation }) => {
  return (
    <div>
      <label htmlFor="race">Race / Species</label>
      <input
        name="race"
        onChange={(e) => handleLocation("race", e.target.value)}
      />
      <label htmlFor="ethnicity">Ethnicity / Nationality</label>
      <input
        name="ethnicity"
        onChange={(e) => handleLocation("ethnicity", e.target.value)}
      />
      <label htmlFor="birthplace">Birthplace</label>
      <input
        name="birthplace"
        onChange={(e) => handleLocation("birthplace", e.target.value)}
      />
    </div>
  );
};

export { LocationForm };

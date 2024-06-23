type GenderOptions = 'female' | 'male' | 'genderless' | 'unknown';
type SelectGenderProps = {
  gender: string;
  setGender: (gender: GenderOptions) => void;
};
export const SelectGender = (props: SelectGenderProps) => {
  const { gender, setGender } = props;

  return (
    <label className="flex flex-col">
      Gender
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value as GenderOptions)}
        className="border h-7 mt-1"
      >
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  );
};

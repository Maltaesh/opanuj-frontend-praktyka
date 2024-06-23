import React from 'react';
import { SelectGender } from './SelectGender';
import { SelectSortBy } from './SelectSortBy';

export type SortOptions = 'initial' | 'name' | 'created';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: SortOptions;
  setSortOption: (sortOption: SortOptions) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Rick Sanchez..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <SelectGender gender={gender} setGender={setGender} />
      <SelectSortBy setSortOption={setSortOption} sortOption={sortOption} />
    </form>
  );
}

export default SearchForm;

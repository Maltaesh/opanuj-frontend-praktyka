import type { SortOptions } from './SearchForm';

type SelectSortByProps = {
  sortOption: SortOptions;
  setSortOption: (sortOption: SortOptions) => void;
};
export const SelectSortBy = (props: SelectSortByProps) => {
  const { sortOption, setSortOption } = props;

  const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOptions);
  };

  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={handleSortOptionChange}
        className="border h-7 mt-1"
      >
        <option value="initial" disabled hidden>
          Initial
        </option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
};

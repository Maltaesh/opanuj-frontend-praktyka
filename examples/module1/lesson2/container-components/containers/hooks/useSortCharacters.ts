import type { SortOptions } from '../../components/SearchForm';
import type { Character } from '../../types/Character';
import { Option } from '@swan-io/boxed';

type UseSortCharactersProps = {
  characters: Option<Character[]>;
  sortOption: SortOptions;
};
export const useSortCharacters = (props: UseSortCharactersProps) => {
  const { characters, sortOption } = props;

  return characters.match({
    Some: (characters) =>
      [...characters].sort((a, b) => {
        if (sortOption === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
      }),
    None: () => [],
  });
};

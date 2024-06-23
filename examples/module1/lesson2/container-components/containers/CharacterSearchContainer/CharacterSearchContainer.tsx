import { useState } from 'react';
import CharacterList from '../../components/CharacterList';
import SearchForm, { type SortOptions } from '../../components/SearchForm';
import SearchTitle from '../../components/SearchTitle';

import { useFetchCharacters } from './hooks/useFetchCharacters';
import { useSortCharacters } from './hooks/useSortCharacters';
import { Option } from '@swan-io/boxed';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const [sortOption, setSortOption] = useState<SortOptions>('initial');
  const { state, result } = useFetchCharacters({ name, gender });
  const sortedCharacters = useSortCharacters({
    characters: Option.fromNullable(result),
    sortOption,
  });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      {state === 'loading' && <p>Loading...</p>}
      {state === 'success' && <CharacterList characters={sortedCharacters} />}
      {state === 'error' && <p>Nic nie znaleziono, spróbuj ponownie!</p>}
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;

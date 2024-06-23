import React from 'react';
import type { Character } from '../../../types/Character';
import { Option } from '@swan-io/boxed';

type FetchState = 'idle' | 'loading' | 'error' | 'success';
type Idle = {
  state: 'idle';
  result: null;
  err: null;
};
type Loading = {
  state: 'loading';
  result: null;
  err: null;
};
type Err = {
  state: 'error';
  result: null;
  err: string;
};
type Success = {
  state: 'success';
  result: Character[];
  err: null;
};
type UseFetchCharacterReturn = Idle | Loading | Err | Success;
type UseFetchCharactersProps = {
  name: string;
  gender: string;
};
export const useFetchCharacters = (
  props: UseFetchCharactersProps
): UseFetchCharacterReturn => {
  const { name, gender } = props;
  const [characters, setCharacters] = React.useState<Option<Character[]>>(
    Option.None
  );
  const [errorMsg, setErrorMsg] = React.useState<Option<string>>(Option.None);
  const [fetchState, setFetchState] = React.useState<FetchState>('idle');

  React.useEffect(
    function fetchCharacters() {
      if (name || gender) {
        setFetchState('loading');
        fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error: ${response.status} ${response.statusText}`
              );
            }

            return response.json();
          })
          .then((data) => {
            if (data.error) {
              throw new Error(data.error);
            }
            setCharacters(Option.Some(data.results));
            setFetchState('success');
          })
          .catch((e: Error) => {
            setErrorMsg(Option.Some(e.message));
            setFetchState('error');
          });
      }
    },
    [name, gender]
  );

  switch (fetchState) {
    case 'idle':
      return {
        state: 'idle',
        result: null,
        err: null,
      };
    case 'loading':
      return {
        state: 'loading',
        result: null,
        err: null,
      };
    case 'error':
      return {
        state: 'error',
        result: null,
        err: errorMsg.getOr('Something went wrong'),
      };
    case 'success':
      return {
        state: 'success',
        result: characters.getOr([]),
        err: null,
      };
    default: {
      const _exhaustiveCheck: never = fetchState;
      return _exhaustiveCheck;
    }
  }
};

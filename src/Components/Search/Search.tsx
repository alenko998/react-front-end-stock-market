import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onClick, search, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search something..."
      />
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Search;

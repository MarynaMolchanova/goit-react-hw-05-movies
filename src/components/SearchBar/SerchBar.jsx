import { Input, Form, Btn } from './SerchBar.styled';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const saveInputValue = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  const submitForm = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <Form onSubmit={submitForm}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={saveInputValue}
        value={searchValue}
      />
      <Btn type="submit">
        <AiOutlineSearch />
      </Btn>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledListWrapper = styled.div`
  display: none;
  position: absolute;
  background: black;
  border-radius: 10px;
  top: calc(100% + 10px);
  left: 0px;
  width: 100%;
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;

    setSearchQuery(value);

    // setTimeout -> axios

    // axios
    //   .get('http://localhost:9000/api/pockets/search', {
    //     params: {
    //       query: value,
    //       userId: localStorage.getItem('userId'),
    //     },
    //   })
    //   .then(({ data }) => console.log(data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <StyledWrapper>
      <Input search placeholder="Search..." value={searchQuery} onChange={(e) => handleChange(e)} />
      <StyledListWrapper>
        <ul>
          <li>Wynik 1</li>
          <li>Wynik 2</li>
        </ul>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default SearchBar;

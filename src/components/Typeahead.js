import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10% 15% 0% 10%;
  justify-content: center;
  flex-direction: column;
  align-content: stretch;
  height: 100vh;
  width: 100%;
`;
const InputClear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 10%;
    height: 80%;
    margin: 0px 5px 0px 5px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-size: 20px;
  }
`;
const SearchInput = styled.input`
  width: 60%;
  padding: 10px 18px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 5px;

  &:focus {
    border: 3px solid blue;
    box-shadow: -1px 0px 17px -9px rgba(0, 0, 0, 1);
  }
`;

const NoResultsField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ResultsField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ResultsFieldChild = styled.div`
  width: 71%;
  height: 100%;
  box-shadow: 1px 28px 34px -9px rgba(0, 0, 0, 0.21);
`;
const Suggestion = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
  &:hover {
    background-color: lightyellow;
  }
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const filteredBooks = suggestions.filter((book) => {
    if (value.length >= 3) {
      return book.title.toLowerCase().includes(value.toLowerCase());
    }
  });
  // console.log("filteredBooks", filteredBooks);
  return (
    <Wrapper>
      <InputClear>
        <SearchInput
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.target.value);
            }
          }}
        />
        <button onClick={() => setValue("")}>Clear</button>
        <h2>{console.log("searchinput", value.length)}</h2>
      </InputClear>

      {filteredBooks.forEach((book) => {
        if (value.length <= 3) { 
          <NoResultsField />
        } else {
           if (book.title.toLowerCase().includes(value.toLowerCase())) {
        <ResultsField>
          <ResultsFieldChild>
            <ul>
              {filteredBooks.map((book) => {
                return (
                  <Suggestion
                    key={book.id}
                    onClick={(ev) => handleSelect(book.title)}
                  >
                    {book.title}
                  </Suggestion>
                );
              })}
            </ul>
          </ResultsFieldChild>
            </ResultsField>} else {
        <NoResultsField />}
      }
    </Wrapper>
  );
};

export default Typeahead;
/*
suggestions.filter
check if each books title includes the letters that have been typed in so far
my input is in value, so i check if it's in value
value.length >= 3
*/

/*
hook sets the type, whenever it sets type it refreshes the component (if the type is changed)
ev.target.typed
*/

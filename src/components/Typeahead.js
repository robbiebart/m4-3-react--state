import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: solid 10px red;
  padding: 20% 15% 0% 10%;
  flex-direction: column;
  align-content: stretch;
  height: 100vh;
  width: 100%;
`;
const InputClear = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* margin: 30% 15% 0 15%; */
  /* padding: 150px 0px 150px 0px; */
  /* margin: 10% 0% 10 0%; */
  border: solid 10px blue;
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
const ResultsField = styled.div`
  display: flex;
  justify-content: center;
  border: solid 10px green;
  height: 100%;
`;
const Suggestion = styled.li`
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
      </InputClear>
      <ResultsField>
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
      </ResultsField>
    </Wrapper>
  );
};

export default Typeahead;
/*
suggestions.filter
check if each books title includes the letters that have been typed in so far
my input is in value, so i check if it's in value

*/

/*
hook sets the type, whenever it sets type it refreshes the component (if the type is changed)
ev.target.typed
*/

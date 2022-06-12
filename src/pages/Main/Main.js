import { Add, Header, HorizontalScroll } from "components";
import { Container, AddList } from "./style";
import _uniqueId from "lodash/uniqueId";
import { useState } from "react";

function Main() {
  const [columns, setColumns] = useState([
    { name: "Doing", id: _uniqueId("clm-"), cards: [] },
    { name: "Done", id: _uniqueId("clm-"), cards: [] },
  ]);

  const addColumn = (ref) => {
    //prevent adding when input is empty
    if (!ref.current.value) {
      return null;
    }

    const cloneColumns = [...columns];
    const column = {
      name: ref.current.value,
      id: _uniqueId("clm-"),
      cards: [],
    };
    cloneColumns.push(column);
    setColumns(cloneColumns);

    //clean input value
    ref.current.value = "";
  };

  return (
    <Container>
      <Header />
      <HorizontalScroll>
        <AddList>
          <Add title="Add a new column" onClick={(ref) => addColumn(ref)} />
        </AddList>
      </HorizontalScroll>
    </Container>
  );
}

export default Main;

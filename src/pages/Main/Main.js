import { Add, CardDetails, Column, Header, HorizontalScroll } from "components";
import { Container, AddList } from "./style";
import _uniqueId from "lodash/uniqueId";
import { useMemo, useState } from "react";

function Main() {
  const [columns, setColumns] = useState([
    { name: "Doing", id: _uniqueId("clm-"), cards: [] },
    { name: "Done", id: _uniqueId("clm-"), cards: [] },
  ]);
  const [selectedCard, setSelectedCard] = useState(null);
  const selectedColumnIndex = useMemo(() => {
    return columns?.findIndex((item) => item.id === selectedCard?.columnId);
  }, [selectedCard, columns]);

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

  console.log("hello mohsen");

  return (
    <Container>
      <Header />
      <HorizontalScroll>
        <Column
          setSelectedCard={setSelectedCard}
          columns={columns}
          setColumns={setColumns}
        />

        <AddList>
          <Add title="Add a new column" onClick={(ref) => addColumn(ref)} />
        </AddList>
      </HorizontalScroll>
      {selectedCard && (
        <CardDetails
          columns={columns}
          setColumns={setColumns}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          selectedColumnIndex={selectedColumnIndex}
        />
      )}
    </Container>
  );
}

export default Main;

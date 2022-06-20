import { Modal, Add } from "components";
import { useState } from "react";
import { Title, Description, Select, TitleWrap } from "./style";

const CardDetails = ({
  selectedCard,
  setSelectedCard,
  columns,
  setColumns,
  selectedColumnIndex,
}) => {
  const [selectedColumn, setSelectedColumn] = useState(
    columns[selectedColumnIndex]?.id
  );

  const addDescription = (ref) => {
    if (!ref.current.value) {
      return null;
    }
    const cloneColumns = [...columns];
    const cloneCards = [...cloneColumns[selectedColumnIndex].cards];
    const cloneSelectedCard = cloneCards[selectedCard.cardIndex];

    cloneSelectedCard.desc = [ref.current.value];

    setColumns(cloneColumns);

    //clear input
    ref.current.value = "";

    //close the modal
    setSelectedCard(null);
  };

  const cardMove = (e) => {
    setSelectedColumn(e.target.value);
    const cloneColumns = [...columns];
    const selectedCol = cloneColumns.filter(
      (item) => item.id === selectedColumn
    )[0];

    const cloneCards = [...selectedCol.cards];

    const filteredCards = cloneCards.filter(
      (item) => item.id !== selectedCard.id
    );

    //
    const card = {
      name: selectedCard.name,
      id: selectedCard.id,
      desc: selectedCard.desc,
      createdDate: selectedCard.createdDate,
    };
    selectedCol.cards = filteredCards;

    cloneColumns.forEach((item) => {
      if (item.id === e.target.value) item.cards?.unshift(card);
    });

    setColumns(cloneColumns);

    //close the modal
    setSelectedCard(null);
  };

  return (
    <Modal
      testId="modal"
      open={Boolean(selectedCard)}
      onClose={() => setSelectedCard(null)}
    >
      <TitleWrap>
        <Title>{selectedCard?.name}</Title>

        <Description>{selectedCard.desc}</Description>
      </TitleWrap>

      {!selectedCard.desc && (
        <Add
          title="Add description about the task"
          onClick={(ref) => addDescription(ref)}
        />
      )}

      <Select
        data-testid="move-card-options"
        value={selectedColumn}
        onChange={(e) => cardMove(e)}
      >
        {columns.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </Modal>
  );
};

export default CardDetails;

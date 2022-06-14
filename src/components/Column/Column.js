import { memo } from "react";
import { Add } from "components";
import { Wrapper, Title, ColumnItem } from "./style";
import _uniqueId from "lodash/uniqueId";
import moment from "moment";
import Card from "components/Card";

const Column = ({ columns, setColumns, setSelectedCard }) => {
  const addCard = (columnId, ref) => {
    if (!ref.current.value) {
      return null;
    }
    const cloneColumns = [...columns];

    const card = {
      name: ref.current.value,
      id: _uniqueId("crd-"),
      createdDate: moment().format("MMM Do YY"),
    };
    console.log();
    cloneColumns.forEach((item) => {
      if (item.id === columnId) item.cards.push(card);
    });
    setColumns(cloneColumns);
    ref.current.value = "";
  };

  return (
    <>
      {columns.map((clm) => (
        <Wrapper data-testid="column" key={clm.id}>
          <Title>{clm.name}</Title>
          <ColumnItem>
            <Card
              setSelectedCard={setSelectedCard}
              cards={clm.cards}
              columnId={clm.id}
            />
            <Add
              title="Add a new card"
              onClick={(ref) => addCard(clm.id, ref)}
            />
          </ColumnItem>
        </Wrapper>
      ))}
    </>
  );
};

export default memo(Column);

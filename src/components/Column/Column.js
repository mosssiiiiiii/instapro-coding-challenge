import { memo } from "react";
import Add from "components/Add";
import { Wrapper, Title, ColumnItem } from "./style";
import _uniqueId from "lodash/uniqueId";
import Card from "components/Card";

const Column = ({ columns, setColumns }) => {
  const addCard = (columnId, ref) => {
    if (!ref.current.value) {
      return null;
    }
    const cloneColumns = [...columns];

    const card = {
      name: ref.current.value,
      id: _uniqueId("crd-"),
    };

    cloneColumns.forEach((item) => {
      if (item.id === columnId) item.cards.push(card);
    });
    setColumns(cloneColumns);
    ref.current.value = "";
  };

  return (
    <div data-testid="column-list">
      {columns.map((clm) => (
        <Wrapper data-testid="column" key={clm.id}>
          <Title>{clm.name}</Title>
          <ColumnItem>
            <Card cards={clm.cards} />
            <Add
              title="Add a new card"
              onClick={(ref) => addCard(clm.id, ref)}
            />
          </ColumnItem>
        </Wrapper>
      ))}
    </div>
  );
};

export default memo(Column);

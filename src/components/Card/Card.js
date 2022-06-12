import { memo } from "react";
import { Wrapper } from "./style";

const Card = ({ cards }) => {
  return (
    <div data-testid="card-list">
      {cards?.map((crd) => (
        <Wrapper data-testid="card" key={crd.id}>
          {crd.name}
        </Wrapper>
      ))}
    </div>
  );
};

export default memo(Card);

import { memo } from "react";
import { Wrapper } from "./style";

const Card = ({ cards }) => {
  return (
    <>
      {cards?.map((crd) => (
        <Wrapper data-testid="card" key={crd.id}>
          {crd.name}
        </Wrapper>
      ))}
    </>
  );
};

export default Card;

import { Wrapper, Title, Description, Date } from "./style";

const Card = ({ cards, setSelectedCard, columnId }) => {
  return (
    <>
      {cards?.map((crd, index) => (
        <Wrapper
          onClick={() =>
            setSelectedCard({ ...crd, columnId: columnId, cardIndex: index })
          }
          data-testid="card"
          key={crd.id}
        >
          <Title>{crd?.name}</Title>
          <Description>{crd?.desc}</Description>
          <Date>{crd?.createdDate}</Date>
        </Wrapper>
      ))}
    </>
  );
};

export default Card;

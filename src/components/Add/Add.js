import { TextInput } from "components";
import { useOutsideElement } from "hooks/useOutsideElement";
import { useState, useRef } from "react";
import { Wrapper, Title, ButtonWrap, CloseButton, AddButton } from "./style";

const Add = ({ title, onClick }) => {
  const [show, setShow] = useState(false);
  const AddCardsOrLists = useRef(null);
  const ref = useRef();

  useOutsideElement(AddCardsOrLists, () => {
    setShow(() => false);
  });

  return (
    <Wrapper
      data-testid="add-wrap"
      ref={AddCardsOrLists}
      onClick={() => setShow(true)}
    >
      {!show ? (
        <Title onClick={() => setShow(true)}> + {title}</Title>
      ) : (
        <>
          <TextInput
            name="add-input"
            placeholder="Add new Card"
            inputRef={ref}
          />
          <ButtonWrap>
            <CloseButton
              data-testid="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
            >
              X
            </CloseButton>
            <AddButton data-testid="add-button" onClick={() => onClick(ref)}>
              Add
            </AddButton>
          </ButtonWrap>
        </>
      )}
    </Wrapper>
  );
};

export default Add;

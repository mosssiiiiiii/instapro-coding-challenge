import { TextInput } from "components";
import { useOutsideElement } from "hooks/useOutsideElement";
import { useState, useRef } from "react";
import { Wrapper, Title, ButtonWrap, CloseButton, AddButton } from "./style";

const Add = ({ testId = "add-wrap", title, onClick }) => {
  const [show, setShow] = useState(false);
  const AddCardsOrLists = useRef(null);
  const ref = useRef();

  useOutsideElement(AddCardsOrLists, () => {
    setShow(() => false);
  });

  return (
    <Wrapper
      data-testid={testId}
      ref={AddCardsOrLists}
      onClick={() => setShow(true)}
    >
      {!show ? (
        <Title onClick={() => setShow(true)}>
          <span>+</span> {title}
        </Title>
      ) : (
        <>
          <TextInput name="add-input" placeholder={title} inputRef={ref} />
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

import { Input } from "./style";

const TextInput = ({ name, type = "text", placeholder, inputRef }) => {
  return (
    <Input
      data-testid={name}
      type={type}
      ref={inputRef}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

import * as Styled from "./add-button.styled";

interface IAddButtonProps {
  size: number;
  onClick: () => void;
}

export const AddButtonComponent = ({ size, onClick }: IAddButtonProps) => (
  <Styled.Button onClick={onClick}>
    <Styled.AddIcon size={size} />
  </Styled.Button>
);

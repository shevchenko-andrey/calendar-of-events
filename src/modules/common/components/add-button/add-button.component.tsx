import * as Styled from "./add-button.styled";

interface IAddButtonProps {
  size: number;
}

export const AddButtonComponent = ({ size }: IAddButtonProps) => (
  <Styled.Button>
    <Styled.AddIcon size={size} />
  </Styled.Button>
);

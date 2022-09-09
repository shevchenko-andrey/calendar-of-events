import styled from "styled-components";
import { Field } from "formik";
import { COLORS, SPACES } from "../../../theme";

export const FildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label<{ date?: boolean }>`
  margin-top: ${SPACES.m};
  color: ${({ date, theme }) =>
    date ? theme.COLORS.secondary : theme.COLORS.black};
`;
export const FormField = styled(Field)`
  border: 2px solid ${COLORS.black};
  padding: ${SPACES.s};
  border-radius: 4px;
  margin-top: ${SPACES.m};
  width: 17rem;
`;

export const DateFild = styled.input`
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.black};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.secondary};
  max-width: 8rem;
  width: 100%;
  height: 2rem;
  transition: border-bottom 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.blueGreen};
  }
`;
export const DateWrapper = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  resize: none;
  margin-top: ${SPACES.m};
  width: 17rem;
  height: 7rem;
  border: 2px solid ${COLORS.black};
  padding: ${SPACES.s};
`;

export const Error = styled.span`
  padding-top: ${SPACES.s};
  width: 17rem;
  color: ${COLORS.red};
`;

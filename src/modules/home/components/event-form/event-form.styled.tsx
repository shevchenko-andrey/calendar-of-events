import styled from "styled-components";
import { Form } from "formik";
export const EventForm = styled(Form)``;

export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  margin-top: ${({ theme }) => theme.SPACES.l};
  margin-left: ${({ theme }) => theme.SPACES.l};
  text-align: center;
  cursor: pointer;
  min-width: 5rem;
  padding: ${({ theme }) => theme.SPACES.s};
  display: block;
  color: ${({ theme }) => theme.COLORS.black};
  background-color: ${({ theme }) => theme.COLORS.btnBackground};
  border: 2px solid ${({ theme }) => theme.COLORS.black};
  border-radius: 15px;
  text-decoration: none;
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.COLORS.bthBackgroundHover};
    color: ${({ theme }) => theme.COLORS.white};
    border-color: ${({ theme }) => theme.COLORS.white};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const DateWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.SPACES.m};
  justify-content: space-between;
  width: 100%;
`;

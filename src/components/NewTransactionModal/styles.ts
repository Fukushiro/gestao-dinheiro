import styled from "styled-components";
import { darken, transparentize } from "polished";
export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid #d7d7d7;

    border-radius: 0.25rem;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background-color: var(--green);
    width: 100%;
    color: #fff;
    border-radius: 5px;
    border: none;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioButton = styled.button<RadioButtonProps>`
  border: 1.5px solid #d7d7d7;
  border-radius: 0.25rem;
  width: 14.75rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
  padding: 1rem;

  line-height: 1.5rem;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  span {
    color: var(--text-title);
    font-weight: 400;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

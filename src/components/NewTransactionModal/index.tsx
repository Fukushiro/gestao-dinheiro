import React, { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import closeImg from "../../assets/Vector.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../services/api";
import { Container, RadioButton, TransactionTypeContainer } from "./styles";
// import { Container } from './styles';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionModal: React.FC<NewTransactionModalProps> = (
  props
) => {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  function handleSetTypeDeposit() {
    setType("deposit");
  }

  function handleSetTypeWithdraw() {
    setType("withdraw");
  }
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ amount: value, category, title, type });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("deposit");

    props.onRequestClose();
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={handleSetTypeDeposit}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type="button"
            onClick={handleSetTypeWithdraw}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Entrada" />
            <span>Saida</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

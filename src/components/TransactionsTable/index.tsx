import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../services/api";
import { Container } from "./styles";

// import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.title}</td>

                <td className={value.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(value.amount)}
                </td>
                <td>{value.category}</td>
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(value.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>Desenvolvimento de website</td>

            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>

            <td className="withdraw">-R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>

            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  );
};

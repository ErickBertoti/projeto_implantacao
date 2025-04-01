import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Config from '../config.json';

const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 10px;
  background-color: #fafaf0;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 240px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 30px;
  background-color: #efefef;
`;

const Label = styled.label`
  color: #2f2f2f;
  font-weight: bold;`;

const Button = styled.button`
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  font-weight: bold;
  height: 33px;
  width: 120px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {

  const urlApi = Config.servidor_api + ":" +
                 Config.servidor_porta + "/" +
                 Config.contexto;

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
      user.cpf.value = onEdit.cpf;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value ||
      !user.cpf.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
         .put("http://" + urlApi + "/usuario", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          cpf: user.cpf.value,
          id: onEdit.id,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://" + urlApi + "/usuario", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          cpf: user.cpf.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";
    user.cpf.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <div>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      </div>
      <div>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>
      </div>
      <div>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      </div>
      <div>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>
      </div>
      <div>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      </div>
      <div>
      <InputArea>
        <Label>&nbsp;</Label>
        <Button type="submit">Confirma</Button>
      </InputArea>
      </div>
    </FormContainer>
  );
};

export default Form;

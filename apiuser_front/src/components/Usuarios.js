import styled from "styled-components";
import Form from "./Form.js";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Config from '../config.json';
 
const Title = styled.h2`
color: #2f2f2a;
align: center;`;

function Usuarios(){

  const urlApi = Config.servidor_api + ":" +
                 Config.servidor_porta + "/" +
                 Config.contexto;

    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://" + urlApi + "/usuario");
        setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => { getUsers(); }, [setUsers]);

    return (
        <>
        <Title >Cadastro de Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_LEFT} />
        </>
    );

}
export default Usuarios;



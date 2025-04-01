import { Text } from '@chakra-ui/react';


const Sobre = () => {
    return(
        <>
        <hr />
        <div>
            <Text color="#00080f" fontSize="20px"  padding="15px">
                Aplicação didática para Cadastro de Usuários.<br / >
                Utiliza React no Front-End e nessa versão vai <br />
                usar o Spring Boot como API para persistência
                de dados. <br />
                <p>
                    <br />
                    Utilize para testes e verificações... e melhorias!
                </p>
            </Text>
        </div>
        <hr />

        </>

    );
};

export default Sobre;
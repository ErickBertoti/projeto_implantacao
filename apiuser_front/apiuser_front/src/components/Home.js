import { Link } from '@chakra-ui/react';
import Logo from "./Logo";
import { Text } from '@chakra-ui/react';


const Home = () => {
    return(
        <>
        <hr />
        <Link href="/" display="block" />
        <Logo size="10rem" />
        <Text color="#00080f" fontSize="28px"  padding="15px">
                Cadastro de Usuários
            </Text>
        <hr />
        </>
    );
};

export default Home;
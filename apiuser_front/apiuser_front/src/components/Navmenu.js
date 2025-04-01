import { Flex } from '@chakra-ui/react';
import Navlink from './Navlink';

const Navmenu = () => {

    return(
        <Flex ga="5rem" >
            <Navlink href="/" text="Home" />
            <Navlink href="/Usuarios" text="Usuários" />
            <Navlink href="/Sobre" text="Sobre" />
        </Flex>
    );

}

export default Navmenu;
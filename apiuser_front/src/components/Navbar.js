import Logo from "./Logo";
import Navmenu from "./Navmenu";
import { HStack } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <HStack bgColor="teal.200" width="95%" p="1rem 2rem" justifyContent={"space-between"}>
            <Logo size="3rem" />
            <Navmenu />
        </HStack>

    );

}

export default Navbar;

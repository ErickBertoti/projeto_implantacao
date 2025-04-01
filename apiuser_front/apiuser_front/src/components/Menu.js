import Logo from "./Logo";
import Navmenu from "./Navmenu";
import { Flex } from '@chakra-ui/react';


const Menu = () => {

    return (
    <Flex ga="5rem" >
        <nav>
        <div class="menu">
        <div class="container">
            <ul class="inner-menu">
                <li><a href="#">Opções</a>
                    <ul class="dropdown">
                        <li><a href="#">Usuários</a></li>
                        <li><a href="#">Dropdown-menu</a></li>
                    </ul>
                </li>
                <li><a href="#">Animate-2</a>
                    <ul class="dropdown">
                        <li><a href="#">Dropdown-menu</a></li>
                        <li><a href="#">Dropdown-menu</a></li>            
                    </ul>
                </li>
                <li><a href="#">Animate-3</a>
                    <ul class="dropdown">
                        <li><a href="#">Dropdown-menu</a></li>
                        <li><a href="#">Dropdown-menu</a></li>
                    </ul>
                </li>        
            </ul>
        </div>
        </div>
        </nav>
    </Flex>
    );
}
export default Menu;

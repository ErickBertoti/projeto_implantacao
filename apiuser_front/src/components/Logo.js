import User from '../assets/user.gif';
import LogoRe from '../assets/logo.svg';
import { Link, Image } from '@chakra-ui/react';

const Logo = ({size}) => {
    return(
        <Link href="#" display="block">
            <Image src={User} alt="Logotipo do sistema" width={size} />
            <Image src={LogoRe} className="App-logo" alt="Logotipo do React" width={size} />
        </Link>

    );
};

export default Logo;
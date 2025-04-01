/* import { Box, Link, Text } from '@chakra-ui/react'; */
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';


const Navlink = ({href, text}) =>{
    return (
        <Box as={Link} to={href} padding="5" _hover={{ textDecoration: 'underline' }}>
        {text}
    </Box>

    );
}
export default Navlink;
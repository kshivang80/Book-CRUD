import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,

    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to="/">
                    <Box as="b" fontSize={"19px"}>

                        Book-Store
                        </Box>
                    </Link>
                    

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} mt="10px">
                                {colorMode === 'light' ? <MoonIcon style={{ width: "25px", height: "25px" }} /> : <SunIcon style={{ width: "25px", height: "25px" }} />}
                            </Button>
                            <Link to="/addbooks">
                                <Button mt="7px">
                                   <Text as="b" fontSize={"md"}>Add-Books</Text> 
                                </Button>
                                </Link>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}

                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'lg'}
                                        src={'https://avatars.githubusercontent.com/u/103144321?v=4'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.githubusercontent.com/u/103144321?v=4'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
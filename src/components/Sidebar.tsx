import React from 'react';
import {Box, VStack, Button, Text, Image, Flex} from '@chakra-ui/react';
import {useNavigate, useLocation} from 'react-router-dom';
import {FaHome, FaBox, FaCog, FaUserShield} from 'react-icons/fa';

interface SidebarProps {
    height: string; // 接受高度为字符串类型
}

const Sidebar: React.FC<SidebarProps> = ( { height } ) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <Box
            width="250px"
            height={height} // 使用传递的高度
            bg="gray.100"
            color="gray.700"
            borderRadius="20px"
            boxShadow="md"
            p={4}
            ml="20px"
        >
            <Flex width="100%" justifyContent="center" alignItems="center" mt={5} mb={5}>
                <Image
                    src="/src/assets/GUHE.jpg" // 替换成你的图片路径
                    alt="Logo"
                    boxSize="40px" // 设置图片的大小
                    mr={1} // 设置图片与文字之间的间距
                />
                <Text fontSize="4xl" fontWeight="bold" color="teal.500">
                    谷禾健康
                </Text>
            </Flex>
            <VStack align="start" spacing={4} flex="1">
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="10px"
                    bg={isActive('/dashboard') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/dashboard') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaHome/>}
                    onClick={() => navigate('/dashboard')}
                >
                    监控面板
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/Instrument') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/Instrument') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/Instrument')}
                >
                    实验仪器使用
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/item') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/instrument') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/instrument')}
                >
                    实验仪器维护
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验仪器维修
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/room') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/room') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/room')}
                >
                    实验房间使用
                </Button>

                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验试剂采购
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验试剂验收
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验试剂领用
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验流程
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/UserManagement') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/UserManagement') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaCog/>}
                    onClick={() => navigate('/UserManagement')}
                >
                    实验人员
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/items') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/items') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaBox/>}
                    onClick={() => navigate('/items')}
                >
                    实验记录
                </Button>
                <Button
                    width="100%"
                    color="teal.500"
                    borderRadius="15px"
                    bg={isActive('/admin') ? 'gray.200' : 'transparent'}
                    _hover={{bg: isActive('/admin') ? 'gray.200' : 'gray.100'}}
                    justifyContent="flex-start"
                    leftIcon={<FaUserShield/>}
                    onClick={() => navigate('/admin')}
                >
                    管理员
                </Button>
            </VStack>
            <Box mt="auto" pt={4} borderTop="1px" borderColor="gray.200" width="100%">
                <Flex justifyContent="space-between" width="100%">
                    <Text fontSize="sm" color="gray.500">
                        当前登录用户：
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        牛耀芳
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default Sidebar;












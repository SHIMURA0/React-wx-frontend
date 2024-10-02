import React from 'react';
// import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useToast,
    Flex,
    Text,
    Image,
    Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate

const LoginForm: React.FC = () => {
    const toast = useToast();
    const navigate = useNavigate(); // 使用 useNavigate

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username') as string;
        const password = data.get('password') as string;

        // 处理登录逻辑，例如调用 API 进行验证
        console.log({username, password});

        // 假设验证通过
        const isValid = true; // 这里可能是你实际的登录验证逻辑

        if (isValid) {
            // 显示成功通知
            toast({
                title: "身份识别成功！",
                description: "您已成功登陆",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            // 在延迟之后跳转到新页面
            setTimeout(() => {
                navigate('/dashboard'); // 修改为你希望跳转的路径
            }, 3000); // 等待通知显示后再跳转
        } else {
            // 显示失败通知
            toast({
                title: "登录失败。",
                description: "用户名或密码不正确。",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    //     // 显示成功或失败的通知
    //     toast({
    //         title: "身份识别成功！",
    //         description: "您已成功登陆",
    //         status: "success",
    //         duration: 3000,
    //         isClosable: true,
    //     });
    // };

    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bg="gray.200" // 将网页的背景色设置为灰色
        >
            <Box
                bg="white" // 卡片的背景色保持为白色
                borderWidth="1px"
                borderRadius="20px"
                boxShadow="md"
                overflow="hidden"
                display="flex"
                width="80%"
                maxW="1000px"
                height="550px"
            >
                {/* 左侧图片和标题 */}
                <Box flex="3" display={{base: 'none', md: 'flex'}} flexDirection="column" justifyContent="center"
                     p={10}>

                    <Image
                        src="/src/assets/lab_login.png" // 您的图片路径
                        alt="Login Image"
                        objectFit="cover"
                        height="85%"
                        width="100%"
                    />
                </Box>

                {/* 右侧表单 */}
                <Box flex="1.5" p={12}>
                    <Flex
                        direction="column"
                        justifyContent="center" // 垂直方向居中
                        alignItems="center" // 水平方向居中
                        height="100%" // 使 Flex 容器占满整个 Box
                    >
                        <Text fontSize="4xl" fontWeight="bold" mb={4} textAlign="left" color="blue.600">
                            谷禾实验室管理
                        </Text>


                        <form onSubmit={handleSubmit} style={{width: '100%'}}>
                            <Stack spacing={4}>
                                <FormControl id="username" isRequired>
                                    <FormLabel>用户名</FormLabel>
                                    <Input name="username" type="text" placeholder="请输入用户名" variant="filled"/>
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>密码</FormLabel>
                                    <Input name="password" type="password" placeholder="请输入密码" variant="filled"/>
                                </FormControl>
                                <Link color="blue.500" href="#" mb={4}>
                                    忘记密码？
                                </Link>
                                <Button type="submit" colorScheme="blue" width="full" size="lg">
                                    登录
                                </Button>
                            </Stack>
                        </form>
                        <Text mt={4} textAlign="center">
                            还没有账号？ <Link color="blue.500" href="#">创建账号</Link>
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default LoginForm;










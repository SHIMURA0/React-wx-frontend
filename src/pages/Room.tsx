import React from 'react';
import {Box, Button, Text, Flex, VStack} from '@chakra-ui/react';

const Room: React.FC<{ height: string }> = ({height}) => {
    return (
        <Box
            flex={1}
            height={height} // 使用传递的高度
            bg="gray.100"
            borderRadius="20px"
            // boxShadow="md"
            p={4}
        >
            <Flex direction="column" gap={2}>
                {/* 上面四个大矩形 */}
                <Flex justify="space-between" gap={4}>
                    <Box
                        flex={1}
                        height="350px"
                        bg="white"
                        borderRadius="15px"
                        p={4}
                    >
                        {/* 上部区域 */}
                        <Flex justify="space-between" align="center" mb={4}>
                            <Text fontSize="2xl" fontWeight="bold">房间I：试剂准备室</Text>
                            <Button colorScheme="blue" variant="solid">查看详情</Button>
                        </Flex>

                        <Flex flex={1}>
                            {/* 左下区域：仪器列表 */}
                            <VStack align="start" flex={1}>
                                <Text fontSize="lg" fontWeight="bold">仪器列表:</Text>
                                <Flex direction="column">
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>1. 生物安全柜</Text>
                                        <Box bg="green.500" borderRadius="full" width="10px" height="10px"/>
                                        <Text>使用中</Text>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>2. 冰箱</Text>
                                        {/*<Box bg="red.500" borderRadius="full" width="10px" height="10px"/>*/}
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>3. 数字温湿度计</Text>
                                        <Box bg="green.500" borderRadius="full" width="10px" height="10px"/>
                                        <Text>使用中</Text>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>4. 数字温度计</Text>
                                        <Box bg="yellow.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>5. 电子天平</Text>
                                        <Box bg="red.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>6. 砝码</Text>
                                        <Box bg="green.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>7. 低温酒精玻璃液体温度计</Text>
                                        <Box bg="yellow.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>8. 量筒1</Text>
                                        <Box bg="green.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>9. 量筒2</Text>
                                        <Box bg="red.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>10. 全自动灌装机</Text>
                                        <Box bg="yellow.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                </Flex>
                            </VStack>

                            {/* 右下区域：仪器列表 */}
                            <VStack align="start" flex={1}>
                                <Flex direction="column">


                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>11. 全自动移液吸头排列机器人</Text>
                                        <Box bg="green.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                    <Flex align="center" justify="space-between" w="100%">
                                        <Text>12. pH计</Text>
                                        <Box bg="red.500" borderRadius="full" width="10px" height="10px"/>
                                    </Flex>
                                </Flex>
                            </VStack>

                            {/* 右下区域：用户姓名 */}
                            <VStack align="start" flex={1} ml={4}>
                                <Text fontSize="lg" fontWeight="bold">用户姓名:</Text>
                                <Text>用户 1</Text>
                                <Text>用户 2</Text>
                            </VStack>
                        </Flex>
                    </Box>
                    <Box
                        flex={1}
                        height="350px"
                        bg="gray.200"
                        borderRadius="15px"
                        p={4}
                    >
                    </Box>
                </Flex>
                <Flex justify="space-between">
                    <Box
                        flex={1}
                        height="350px"
                        bg="gray.200"
                        borderRadius="15px"
                    />
                    <Box
                        flex={1}
                        height="350px"
                        bg="gray.200"
                        borderRadius="15px"
                        ml={4}
                    />
                </Flex>

                {/* 下面四个小矩形 */}
                <Flex justify="space-between" mt={2}>
                    <Box
                        flex={1}
                        height="80px"
                        bg="gray.300"
                        borderRadius="10px"
                    />
                    <Box
                        flex={1}
                        height="80px"
                        bg="gray.300"
                        borderRadius="10px"
                        ml={4}
                    />
                </Flex>
                <Flex justify="space-between">
                    <Box
                        flex={1}
                        height="80px"
                        bg="gray.300"
                        borderRadius="10px"
                    />
                    <Box
                        flex={1}
                        height="80px"
                        bg="gray.300"
                        borderRadius="10px"
                        ml={4}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Room;

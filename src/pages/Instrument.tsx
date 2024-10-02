import React from 'react';
import {Box, Flex, Text, Image} from '@chakra-ui/react';

import {Gantt, Task,} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";


interface DashboardProps {
    height: string; // 接收高度为字符串类型
}

const tasks: Task[] = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Idea',
        id: 'Task 0',
        type: 'task',
        progress: 45,
        isDisabled: true,
        styles: {progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d'},
    }
];

const Instrument: React.FC<DashboardProps> = ({height}) => {


    return (
        <Box
            flex={1}
            height={height} // 使用传递的高度
            bg="gray.200"
            borderRadius="20px"
            boxShadow="md"
            p={4}
            ml={1} // 左侧间距
        >
            <Flex direction="column" height="100%">
                {/* 上部区域 1 和 2 */}
                <Flex flex={1}>
                    <Box
                        flex={5} // 区域 1
                        bg="white"
                        borderRadius="10px"
                        p={4}
                        mr={2} // 右侧间距
                    >
                        <Text fontSize="xl" fontWeight="bold">区域 1</Text>
                        <Text>内容可以放在这里</Text>
                        {/*<Gantt*/}
                        {/*    tasks={tasks}*/}
                        {/*    viewMode={day}*/}
                        {/*    // onDateChange={onTaskChange}*/}
                        {/*    // onTaskDelete={onTaskDelete}*/}
                        {/*    // onProgressChange={onProgressChange}*/}
                        {/*    // onDoubleClick={onDblClick}*/}
                        {/*    // onClick={onClick}*/}
                        {/*/>*/}
                    </Box>
                    <Box
                        flex={1} // 区域 2
                        bg="white"
                        borderRadius="10px"
                        p={4}
                    >
                        <Text fontSize="xl" fontWeight="bold">测序仪</Text>
                        <Image
                            src="/src/assets/sequencer.png" // 替换为您的图像 URL
                            alt="测序仪示例图"
                            width="100%" // 设置图像宽度为 100%
                            // boxSize="150px" // 图像大小
                            objectFit="cover" // 适应布局
                            mt={2} // 图像上方的间距
                        />
                        <Box mt={4}>
                            <Text fontSize="md" fontWeight="bold">参数信息:</Text>
                            <Text fontSize="sm">- 设备编号: GHJC-EQ0056</Text>
                            <Text fontSize="sm">- 品牌: 深圳华大</Text>
                            <Text fontSize="sm">- 规格型号: DNBSEQ-G99</Text>
                            <Text fontSize="sm">- 序列号: 2100710230054</Text>
                            <Text fontSize="sm">- 生产厂商: 深圳华大智造销售有限公司</Text>
                            <Text fontSize="sm">- 开始使用日期: 2023-12-07</Text>
                            <Text fontSize="sm">- 放置地点: Ⅳ分析检测室</Text>
                            <Text fontSize="sm">- 认证: CNAS</Text>

                        </Box>
                    </Box>
                </Flex>

                {/* 底部区域 4 */}
                <Box
                    height="500px" // 设置底部区域的高度
                    bg="white"
                    borderRadius="10px"
                    p={4}
                    mt={2} // 上侧间距
                >
                    <Text fontSize="xl" fontWeight="bold">测序仪使用记录</Text>
                    {/*<TableComponent />*/}
                </Box>
            </Flex>
        </Box>
    );
};

export default Instrument;
import React from 'react';
import {Box} from '@chakra-ui/react';

interface DashboardProps {
    height: string; // 接收高度为字符串类型
}

const Dashboard: React.FC<DashboardProps> = ({height}) => {
    return (
        <Box
            flex={1}
            height={height} // 使用传递的高度
            bg="white"
            borderRadius="20px"
            // boxShadow="md"
            p={4}
        >
            {/* Dashboard 内容 */}
        </Box>
    );
};

export default Dashboard;








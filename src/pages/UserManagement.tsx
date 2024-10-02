import React, { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import UserTable from '../components/UserTable';
import AddUserModal from '../components/AddUserModal';

interface UserManagementProps {
    height: string; // 接收高度为字符串类型
}

const UserManagement: React.FC<UserManagementProps> = ({ height }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <Box
            flex="1"
            bg="white"
            borderRadius="20px"
            // boxShadow="md"
            p={4}
            height={height} // 使用传递的高度
            ml={20} // 设置左边距
        >
            <Heading as="h2" size="xl" mt={7} mb={5}>
                实验室人员管理
            </Heading>
            <Button colorScheme="teal" onClick={handleOpen} mt={5} mb={5}>
                + 添加新实验人员
            </Button>
            <UserTable />
            <AddUserModal isOpen={isOpen} onClose={handleClose} onUserAdded={() => {}} />
        </Box>
    );
};

export default UserManagement;







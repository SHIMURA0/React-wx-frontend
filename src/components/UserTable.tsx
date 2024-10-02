import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
} from '@chakra-ui/react';
import { getUsers } from '../services/api';

interface User {
    id: number;
    fullName: string;
    email: string;
    role: string;
    status: string;
}

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>姓名</Th>
                        <Th>邮件</Th>
                        <Th>职责</Th>
                        <Th>状态</Th>
                        <Th>当前操作</Th>
                        <Th>详细操作</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => (
                        <Tr key={user.id}>
                            <Td>{user.fullName}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.role}</Td>
                            <Td>{user.status}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm">
                                    Edit
                                </Button>
                                <Button colorScheme="red" size="sm" ml={2}>
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;

import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { addUser } from '../services/api';

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUserAdded: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({
                                                       isOpen,
                                                       onClose,
                                                       onUserAdded,
                                                   }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');

    const handleAddUser = async () => {
        await addUser({ fullName, email, role, status });
        onUserAdded(); // Notify parent to refresh user list
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>添加新用户</ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Role</FormLabel>
                        <Input
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Status</FormLabel>
                        <Input
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleAddUser}>
                        Add User
                    </Button>
                    <Button onClick={onClose} ml={3}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddUserModal;

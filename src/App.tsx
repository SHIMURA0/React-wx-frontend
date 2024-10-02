import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ChakraProvider, Flex} from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LoginForm from './LoginForm';
import UserManagement from './pages/UserManagement';
import Room from './pages/Room';
import Instrument from "./pages/Instrument.tsx";

const App: React.FC = () => {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/Dashboard" element={
                        <Flex height="100vh" alignItems="center" justifyContent="center">
                            <Sidebar height="97vh"/> {/* 更新 Sidebar 高度 */}
                            <Flex flex="1" p={4} height="97vh" alignItems="center"
                                  justifyContent="center"> {/* 更新主要内容区域高度 */}
                                <Dashboard height="97vh"/>
                            </Flex>
                        </Flex>
                    }/>
                    <Route path="/UserManagement" element={
                        <Flex height="100vh" alignItems="center" justifyContent="center">
                            <Sidebar height="97vh"/> {/* 更新 Sidebar 高度 */}
                            <Flex flex="1" p={4} height="97vh" alignItems="center"
                                  justifyContent="center"> {/* 更新主要内容区域高度 */}
                                <UserManagement height="97vh"/>
                            </Flex>
                        </Flex>
                    }/>
                    <Route path="/Room" element={
                        <Flex height="100vh" alignItems="center" justifyContent="center">
                            <Sidebar height="97vh"/> {/* 更新 Sidebar 高度 */}
                            <Flex flex="1" p={4} height="97vh" alignItems="center"
                                  justifyContent="center"> {/* 更新主要内容区域高度 */}
                                <Room height="97vh"/>
                            </Flex>
                        </Flex>
                    }/>
                    <Route path="/Instrument" element={
                        <Flex height="100vh" alignItems="center" justifyContent="center">
                            <Sidebar height="97vh"/> {/* 更新 Sidebar 高度 */}
                            <Flex flex="1" p={4} height="97vh" alignItems="center"
                                  justifyContent="center"> {/* 更新主要内容区域高度 */}
                                <Instrument height="97vh"/>
                            </Flex>
                        </Flex>
                    }/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
};

export default App;














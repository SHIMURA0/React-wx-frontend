import React from 'react';
import { useTable, useSortBy, useGlobalFilter, Column } from 'react-table';
import { Box, Text, Input, Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Data {
    id: number;
    name: string;
    date: string;
    status: string;
}

const TableComponent: React.FC = () => {
    const data = React.useMemo<Data[]>(
        () => [
            { id: 1, name: '样本 A', date: '2023-03-01', status: '完成' },
            { id: 2, name: '样本 B', date: '2023-03-05', status: '进行中' },
            { id: 3, name: '样本 C', date: '2023-03-10', status: '未开始' },
            // 更多数据...
        ],
        []
    );

    const columns = React.useMemo<Column<Data>[]>(
        () => [
            {
                Header: '样本名称',
                accessor: 'name',
            },
            {
                Header: '日期',
                accessor: 'date',
            },
            {
                Header: '状态',
                accessor: 'status',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state,
    } = useTable<Data>(
        {
            columns,
            data,
        },
        useGlobalFilter, // 使用全局过滤器
        useSortBy // 使用排序功能
    );

    return (
        <Box>
            {/* 筛选输入 */}
            <Text mb={2}>筛选样本名称:</Text>
            <Input
                placeholder="输入样本名称"
                onChange={e => setGlobalFilter(e.target.value || undefined)} // 使用输入的值过滤
            />
            <ChakraTable {...getTableProps()} variant="striped" colorScheme="teal" mt={2}>
                <Thead>
                    {headerGroups.map(headerGroup => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                ))}
                            </Tr>
                        );
                    })}
                </Tbody>
            </ChakraTable>
        </Box>
    );
};

const MyApp: React.FC = () => {
    return (
        <Box
            height="500px"
            bg="white"
            borderRadius="10px"
            p={4}
            mt={2}
        >
            <Text fontSize="xl" fontWeight="bold">测序仪使用记录</Text>
            <TableComponent />
        </Box>
    );
};

export default MyApp;


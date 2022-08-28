//React elements and hooks imports
import { FunctionComponent, useState } from 'react'

//Components imports
import { createStyles, Paper, ScrollArea, Stack, Title, Pagination } from '@mantine/core';
import EmployeeItem from './EmployeeItem';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
import { IEmployee } from '_types/Employee';
interface ListProps {
    employees: IEmployee[]
}
const EmployeeList: FunctionComponent<ListProps> = ({ employees }) => {
    const { classes } = useStyles();
    const [activePage, setActivePage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(8);

    let total: number = employees?.length ?? 0

    const handlePageChange = (page: number) => {
        setActivePage(page);
    }

    return (
        <ScrollArea scrollbarSize={8}>
            <Stack spacing={'xs'} className={classes.list}>
                {
                    employees?.slice((activePage - 1) * pageSize, (activePage - 1) * pageSize + pageSize)
                        .map((item: IEmployee, index: number) => (
                            <EmployeeItem key={index} title={item.name} text={item.workTitle} avatar={item.imageUrl} />
                        ))
                }
                {total > pageSize && <Pagination onChange={handlePageChange} position={'center'} total={Math.ceil(total / pageSize)} page={activePage} size="sm" radius="md" />}
            </Stack>
            {
                total === 0 &&
                <Paper withBorder shadow="md" radius="md" p="sm" className={classes.paper}>
                    <Title align='center' order={4}>
                        No Employees Found
                    </Title>
                </Paper>
            }
        </ScrollArea>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
    },
    list: {
    },
    paper: {
        backgroundColor: colors.white
    }
}));

export default EmployeeList
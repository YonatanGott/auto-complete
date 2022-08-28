//React elements and hooks imports
import { FunctionComponent, useState } from 'react'

//Components imports
import { createStyles, Container, Stack } from '@mantine/core';
import SearchTitle from '_components/home/SearchTitle';
import SearchBar from '_components/home/SearchBar';
import EmployeeList from '_components/home/EmployeeList';

//Styling elements imports

//Typescript models & enums imports
import { IEmployee } from '_types/Employee';

const HomeView: FunctionComponent = () => {
    const { classes } = useStyles();
    const [items, setItems] = useState<IEmployee[]>([])
    const [showResults, setShowResults] = useState<boolean>(false);

    return (
        <Container p="xs">
            <Stack>
                <SearchTitle showResults={showResults} />
                <SearchBar setItems={setItems} setShowResults={setShowResults} showResults={showResults} />
                {
                    showResults && <EmployeeList employees={items} />
                }
            </Stack>
        </Container>
    )
}

const useStyles = createStyles((theme) => ({
}));

export default HomeView
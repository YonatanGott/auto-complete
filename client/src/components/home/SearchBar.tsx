//React elements and hooks imports
import { Fragment, FunctionComponent, useRef, useState } from 'react'
import { useSearchEmployeesMutation } from '_api/employees.api';

//Components imports
import { createStyles, Grid, TextInput, ScrollArea, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowDown } from '@tabler/icons';
import EmployeeItem from '_components/home/EmployeeItem';
import LoaderCard from '_components/ui/LoaderCard';

//Styling elements imports

//Typescript models & enums imports
import { IEmployee } from '_types/Employee';
import ErrorCard from '_components/ui/ErrorCard';
interface SearchProps {
    setItems: (value: IEmployee[]) => void;
    setShowResults: (value: boolean) => void;
    showResults: boolean;
}
const SearchBar: FunctionComponent<SearchProps> = ({ setItems, setShowResults, showResults }) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    const searchInput = useRef<HTMLInputElement>(null);

    const [active, setActive] = useState<number>(0);
    const [input, setInput] = useState<string>('');

    const [searchEmployees, { data: employees, isLoading, isSuccess, isError }] = useSearchEmployeesMutation()

    const searchLimit: number = 6

    const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.trim();
        setInput(event.currentTarget.value)
        setActive(0);
        await searchEmployees({ query: input, limit: searchLimit })
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        setShowResults(false)
        if (event.key === 'Enter') { // enter key
            handleSearch()
        }
        else if (event.key === 'ArrowUp' && active !== 0) { // up arrow
            setInput(employees[active - 1].name)
            setActive(active - 1);
        }
        else if (event.key === 'ArrowDown' && active - 1 !== employees.length) { // down arrow
            setInput(employees[active + 1].name)
            setActive(active + 1);
        }
    };
    const handleItemClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
        setActive(index)
        searchInput.current?.focus()
        searchEmployees({ query: employees[index].name, limit: searchLimit })
        setInput(employees[index].name)
        if (event.detail === 2) {
            handleSearch()
        }
    }
    const handleMouseOver = (index: number) => {
        setActive(index)
        searchInput.current?.focus()
    }
    const handleFocus = async () => {
        if (input.trim().length === 0) {
            await searchEmployees({ query: '', limit: searchLimit })
        }
    }
    const handleSearch = async () => {
        if (input.trim().length > 0) {
            const data = await searchEmployees({ query: input.trim(), limit: 0 }).unwrap()
            if (data) {
                setItems(data)
                setShowResults(true)
            }
        }
    }

    let content;
    if (isLoading) {
        content = <LoaderCard />
    } else if (isSuccess) {
        content = <ScrollArea type="auto" scrollbarSize={8} className={classes.list}>
            {
                employees?.map((item: IEmployee, index: number) => (
                    <EmployeeItem key={index} title={item.name} text={item.workTitle} avatar={item.imageUrl} active={index === active} query={input} onClick={(e) => handleItemClick(e, index)} onMouseOver={() => handleMouseOver(index)} />
                ))
            }
        </ScrollArea>
    } else if (isError) {
        content = <ErrorCard />
    }

    return (
        <Grid justify="center" align="center" gutter="xs">
            <Grid.Col span={8}>
                <TextInput
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={input}
                    icon={<IconSearch size={18} stroke={1.5} />}
                    radius="md"
                    size="md"
                    rightSection={
                        <ActionIcon size={32} radius="md" color={theme.primaryColor} variant="filled" onClick={handleSearch} >
                            {
                                !showResults ? <IconArrowRight size={18} stroke={1.5} /> : <IconArrowDown color='black' size={18} stroke={1.5} />
                            }
                        </ActionIcon>
                    }
                    placeholder="Search..."
                    rightSectionWidth={42}
                    autoComplete="off"
                    className={classes.search}
                    ref={searchInput}
                    onFocus={handleFocus}
                />
                {!showResults &&
                    <Fragment>{content}</Fragment>
                }
            </Grid.Col>
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    search: {
    },
    list: {
    }
}));

export default SearchBar
//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Header, Group, Title, Image } from '@mantine/core';
import logo from '_assets/logo.svg'

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports

const AppHeader: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Header height={60} p="xs" sx={{ backgroundColor: colors.black }}>
            <Group spacing="xs">
                <Image
                    src={logo}
                    alt="Auto"
                    sx={{ maxWidth: 36 }}
                />
                <Title order={1} sx={{ color: colors.white }} >AutoComplete</Title>
            </Group>
        </Header>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default AppHeader
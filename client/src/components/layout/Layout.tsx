//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, AppShell } from '@mantine/core';
import AppHeader from './AppHeader';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
    const { classes } = useStyles();
    return (
        <AppShell
            header={<AppHeader />}
            styles={{
                main: {
                    background: colors.background,
                },
            }}
            padding="md"
            className={classes.container}
        >
            {children}
        </AppShell>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
    }
}));

export default Layout
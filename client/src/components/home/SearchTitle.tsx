//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Grid, Title, Text } from '@mantine/core';

//Styling elements imports

//Typescript models & enums imports
interface TitleProps {
    showResults: boolean;
}
const SearchTitle: FunctionComponent<TitleProps> = ({ showResults }) => {
    const { classes } = useStyles();

    return (
        <Grid justify="center" align="center" gutter="xs" >
            <Grid.Col span={12}>
                {
                    showResults ?
                        <Title className={classes.title}>
                            <Text component="span" inherit className={classes.highlight}>
                                Search Results
                            </Text>
                        </Title>
                        :
                        <Title className={classes.title}>
                            Looking for an
                            <Text component="span" inherit className={classes.highlight}>
                                employee?
                            </Text>
                        </Title>
                }
            </Grid.Col>
            {
                <Grid.Col span={12}>
                    <Text size="md" className={classes.description}>
                        {
                            !showResults ? ' Click on the search bar to learn our suggestions' : ''
                        }
                    </Text>
                </Grid.Col>
            }
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    title: {
        fontWeight: 800,
        fontSize: 40,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.black,
        textAlign: 'center',
        textTransform: 'uppercase',
        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][7],
        marginLeft: '1rem',
    },
    description: {
        color: theme.colors.gray[8],
        textAlign: 'center',

        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },
}));

export default SearchTitle
//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Group, Avatar, Text, Paper, Highlight } from '@mantine/core';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
interface ItemProps {
    title: string;
    text?: string;
    avatar?: string;
    active?: boolean;
    query?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseOver?: () => void;
}
const EmployeeItem: FunctionComponent<ItemProps> = ({ title, text, avatar, active, query, onClick, onMouseOver }) => {
    const { classes, cx } = useStyles();

    return (
        <Paper withBorder shadow="md" radius="md" p="sm" className={cx(classes.item, { [classes.active]: active })} onClick={onClick} onMouseOver={onMouseOver} >
            <Group spacing="sm">
                {
                    avatar && <Avatar size={40} src={avatar} radius="md" />
                }
                <div>
                    <Text size="md" weight={500}>
                        <Highlight highlightColor="teal" highlight={query && query.trim().length > 1 ? query : ''}>
                            {title}
                        </Highlight>
                    </Text>
                    {
                        text &&
                        <Text size="sm" color={colors.primaryStrong}>
                            <Highlight highlightColor="teal" highlight={query && query.trim().length > 1 ? query : ''}>
                                {text}
                            </Highlight>
                        </Text>
                    }
                </div>
            </Group>
        </Paper>
    )
}

const useStyles = createStyles((theme) => ({
    item: {
        backgroundColor: colors.white
    },
    active: {
        backgroundColor: colors.lightGrey,
        boxShadow: `${theme.shadows.md} !important`,
    }
}));

export default EmployeeItem
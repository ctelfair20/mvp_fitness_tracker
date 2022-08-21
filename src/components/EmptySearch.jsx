import { Box } from '@mantine/core';

const EmptySearch = ({ searchedWorkouts, searchClick }) => {
  if ((searchedWorkouts.length === 0) && searchClick) {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        There are no recorded exercises by that name.
      </Box>
    )
  }
}

export default EmptySearch;
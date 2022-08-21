import { Slider } from '@mantine/core';

import './Hydrate.css';

const marks = [
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
];

function Hydrate() {
  return (
    <div className="Hydrate-bar-container">
      <h4>Stay Hydrated!</h4>
      <Slider
        className="Hydrate-bar"
        defaultValue={0}
        marks={marks}
        labelTransition="fade"
        size={10}
        styles={(theme) => ({
          track: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
          },
          mark: {
            width: 8,
            height: 8,
            borderRadius: 6,
            transform: 'translateX(-3px) translateY(-2px)',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
          },
          markFilled: {
            borderColor: theme.colors.blue[6],
          },
          markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 5 },
          thumb: {
            height: 20,
            width: 20,
            backgroundColor: theme.white,
            borderWidth: 1,
            boxShadow: theme.shadows.sm,
          },
        })}
      />
    </div>
  );
}

export default Hydrate;
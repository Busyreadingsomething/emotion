import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '../components/accordion/Accordion';
import { AccordionSummary } from '../components/accordion/AccordionSummary';
import { AccordionDetails } from '../components/accordion/AccordionDetails';

type Story = StoryObj<typeof Accordion>;

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;

export const DefaultAccordion: Story = {
  render: () => {
    return (
      <Accordion>
        <AccordionSummary
          counter={19}
        >
          Demo Accordion
        </AccordionSummary>
        <AccordionDetails>
          [2:286] GOD never burdens a soul beyond its means: to its credit is
          what it earns, and against it is what it commits. &quot;Our Lord, do not
          condemn us if we forget or make mistakes. Our Lord, and protect us
          from blaspheming against You, like those before us have done. Our
          Lord, protect us from sinning until it becomes too late for us to 
          repent. Pardon us and forgive us. You are our Lord and Master.
          Grant us victory over the disbelieving people.&quot;
        </AccordionDetails>
      </Accordion>
    )
  },
  args: {}
};

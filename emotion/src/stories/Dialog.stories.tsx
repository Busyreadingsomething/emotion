import { Meta, StoryObj } from '@storybook/react';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '../components/dialog/Dialog';
import Button from '../components/button/Button';
import { ButtonSizes, ButtonTypes } from '../components/button/styles';
import { useState } from 'react';

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: 'Example/Dialog',
  component: Dialog,
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

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button
          variantType={ButtonTypes.SOLID}
          size={ButtonSizes.MEDIUM}
          onClick={() => setIsOpen(true)}
          disabled={false}
        >
          Open Dialog
        </Button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <DialogTitle>
            Are you sure?
          </DialogTitle>
          <DialogContent>
            Do you want to delete all of your saved bookmarks?
          </DialogContent>
          <DialogActions>
            <Button
              variantType={ButtonTypes.OUTLINE}
              size={ButtonSizes.SMALL}
              disabled={false}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variantType={ButtonTypes.SOLID}
              size={ButtonSizes.SMALL}
              disabled={false}
              onClick={() => setIsOpen(false)}
            >
              Delete all
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export const Demo: Story = {
  render: () => <DialogDemo />,
  args: {}
};
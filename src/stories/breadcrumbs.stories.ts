import type { Meta, StoryObj } from '@storybook/vue3';

import MyHeader from './Breadcrumbs.vue';

const meta: Meta<typeof MyHeader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Version 1/Components/Breadcrumbs',
  component: MyHeader,
  render: (args: any) => ({
    components: { MyHeader },
    setup() {
      return { args };
    },
    template: '<my-header :user="args.user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyHeader>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Filiale 1230',
    },
  },
};

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};

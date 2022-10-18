import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'hello world',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  children: 'Texto está claro',
  colorDark: false,
};

import { Basic } from '.';
import { mockBasic } from './mock';

export default {
  title: 'Templates/Basic',
  component: Basic,
  args: mockBasic,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Basic {...args} />
    </div>
  );
};

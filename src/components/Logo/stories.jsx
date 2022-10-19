import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    text: 'Logo',
    srcImg: '',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};

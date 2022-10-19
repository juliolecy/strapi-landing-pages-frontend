export default {
  title: 'Jajau',
  component: Jajau,
  args: {
    children: 'Jajau',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Jajau {...args} />
    </div>
  );
};

import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi nam cumque perspiciatis ad officia. Quas, consectetur quia exercitationem ipsam consequatur sint laboriosam sed quisquam numquam praesentium soluta, itaque maiores!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

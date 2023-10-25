import { TextComponent } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'TextComponent',
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

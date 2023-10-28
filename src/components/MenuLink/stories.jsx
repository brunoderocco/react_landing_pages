import { MenuLink } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};

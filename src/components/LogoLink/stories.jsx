import { LogoLink } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    children: 'LogoLink',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

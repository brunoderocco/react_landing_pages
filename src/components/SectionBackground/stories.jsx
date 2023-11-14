import { SectionBackground } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: 'SectionBackground',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

import { Heading } from '.';
import { theme } from '../../styles/theme';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;

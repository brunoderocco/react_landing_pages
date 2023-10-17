import { Heading } from '.';
import { theme } from '../../styles/theme';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  darkColor: true,
};

Dark.args = {
  children: 'O texto está claro',
  darkColor: false,
};

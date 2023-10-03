import { Heading } from '.';
import { theme } from '../../styles/theme';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  light: true,
  backgrounds: {
    default: 'dark',
  },
};

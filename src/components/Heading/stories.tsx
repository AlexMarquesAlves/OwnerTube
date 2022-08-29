import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string },
) => <Heading {...args} />;

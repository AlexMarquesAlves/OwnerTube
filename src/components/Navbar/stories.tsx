import { Navbar } from ".";

export default {
  title: "Navbar",
  component: Navbar,
  args: {
    children: "Children padrão",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string }
) => <Navbar {...args} />;

import { Feed } from ".";

export default {
  title: "Feed",
  component: Feed,
  args: {
    children: "Children padrão",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string }
) => <Feed {...args} />;

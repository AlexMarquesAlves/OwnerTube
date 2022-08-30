import { SearchFeed } from ".";

export default {
  title: "SearchFeed",
  component: SearchFeed,
  args: {
    children: "Children padrão",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string }
) => <SearchFeed {...args} />;

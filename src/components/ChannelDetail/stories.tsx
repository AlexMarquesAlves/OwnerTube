import { ChannelDetail } from ".";

export default {
  title: "ChannelDetail",
  component: ChannelDetail,
  args: {
    children: "Children padrão",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string }
) => <ChannelDetail {...args} />;

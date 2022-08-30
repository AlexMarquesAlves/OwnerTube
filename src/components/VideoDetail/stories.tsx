import { VideoDetail } from ".";

export default {
  title: "VideoDetail",
  component: VideoDetail,
  args: {
    children: "Children padrão",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & { children: string }
) => <VideoDetail {...args} />;

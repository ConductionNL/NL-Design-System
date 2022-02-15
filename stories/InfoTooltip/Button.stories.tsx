import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoTooltip } from "../../components/InfoTooltip/InfoTooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/InfoTooltip",
  component: InfoTooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InfoTooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoTooltip> = (args) => <InfoTooltip {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "InfoTooltip",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "InfoTooltip",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "InfoTooltip",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "InfoTooltip",
};

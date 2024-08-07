import type { Meta, StoryObj } from "@storybook/react";
import { Box as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: <></> } };

import { Meta, Story } from '@storybook/angular';
import TestButtonComponent from '../components/test-button.component';

export default {
  title: 'Test Button',
  component: TestButtonComponent,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TestButtonComponent> = (args: TestButtonComponent) => ({
  component: TestButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'gold',
  label: 'Im primary button!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'white',
  label: 'Im secondary button!',
  primary: false,
};

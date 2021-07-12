import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Row } from '../models/row.model';
import { DataRowComponent } from './data-row.component';

export default {
  component: DataRowComponent,
  title: 'test',
  decorators: [
    moduleMetadata({
      declarations: [DataRowComponent],
      imports: [MatTableModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<Row> = (args: Row) => ({
  props: args,
});

export const First = Template.bind({});
First.args = {
  row: {
    id: 1,
    data: 'Name 1',
  },
};

export const Second = Template.bind({});
Second.args = {
  row: {
    id: 2,
    data: 'Name 2',
  },
};

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DataRowComponent } from './data-row.component';
import { DataTableComponent } from './data-table.component';

export default {
  component: DataTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [DataTableComponent, DataRowComponent],
      imports: [MatTableModule, MatSortModule, BrowserAnimationsModule],
    }),
  ],
  title: 'simple table',
} as Meta;

const Template: Story<DataTableComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  rows: [
    { id: 1, data: 'Name 1' },
    { id: 2, data: 'Name 2' },
    { id: 3, data: 'Name 3' },
    { id: 4, data: 'Name 4' },
    { id: 5, data: 'Name 5' },
  ],
};

export const AlfrescoExample = Template.bind({});
AlfrescoExample.args = {
  rows: [
    { id: 1, data: 'Name 1' },
    { id: 2, data: 'Name 2' },
  ],
};

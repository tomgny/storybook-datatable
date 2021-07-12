import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DataRowComponent } from './data-row.component';
import { DataTableComponent } from './data-table.component';
import { DynamicDataTableComponent } from './dynamic-data-table.component';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';

export default {
  component: DynamicDataTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [DynamicDataTableComponent, DataRowComponent],
      imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  title: 'Data table component',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onTableClick: action('onTableClick'),
};

const Template: Story<DynamicDataTableComponent> = (args) => ({
  props: {
    ...args,
    onTableClick: actionsData.onTableClick,
  },
});

export const FiveColumns = Template.bind({});
FiveColumns.args = {
  data: [
    {
      number: 1,
      name: 'Name 1',
      date: new Date().toLocaleDateString(),
      test: 'test1',
      random: Math.trunc(Math.random() * 10) + 1,
    },
    {
      number: 2,
      name: 'Name 2',
      date: new Date().toLocaleDateString(),
      test: 'test2',
      random: Math.trunc(Math.random() * 20) + 1,
    },
    {
      number: 3,
      name: 'Name 3',
      date: new Date().toLocaleDateString(),
      test: 'test3',
      random: Math.trunc(Math.random() * 30) + 1,
    },
    {
      number: 4,
      name: 'Name 4',
      date: new Date().toLocaleDateString(),
      test: 'test4',
      random: Math.trunc(Math.random() * 40) + 1,
    },
    {
      number: 5,
      name: 'Name 5',
      date: new Date().toLocaleDateString(),
      test: 'test5',
      random: Math.trunc(Math.random() * 50) + 1,
    },
    {
      number: 6,
      name: 'Name 6',
      date: new Date().toLocaleDateString(),
      test: 'test6',
      random: Math.trunc(Math.random() * 60) + 1,
    },
  ],
};

export const AlfrescoExample = Template.bind({});
AlfrescoExample.args = {
  data: [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
  ],
};

export const OneAdditionalParam = Template.bind({});
OneAdditionalParam.args = {
  data: [
    { id: 1, data: 'Name 1' },
    { id: 2, data: 'Name 2' },
    { id: 3, data: 'Name 3' },
    { id: 4, data: 'Name 4', test: 'Test' },
    { id: 5, data: 'Name 5' },
  ],
};

export const OneRow = Template.bind({});
OneRow.args = {
  data: [{ id: 10, data: 'Name 1' }],
};

export const OneColumn = Template.bind({});
OneColumn.args = {
  data: [{ id: 1 }, { id: 2 }],
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
};

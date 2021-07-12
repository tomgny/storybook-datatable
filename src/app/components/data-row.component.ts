import { Component, Input } from '@angular/core';
import { Row } from 'src/app/models/row.model';

@Component({
  selector: 'app-data-row',
  template: `
    <tr mat-row style="background-color: aliceblue;">
      {{
        this.row.id
      }}
      |
      {{
        this.row.data
      }}
    </tr>
  `,
  styleUrls: ['./data-row.css'],
})
export class DataRowComponent {
  @Input() row: Row;
}

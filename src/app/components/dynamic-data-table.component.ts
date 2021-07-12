import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-datatable',
  template: `
    <div class="mat-elevation-z8">
      <table
        #table
        [dataSource]="dataSource"
        mat-table
        class="full-width-table"
        matSort
        aria-label="Elements"
        (click)="onClick($event)"
        *ngIf="data.length > 0; else empty"
      >
        <ng-container
          [matColumnDef]="column"
          *ngFor="let column of displayedColumns"
        >
          <th mat-header-cell *matHeaderCellDef mat-sort-header>
            {{ column }}
          </th>
          <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
      <ng-template #empty>
        <div class="error">
          <span class="error-data">No data ☹</span>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./dynamic-data-table.css'],
})
export class DynamicDataTableComponent
  implements AfterViewInit, AfterContentInit {
  displayedColumns: string[] = [];

  @ViewChild(MatSort) sort: MatSort;

  @Input() data: any;
  dataSource = new MatTableDataSource();

  @Output()
  onTableClick = new EventEmitter<Event>();

  ngAfterContentInit() {
    let maxElems: number = 0;
    let columnsArray: string[] = [];

    for (const elem of this.data) {
      if (Object.getOwnPropertyNames(elem).length > maxElems) {
        maxElems = Object.getOwnPropertyNames(elem).length;
        columnsArray = Object.getOwnPropertyNames(elem);
      }
    }

    /*
    columnsArray.forEach((col, i) => {
      columnsArray[i] =
        columnsArray[i].charAt(0).toUpperCase() + columnsArray[i].substr(1);
    });
    */

    this.displayedColumns = columnsArray;
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClick($event) {
    this.onTableClick.emit($event);
  }
}

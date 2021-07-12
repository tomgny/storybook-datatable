import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Row } from '../models/row.model';

@Component({
  selector: 'app-datatable',
  template: `
    <div class="mat-elevation-z8">
      <table
        [dataSource]="dataSource"
        mat-table
        class="full-width-table"
        matSort
        aria-label="Elements"
      >
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">{{ row.id }}</td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let row">{{ row.data }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styleUrls: ['./data-table.css'],
})
export class DataTableComponent implements AfterViewInit, AfterContentInit {
  displayedColumns: string[] = ['id', 'name'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() rows: Row[];
  dataSource = new MatTableDataSource();

  ngAfterContentInit() {
    this.dataSource = new MatTableDataSource(this.rows);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

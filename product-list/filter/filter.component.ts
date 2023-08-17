import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  selectedFilterRadioButton: string = 'all';

  @Output() selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChange() {
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }



}

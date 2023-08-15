import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchedText: string = 'Men\'s Wear';

  onSearchText(event: any) {
    this.searchedText = event.target.value;
  }
}

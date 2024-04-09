import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  
  searchTerm: string = "";
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.search();
      });
  }

  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}

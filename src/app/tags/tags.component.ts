import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { PerfumeService } from '../services/perfume/perfume.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Input()
  perfumePageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];
  constructor(private perfumeService: PerfumeService) {}

  ngOnInit(): void {
    if (!this.perfumePageTags) this.tags = this.perfumeService.getAllTags();
  }
}

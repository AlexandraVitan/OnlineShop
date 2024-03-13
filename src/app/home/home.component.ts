import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfume } from '../shared/models/perfume';
import { PerfumeService } from '../services/perfume/perfume.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  perfumes: Perfume[] = [];
  constructor(private perfumeService: PerfumeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.perfumes = this.perfumeService.getAllPerfumesBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.perfumes = this.perfumeService.getAllPerfumesByTag(params['tag']);
      else
        this.perfumes = this.perfumeService.getAll();
    })
  }

}
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

  foods: Perfume[] = [];
  constructor(private foodService: PerfumeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllPerfumesBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllPerfumesByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
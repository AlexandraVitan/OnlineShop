import { Component, OnInit } from '@angular/core';
import { Perfume } from '../shared/models/perfume';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfumeService } from '../services/perfume/perfume.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-perfume-page',
  templateUrl: './perfume-page.component.html',
  styleUrl: './perfume-page.component.scss',
})
export class PerfumePageComponent implements OnInit {
  perfume!: Perfume;
  constructor(
    private activatedRoute: ActivatedRoute,
    private perfumeService: PerfumeService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.perfume = perfumeService.getPerfumeById(params['id']);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.perfume);
    this.router.navigateByUrl('/cart-page');
  }
}

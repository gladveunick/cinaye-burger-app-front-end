import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from '../../services/burger.service';

@Component({
  selector: 'app-details-burger',
  templateUrl: './details-burger.component.html',
  styleUrls: ['./details-burger.component.css']
})
export class DetailsBurgerComponent {

  burger: any;
  showOrderForm = false;

  constructor(private route: ActivatedRoute, private burgerService: BurgerService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.burgerService.getBurger(id).subscribe(data => {
      this.burger = data;
    });
  }

  afficherFormulaire() {
    this.showOrderForm = true;
    
  }

  commander() {
    this.router.navigate(['/commander', this.burger.id]);
  }

}

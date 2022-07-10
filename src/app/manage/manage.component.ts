import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  gotomyListing(){
    this.router.navigate(['/post-a-listing']); 
}
  gotomyRental(){
    this.router.navigate(['/price-my-rental']); 
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

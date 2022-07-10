import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpme',
  templateUrl: './helpme.component.html',
  styleUrls: ['./helpme.component.css']
})
export class HelpmeComponent implements OnInit {
  gotomyAdvertise(){
    this.router.navigate(['/advertise']); 
}
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

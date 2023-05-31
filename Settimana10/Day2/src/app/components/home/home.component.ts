import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  goOnComponent1(){
    this.router.navigate(['/Post_attivi'])
  }
  goOnComponent2(){
    this.router.navigate(['/Post_non_attivi'])
  }

  ngOnInit(): void {
  }
}

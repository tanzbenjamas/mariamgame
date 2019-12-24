import { Component, OnInit } from '@angular/core';
import { MariamService } from '../service/mariam.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mariamgame1',
  templateUrl: './mariamgame1.component.html',
  styleUrls: ['./mariamgame1.component.css']
})
export class Mariamgame1Component implements OnInit {
  chioce: Array<any>;

  views:any = {
   chioce : null, 
  }
  constructor(private route: ActivatedRoute, private customerService: MariamService, private httpClient: HttpClient, private router: Router) { }
  
  ngOnInit() {

  }
  save(){
    // this.httpClient.post('http://localhost:8080/choice/')

  }

}

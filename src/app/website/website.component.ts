import { DriveService } from './../drive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  allData: Object;

  constructor(private DriveService:DriveService) { }

  ngOnInit(): void {
    this.showUser();
  }

  showUser(){
    this.DriveService.showData().subscribe((response)=>{
      this.allData=response;
    });
}
}

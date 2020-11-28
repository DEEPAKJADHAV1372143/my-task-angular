import { DriveService } from './../drive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  allData: Object;

  constructor(private driveService:DriveService) { }

  ngOnInit(): void {
    this.showUser();
  }
  addUser(obj){
this.driveService.addData(obj).subscribe((response)=>{
this.showUser();
});
  }

  showUser(){
this.driveService.showData().subscribe((response)=>{
  this.allData=response;
});
  }

  delUser(my){
    this.driveService.delData(my).subscribe(()=>{
      this.showUser();
    });

  }

}

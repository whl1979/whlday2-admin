import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CampusService } from '../campus.service'

@Component({
  selector: 'app-campus-edit',
  templateUrl: './campus-edit.component.html',
  styleUrls: ['./campus-edit.component.scss']
})
export class CampusEditComponent implements OnInit,OnDestroy {
  campusId:string="";
  campus:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getCampusSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private campusServ:CampusService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.campusServ.campuses.push(this.campus)
    this.location.back();
  }
  ngOnInit() {
    this.getCampusSubscribe = this.route.params.subscribe(params=>{
      this.getCampus(params['sid']).then(campus=>{
      console.log(campus)
      this.campusId = campus.id;
      this.campus = campus
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getCampusSubscribe.unsubscribe();
  }

  getCampus(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let campus = {name:""}
        this.isNew = true;
        resolve(campus)
      }
      let campus = this.campusServ.campuses.find(item=>item.id == id)
      if(campus){
        resolve(campus)
      }else{
        reject("campus not found")
      }
    })
    return p
}

}

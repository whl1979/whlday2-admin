import { Injectable } from "@angular/core";

@Injectable()
export class CampusService{
    isLogined:boolean = false;
    campuses: Array < any > = [
    {"randomindex":1,
    "index":10,
    "campusId":1,
    "name":"80中",
      "address":"中山区",
      "avgtotal":605.5,
      "rate":"56%"},
    {"randomindex":1,
    "index":16,
    "campusId":2,
    "name":"育文中学",
      "address":"甘井子",
      "avgtotal":588,
      "rate":"46%"},
    {"randomindex":1,
    "index":1,
    "campusId":3,
    "name":"理工附中",
      "address":"沙河口区",
      "avgtotal":615,
      "rate":"82%"}
  ];

    constructor(){

    }

    getCampuses(){
        return this.campuses;
    }

}


import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {CampusService} from "../campus.service";
@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {
  searchText: string = "default";
  selectCampus:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  campuses:Array<any>=[];
  deleteLast() {
    this.campuses.pop();
  }
  search(type="name",limit?:number){
    this.searchResult = this.campuses.filter(item=>{
      let result = String(item[type]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
    
    if(limit){
      this.searchResult.splice(0,limit)
    }
  }
  getCampusClick(ev){
    this.selectCampus = ev
    console.log(ev);
  }
  saveNewCampus() {
    this.campuses.push({
    "randomindex":1,
    "index":99,
    "campusId":99,
    "name":"某中学",
      "address":"沙河口区",
      "avgtotal":577,
      "rate":"30%"
    });
  }
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.campuses.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.campuses.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    for (let entry of this.campuses){
      entry.randomindex = Math.random()* this.campuses.length;
    }
    this.sortByAsccending("randomindex")
  }
  constructor(meta: Meta, title: Title, private campusServ:CampusService) {
    this.campuses = this.campusServ.getCampuses()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  testTempCampuses(){
    console.log(this.campuses.length);
    let tempCampuses:Array<any> = []
    this.campuses.forEach(item=>{
      tempCampuses.push(item)
    })
    tempCampuses.pop()
    tempCampuses.pop()
    tempCampuses.pop()
    tempCampuses.pop()
    tempCampuses.pop()
    console.log(tempCampuses.length);
  }

  ngOnInit() {}
}

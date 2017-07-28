import { Injectable } from "@angular/core";

@Injectable()
export class StudentService{
    isLogined:boolean = false;
    users: Array < any > = [{
      'index': 1,
     'name':'chenlu',
     'sex':'M',
     'project':'chenlu28/chenlu-exam',
     'desc':'insurace,保险',
     'exam1': 55, // 10 10 5 5 20 5
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 2,
     'name':'f58xxy',
     'sex':'F',
     'project':'f58xxy/ng-admin',
     decs: '生命保险系统',
     'exam1': 85, // 10 10 5 20 20 20 原始数据加分：修改了函数变量命名
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 19,
     'name':'文化利',
     'sex':'M',
     'project':'whl1979/wenhuali-admin',
     desc:'大连市中学排名',
     'exam1': 80, // 10 10 5 20 20 15
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 3,
     'name':'kalezhang',
     'sex':'M',
     'project':'kalezhang/ng-admin',
     'exam1': 75, // 5 10 5 15 20 20 未修改README.md
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 4,
     'name':'JansenGao',
     'sex':'M',
     'project':'JansenGao/angular',
     'exam1': 50, // 5 5 5 15 15 15 未修改readme，版本提交非项目根目录
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 5,
     'name':'ChengJiqiang',
     'sex':'M',
     'project':'ChengJiqiang/ChengJiQiang-ng-app',
     desc:'汽车品牌一览',
     'exam1': 75, // 10 10 5 15 15 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 6,
     'name':'Serenashan',
     'sex':'M',
     'project':'Serenashan/serena-admin',
     desc: '淘淘杂货铺',
     'exam1': 75, // 10 10 10 15 20 10
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 7,
     'name':'gudeyi',
     'sex':'M',
     'project':'gudeyi/admin',
     'exam1': 40, // 5 10 5 5 10 5 未修改readme
     'exam2': 0,
     'exam3': 0
    }
    ,
    {
     'index': 8,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     desc: '狼人杀',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 9,
     'name':'郭兆青',
     'desc':'游戏管理系统',
     'sex':'M',
     'project':'PotStove/GuoZhaoqing-ng-app',
     'exam1': 75, // 10 10 5 15 20 15
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 10,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'index': 11,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    }
  ];

    constructor(){

    }

    getUsers(){
        return this.users;
    }

}


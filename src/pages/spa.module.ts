// 当打包部署静态包时，需要加载本Module

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AboutModule } from './about/about.module';
import { StudentModule } from './student/student.module';
import { CampusModule } from './campus/campus.module';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    AboutModule,
    StudentModule,
    CampusModule,
    RxjsModule
  ],
})
export class SPAModule { }

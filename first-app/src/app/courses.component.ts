import { Component } from '@angular/core';
import { CoursesServices } from './courses.service';

@Component({
    selector: 'courses',
    template: `
               <h2>{{ title }}</h2>
               <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
               </ul>`
})

export class CourseComponent {
    title = 'List Of Courses';
    courses;

    // constructor (){
    //     let service = new CoursesServices();
    //     this.courses = service.getCourses();
    // }

    constructor (service: CoursesServices){
        this.courses = service.getCourses();
    }
}
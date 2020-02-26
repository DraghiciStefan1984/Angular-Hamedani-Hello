import { Component } from '@angular/core';
import { CourseService } from './courses.service';


@Component
({
    selector: 'courses',
    //template: '<h2>{{title}}</h2>'
    template: 
    `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        <ul>
        <img [src]="imgUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button class="btn btn-primary" (click)="onSave($event)">Push Me!</button>
        <input (keyUp.enter)="onKeyUp()"/>
        <input (keyUp.enter)="onKeyUpWithVar()"/>
        `
})
export class CoursesComponent
{
    title='List of courses.';
    courses;
    imgUrl='https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg';
    colSpan=2;

    constructor(service:CourseService)
    {
        this.courses=service.getCourses();
    }

    onSave($event)
    {
        $event.stopPrpagation;
        console.log('Button was clicked');
    }

    onKeyUp()
    {
        console.log('Enter was pressed');
    }

    onKeyUpWithVar(email)
    {
        console.log(email);
    }
}
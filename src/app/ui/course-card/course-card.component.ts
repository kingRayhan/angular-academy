import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/core/Course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  constructor() {}

  @Input() course: Course;

  ngOnInit(): void {}
}

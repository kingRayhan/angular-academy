import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/Course';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public courses: any[] = [];
  // public courses: Course[] = [];

  public getCourses(): void {
    this.courses = Array.from(Array(10).keys());
  }

  ngOnInit(): void {
    this.getCourses();
  }
}

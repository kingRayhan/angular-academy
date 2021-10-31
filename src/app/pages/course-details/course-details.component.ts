import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/Course';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public course: Course;

  private getCourse(id: string) {
    this.http.get(`${environment.api}courses/${id}`).subscribe((data: any) => {
      this.course = data as Course;
    });
  }

  public goToStream(): void {
    this.router.navigate(['/courses', this.course.id, 'stream']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCourse(params.id);
    });
  }
}

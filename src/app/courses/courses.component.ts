import { Component } from '@angular/core';
import { FormsModule } from'@angular/forms';  // Importation de FormsModule@Component({


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName = "Angular Avancé";
  isDisabled = true;
  courseDescription = '';

  startCourse(){
    console.log("Début du cours :", this.courseName);
    this.isDisabled = false;
  }

}


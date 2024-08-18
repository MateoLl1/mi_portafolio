import { Component } from '@angular/core';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private projectService:ProjectService) {

  }

  get cargarProyectos(){
    return this.projectService.miListProjects
  }

}

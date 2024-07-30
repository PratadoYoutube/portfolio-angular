import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.component';


//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog'

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
#dialog = inject(MatDialog)

public arrayProjects = signal<IProjects[]>([
{
  src: '../../../../../assets/Projeto-Angular-Blog.png',
  alt: '',
  title: '',
  width: '100px',
  height: '51px',
  description: '',
  links: [
    {
      name: '',
      href: '',
    },
  ],
},
]);

public openDialog(data: IProjects){
  this.#dialog.open(DialogProjectsComponent, {
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
}
}

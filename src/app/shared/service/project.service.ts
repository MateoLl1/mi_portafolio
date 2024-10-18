import { Injectable } from '@angular/core';
import { MiProyect } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  miListProjects: MiProyect[] = [
    {
      title: 'Copci movil app',
      description: 'Lorem aliqua aliquip exercitation velit cupidatat elit officia proident nisi magna eu culpa nulla. Deserunt magna duis consequat ex nostrud officia esse. Ea elit in dolor sunt cillum ipsum nisi dolore. Laboris adipisicing reprehenderit ad non proident magna ullamco. Veniam ad sunt commodo velit anim pariatur pariatur in ad voluptate.',
      image: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=',
      url: 'https://github.com/MateoLl1/copci.git'
    },
    {
      title: 'Copci movil app 2',
      description: 'Lorem aliqua aliquip exercitation velit cupidatat elit officia proident nisi magna eu culpa nulla. Deserunt magna duis consequat ex nostrud officia esse. Ea elit in dolor sunt cillum ipsum nisi dolore. Laboris adipisicing reprehenderit ad non proident magna ullamco. Veniam ad sunt commodo velit anim pariatur pariatur in ad voluptate.',
      image: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=',
      url: 'https://github.com/MateoLl1/copci.git'
    },
    {
      title: 'Copci movil app 3',
      description: 'Lorem aliqua aliquip exercitation velit cupidatat elit officia proident nisi magna eu culpa nulla. Deserunt magna duis consequat ex nostrud officia esse. Ea elit in dolor sunt cillum ipsum nisi dolore. Laboris adipisicing reprehenderit ad non proident magna ullamco. Veniam ad sunt commodo velit anim pariatur pariatur in ad voluptate.',
      image: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=',
    }
  ]


}

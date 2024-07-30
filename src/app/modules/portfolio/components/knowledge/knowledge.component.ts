import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<IKnowledge[]>([
  {
    src: '../../../../../assets/html.svg',
    alt: 'ícone de conhecimento em HTML',
  },
  {
    src: '../../../../../assets/css.svg',
    alt: 'ícone de conhecimento em CSS',
  },
  {
    src: '../../../../../assets/Js.svg',
    alt: 'ícone de conhecimento em JavaScript',
  },
  {
    src: '../../../../../assets/angular.svg',
    alt: 'ícone de conhecimento em Angular',
  },
  {
    src: '../../../../../assets/NodeJs.svg',
    alt: 'ícone de conhecimento em Node',
  },
])
}

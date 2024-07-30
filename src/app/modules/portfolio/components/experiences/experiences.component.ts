import { Component, signal } from '@angular/core';

// Inteface
import { IExperiences } from '../../interface/IExperiences.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
public arrayExperiences = signal<IExperiences[]>([
  {
    summary: {
      strong:'Desenvolvedor Junior | Analista de Sistemas',
      p:'Garra Distribuição/Melhor Atacadista | Jan 2023 - Feb 2024'
    },
    text: ' A Garra Distribuição é uma empresa especializada na distribuição de alimentos e embalagens, destacando-se como uma das maiores do segmento em Brasília. A empresa utiliza um sistema de vendas operado por uma equipe de televendas. Como Desenvolvedor Front-end, contribuí para a criação desse sistema de vendas. Minhas responsabilidades incluíram oferecer suporte aos usuários, desenvolver um vídeo explicativo sobre a utilização do sistema, realizar palestras acerca da nova aplicação, e fornecer consultoria para os funcionários interessados em aprender sobre a plataforma. Além disso, atuei na plataforma online de chamados da Garra e do Melhor Atacadista, responsabilizando-me pelos testes e suporte do sistema  web. Demonstrei proatividade ao atualizar a interface visual dos usuários, tornando-a mais dinâmica e intuitiva. Utilizei JavaScript, complementado por meus conhecimentos em HTML e CSS, nos projetos desenvolvidos.  Entre meus principais desafios como Suporte de T.I., destaco a supervisão, manutenção e montagem de servidores, com  habilidade para trabalhar tanto em ambientes Linux quanto Windows. Também ofereci suporte aos usuários, montei máquinas e cuidei da manutenção de Hardware.  Participei ativamente do projeto Buscapreços, uma colaboração com o Melhor Atacadista, empresa sócio majoritária da  Garra. Minha principal responsabilidade foi o desenvolvimento da interface visual, utilizando HTML e CSS para criar uma  experiência de usuário atraente e funcional. Embora a documentação do projeto tenha sido elaborada em Pascal, minha contribuição focou especificamente na área de Front-end, garantindo que a interface fosse intuitiva e de fácil navegação para os usuários. Além disso, prestei serviços de suporte ao usuário, montagem de máquinas e cuidados gerais com Hardware',
  },
]);
}

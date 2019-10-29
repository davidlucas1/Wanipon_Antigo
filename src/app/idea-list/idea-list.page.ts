import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/service/list-animes.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {
 
  private ideas: Observable<Idea[]>;
 
  constructor(private ideaService: IdeaService) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }
}
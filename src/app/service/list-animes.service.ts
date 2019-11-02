import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireStorageReference } from '@angular/fire/storage';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';



 
export interface Idea {
  id?: string,
  ano: number,
  assistir: string,
  data: string,
  episodios: number,
  genero: Array<string>,
  estudio: string,
  indicaçao: string,
  nome: string,
  NivelDeIndicacao: string,
  origem: string,
  screenshots:string,
  sinopse: string,
  sinonimo: string,
  status: string,
  áudio: string,
}
 
@Injectable({
  providedIn: 'root'
})
export class IdeaService {


  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;
 
  constructor(
    private afs: AngularFirestore,
    
    ) {
    this.ideaCollection = this.afs.collection<Idea>('lista');

    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }
 
  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
 
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }
 
  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }
 
  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.nome, notes: idea.sinonimo });
  }
 
  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }

  getAnime(){

  }
  
}
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { PostInterface, PostType } from '../interfaces/interface.post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public postList : PostInterface[];

  constructor(
    public loadingController : LoadingController, 
    private api : ApiService
  ) {}

  stringifyDate(date : string) {
    const values = date.split('-');
    let mes = "Janeiro";
    switch(values[1]) {
      case '02':
        mes = "Fevereiro";
        break;
      case '03':
        mes = "Março";
        break;
      case '04':
        mes = "Abril";
        break;
      case '05':
        mes = "Maio";
        break;
      case '06':
        mes = "Junho";
        break;
      case '07':
        mes = "Julho";
        break;
      case '08':
        mes = "Agosto";
        break;
      case '09':
        mes = "Setembro";
        break;
      case '10':
        mes = "Outubro";
        break;
      case '11':
        mes = "Novembro";
        break;
      case '12':
        mes = "Dezembro";
        break;
    }
    return `${parseInt(values[2])} de ${mes.toLowerCase()} de ${values[0]}`
  }

  presentLoading() {
    return new Promise<void>(resolve => {
      this.loadingController.create({
        message : "Carregando avisos..."
      }).then(loading => {
        loading.present();
        resolve();
      })
    })
  }

  dismissLoading() {
    this.loadingController.dismiss();
  }

  loadPosts() {
    this.presentLoading();
    this.api.getPosts().then(requestedPosts => {
      this.postList = requestedPosts;
      this.dismissLoading();
    });
  }

  ngOnInit() {
    this.loadPosts();
  }

  getPostType(post : PostInterface) {
    switch(post.type) {
      case PostType.COMPLIMENT:
        return "Elogio";
      case PostType.CRITICISM:
        return "Crítica";
      case PostType.SUGGESTION:
        return "Sugestão";
    }
  }

}

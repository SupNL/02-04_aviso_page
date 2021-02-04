import { Injectable } from '@angular/core';
import { PostInterface, PostType } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  // função para simular a requisição
  // aqui vai retornar apenas um array simples
  getPosts() {
    const posts : PostInterface[] = [
      {
        message : "O IFSP tem feito um ótimo trabalho durante esses meses difíceis! Bom trabalho à todos!",
        images : [
          "https://i.imgur.com/A2JRSZc.png"
        ],
        type : PostType.COMPLIMENT,
        date : "2021-02-02"
      },
      {
        message : "A refeição no restaurante SeiláDeQual tem sido muito fraca esses últimos dias, refeição está muito ruim, deveriam voltar a cumprir a qualidade que serviam, desanimador...",
        images : [
          "https://i.imgur.com/Sr8B8Ee.png"
        ],
        type : PostType.CRITICISM,
        date : "2021-02-01"
      },
      {
        message : "Um ótimo atendimento no estabelecimento NaoConheço Advocacia!!!",
        type : PostType.COMPLIMENT,
        date : "2021-01-25"
      },
      {
        message : "Creio que as mesas na sorveteria TalQualTal poderiam ter mais cadeiras, por quê apenas 2 por mesa? Olhe as imagens, dá para se ter muito mais!",
        images : [
          "https://i.imgur.com/fnEVewR.png"
        ],
        type : PostType.SUGGESTION,
        date : "2021-01-23"
      },
      {
        message : "O IFSP tem feito um ótimo trabalho durante esses meses difíceis! Bom trabalho à todos!",
        images : [
          "https://i.imgur.com/A2JRSZc.png"
        ],
        type : PostType.COMPLIMENT,
        date : "2021-01-20"
      },
      {
        message : "A refeição no restaurante SeiláDeQual tem sido muito fraca esses últimos dias, refeição está muito ruim, deveriam voltar a cumprir a qualidade que serviam, desanimador...",
        images : [
          "https://i.imgur.com/Sr8B8Ee.png"
        ],
        type : PostType.CRITICISM,
        date : "2021-01-05"
      },
      {
        message : "Um ótimo atendimento no estabelecimento NaoConheço Advocacia!!!",
        type : PostType.COMPLIMENT,
        date : "2021-01-03"
      },
      {
        message : "Creio que as mesas na sorveteria TalQualTal poderiam ter mais cadeiras, por quê apenas 2 por mesa? Olhe as imagens, dá para se ter muito mais!",
        images : [
          "https://i.imgur.com/fnEVewR.png"
        ],
        type : PostType.SUGGESTION,
        date : "2021-01-01"
      },
    ];
    return new Promise<PostInterface[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    })
  }
}

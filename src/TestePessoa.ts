//IMPORTAR A CLASSE QUE QUERO UTILIZAR
import { Pessoa } from './Pessoa';

//INSTACIAR (CRIAR OBJETO)
//SEMPRE QUE ESTIVER NEW E UMA CLASSE, O NEW VAI ESTAR ACESSANDO O CONSTRUTOR DAQUELA CLASSE

const pessoa1: Pessoa = new Pessoa(`Felisberto`, 17);
const pessoa2: Pessoa = new Pessoa(`Maria`, 16);


console.log(pessoa1.getNome());
console.log(pessoa2.getIdade());

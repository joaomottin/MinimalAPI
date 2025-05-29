import { Restaurante } from './Restaurante';

export interface Prato {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  restauranteId: number;
  restaurante: Restaurante;
}

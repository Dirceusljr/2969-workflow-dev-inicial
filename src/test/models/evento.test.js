import { describe, expect, it } from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Autor', () => {
  const objetoEvento = {
    id: 1,
    nome: 'Evento de testes',
    descricao: 'Evento para testar o modelo',
    data: '2024-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});

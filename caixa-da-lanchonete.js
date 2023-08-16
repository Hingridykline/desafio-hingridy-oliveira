class CaixaDaLanchonete {
  calcularValorDaCompra(formaDePagamento, itens) {
    const cardapio = {
      cafe: { descricao: 'Café', valor: 3.00 },
      chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
      suco: { descricao: 'Suco Natural', valor: 6.20 },
      sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
      queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
      salgado: { descricao: 'Salgado', valor: 7.25 },
      combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
      combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
    };

    const descontoDinheiro = 0.05;
    const acrescimoCredito = 0.03;

    const formasPagamento = ['dinheiro', 'debito', 'credito'];

    if (!formasPagamento.includes(formaDePagamento)) {
      return 'Forma de pagamento inválida!';
    }

    if (itens.length === 0) {
      return 'Não há itens no carrinho de compra!';
    }

    let valorTotal = 0;

    for (const itemPedido of itens) {
      const Index = itemPedido.indexOf(',');
      const codigo = itemPedido.slice(0, Index);
      const quantidade = itemPedido.slice(Index + 1);

      if (!cardapio[codigo]) {
        return 'Item inválido!';
      }

      valorTotal += cardapio[codigo].valor * quantidade;

      if (codigo !== 'combo1' && codigo !== 'combo2') {
        if (quantidade > 0 && !cardapio['chantily']) {
          return 'Item extra não pode ser pedido sem o principal';
        }
      }
    }

    if (formaDePagamento === 'dinheiro') {
      valorTotal *= (1 - descontoDinheiro);
    } else if (formaDePagamento === 'credito') {
      valorTotal *= (1 + acrescimoCredito);
    }

    return `R$ ${valorTotal.toFixed(2)}`;
  }
}

export { CaixaDaLanchonete };



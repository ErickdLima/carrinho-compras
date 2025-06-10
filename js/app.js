// variaveis utilizadas em ambas as funções 
let nomeCarrinho = document.getElementById("lista-produtos");
let valorCarrinho = document.getElementById("valor-total");
let listaCarrinho = {};


function adicionar(){

    let produto = document.getElementById("produto").value;// variavel utilizada somente para declarar nomePrduto e valorProduto

    let quantidade = document.getElementById("quantidade").value;
    quantidade = Number(quantidade.trim());   
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('$')[1]);
    let valorTotal = 0;
    let objNomes = Object.keys(listaCarrinho);
    

    
    if(quantidade == ''|| !Number.isInteger(quantidade)||quantidade < 1 ){
        alert('Favor adicionar a quantidade');       
        return
    }

    if(objNomes.includes(nomeProduto)){ 
        
        nomeCarrinho.innerHTML = '';
        for(let i = 0;i < objNomes.length;i++){

            if(objNomes[i].includes(nomeProduto)){
                listaCarrinho[objNomes[i]].quantidade = parseInt(listaCarrinho[objNomes[i]].quantidade) + parseInt(quantidade);
            }
            nomeCarrinho.innerHTML += (`<section class="carrinho__produtos__produto"><span class="texto-azul">x${listaCarrinho[objNomes[i]].quantidade}</span> ${objNomes[i]}
            <span class="texto-azul">R$${listaCarrinho[objNomes[i]].valor}</span></section>`).trim();
                        
        }
    }
        //adiciona o produto ao carrinho e ao objeto(listaCarrinho)
    else{
        nomeCarrinho.innerHTML += (`<section class="carrinho__produtos__produto"><span class="texto-azul">x${quantidade}
            </span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`).trim();

        listaCarrinho[nomeProduto] = {quantidade:quantidade, valor:valorProduto};
    }

    // conta os itens e a quantidade no objeto(listaCarrinho) e define o valor 
    for(let i = 0;i < Object.keys(listaCarrinho).length;i++){

        let produto = Object.keys(listaCarrinho);
        let valor = listaCarrinho[produto[i]].valor;
        let quantidade = listaCarrinho[produto[i]].quantidade;
        valorTotal += valor * quantidade;    
    }

    valorCarrinho.textContent = `R$${valorTotal}`;
}

function limpar(){;
    nomeCarrinho.innerHTML = '';
    valorCarrinho.textContent = 'R$0';
    listaCarrinho = {};
    }
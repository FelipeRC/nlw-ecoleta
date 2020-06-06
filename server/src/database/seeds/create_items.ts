import Knex from 'knex';

export async function seed(knex:Knex){
    await knex('items').insert([
        {title:'Lâmpadas', image: 'lampadas.svg'},
        {title:'Pilhas e batterias', image: 'baterias.svg'},
        {title:'Papéis e papelão', image: 'papeis-papelao.svg'},
        {title:'resíduos Eletrônicos', image: 'eletronicos.svg'},
        {title:'Resíduos orgânicos', image: 'organicos.svg'},
        {title:'Óleo de cozinha', image: 'oleo.svg'}
    ])
};
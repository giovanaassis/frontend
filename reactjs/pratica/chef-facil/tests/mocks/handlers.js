import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api-receitas-pi.vercel.app/receitas/todas", () => {
    return HttpResponse.json([
      {
        id: 1,
        receita: "Frango Agridoce",
        ingredientes:
          "500g de peito de frango em cubos, 1 pimentão vermelho fatiado, 1 pimentão verde fatiado, 1 cebola cortada em pedaços grandes, 1 cenoura fatiada, 1 abacaxi em pedaços, 2 colheres de sopa de molho de soja, 2 colheres de sopa de vinagre de arroz, 3 colheres de sopa de ketchup, 2 colheres de sopa de açúcar, 1 colher de chá de amido de milho, sal e pimenta a gosto",
        modo_preparo:
          "1. Tempere o frango com sal e pimenta. 2. Em uma frigideira grande, aqueça um pouco de óleo e refogue o frango até dourar. 3. Adicione os pimentões, a cebola, a cenoura e refogue por mais alguns minutos. 4. Em uma tigela, misture o molho de soja, vinagre, ketchup, açúcar e amido de milho. 5. Adicione o abacaxi e a mistura de molho à frigideira. 6. Cozinhe até que o molho engrosse e cubra bem os ingredientes. 7. Sirva quente.",
        link_imagem:
          "https://media-cdn.tripadvisor.com/media/photo-s/1a/c8/90/f6/frango-agri-doce-rodizio.jpg",
        tipo: "agridoce",
        created_at: "2024-08-11T22:02:58.854Z",
        IngredientesBase: [
          {
            id: 1,
            nomesIngrediente: [
              "peito de frango",
              "pimentão vermelho",
              "pimentão verde",
              "cebola",
              "cenoura",
              "abacaxi",
              "molho de soja",
              "vinagre de arroz",
              "ketchup",
              "açúcar",
              "amido de milho",
              "sal",
              "pimenta",
            ],
            receita_id: 1,
            created_at: "2024-08-11T22:02:58.854Z",
          },
        ],
      },
      {
        id: 3,
        receita: "Panquecas Americanas",
        ingredientes:
          "1 xícara de farinha de trigo, 1 colher de sopa de açúcar, 1 colher de chá de fermento em pó, 1/2 colher de chá de bicarbonato de sódio, 1/4 colher de chá de sal, 1 xícara de leite, 1 ovo, 2 colheres de sopa de manteiga derretida, 1 colher de chá de essência de baunilha",
        modo_preparo:
          "1. Em uma tigela, misture a farinha, o açúcar, o fermento, o bicarbonato e o sal. 2. Em outra tigela, bata o leite, o ovo, a manteiga derretida e a baunilha. 3. Adicione os ingredientes líquidos aos secos e misture até obter uma massa homogênea. 4. Aqueça uma frigideira untada em fogo médio e despeje pequenas porções de massa, cozinhando até que apareçam bolhas na superfície. 5. Vire as panquecas e cozinhe até dourar o outro lado.",
        link_imagem:
          "https://i.pinimg.com/originals/bd/86/82/bd8682378b450e103c2e36cd29be60cb.png",
        tipo: "doce",
        created_at: "2024-08-11T22:03:27.818Z",
        IngredientesBase: [
          {
            id: 3,
            nomesIngrediente: [
              "farinha de trigo",
              "açúcar",
              "fermento em pó",
              "bicarbonato de sódio",
              "sal",
              "leite",
              "ovo",
              "manteiga",
              "essência de baunilha",
            ],
            receita_id: 3,
            created_at: "2024-08-11T22:03:27.818Z",
          },
        ],
      },
    ]);
  }),
  http.get("https://api-receitas-pi.vercel.app/receitas/*", () => {
    return HttpResponse.json(
      {
        id: 1,
        receita: "Frango Agridoce",
        ingredientes:
          "500g de peito de frango em cubos, 1 pimentão vermelho fatiado, 1 pimentão verde fatiado, 1 cebola cortada em pedaços grandes, 1 cenoura fatiada, 1 abacaxi em pedaços, 2 colheres de sopa de molho de soja, 2 colheres de sopa de vinagre de arroz, 3 colheres de sopa de ketchup, 2 colheres de sopa de açúcar, 1 colher de chá de amido de milho, sal e pimenta a gosto",
        modo_preparo:
          "1. Tempere o frango com sal e pimenta. 2. Em uma frigideira grande, aqueça um pouco de óleo e refogue o frango até dourar. 3. Adicione os pimentões, a cebola, a cenoura e refogue por mais alguns minutos. 4. Em uma tigela, misture o molho de soja, vinagre, ketchup, açúcar e amido de milho. 5. Adicione o abacaxi e a mistura de molho à frigideira. 6. Cozinhe até que o molho engrosse e cubra bem os ingredientes. 7. Sirva quente.",
        link_imagem:
          "https://media-cdn.tripadvisor.com/media/photo-s/1a/c8/90/f6/frango-agri-doce-rodizio.jpg",
        tipo: "agridoce",
        created_at: "2024-08-11T22:02:58.854Z",
        IngredientesBase: [
          {
            id: 1,
            nomesIngrediente: [
              "peito de frango",
              "pimentão vermelho",
              "pimentão verde",
              "cebola",
              "cenoura",
              "abacaxi",
              "molho de soja",
              "vinagre de arroz",
              "ketchup",
              "açúcar",
              "amido de milho",
              "sal",
              "pimenta",
            ],
            receita_id: 1,
            created_at: "2024-08-11T22:02:58.854Z",
          },
        ],
      },
    )
  })
];

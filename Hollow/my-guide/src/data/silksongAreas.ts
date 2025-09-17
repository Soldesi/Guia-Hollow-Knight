
import type { Area } from "../types";

export const SILKSONG_AREAS: Area[] = [
  {
    id: "dirtmouth",
    name: "Dirtmouth",
    image: "/imagens/silksong/dirtmouth.jpg",
    description:
      "Dirtmouth é a pacata vila à superfície que serve como portal e ponto de retorno para Hallownest.\n\nAqui o jogador encontra NPCs importantes, lojas e bancos para salvar o progresso — funcionando como hub seguro entre explorações. As conversas, rumores e pequenas missões encontradas em Dirtmouth ajudam a amarrar a história do reino e a guiar o jogador para as regiões iniciais.\n\nMesmo leve e serena, a vila carrega o peso da história de Hallownest: diálogos com personagens como Elderbug e Cornifer (o cartógrafo) revelam pistas valiosas e desbloqueiam opções de exploração.",
    bosses: []
  },
  {
    id: "forgotten-crossroads",
    name: "Encruzilhada Esquecida",
    image: "/imagens/silksong/forgotten-crossroads.jpg",
    map: "/imagens/silksong/maps/forgotten-crossroads_map.jpg",
    description:
      "As Encruzilhadas Esquecidas são cavernas fundamentais que conectam grande parte das primeiras áreas do jogo.\n\nÉ uma mistura de galerias naturais e estruturas antigas, com rotas ramificadas e inimigos básicos que testam o domínio dos controles e o uso do cenário. O local apresenta salas com segredos escondidos, inimigos que empurram o jogador a aprender a bloquear e saltar, e atalhos que, uma vez abertos, mudam muito a mobilidade no mapa.\n\nExplorar com calma revela rotas alternativas, baús e pontos que encaminham para zonas mais perigosas de Hallownest.",
    bosses: ["Falso Cavaleiro (False Knight)", "Mãe Gruz (Gruz Mother)"]
  },
  {
    id: "greenpath",
    name: "Caminho Verde",
    image: "/imagens/silksong/greenpath.jpg",
    map: "/imagens/silksong/maps/greenpath_map.jpg",
    description:
      "O Caminho Verde é um labirinto de flora exuberante, raízes e pequenas quedas d'água — esteticamente o mais convidativo após a superfície.\n\nAqui predomina a verticalidade, plataformas móveis e trechos escorregadios com veneno/ácido em algumas áreas; é ideal para aprender a dominar o pulo e o dash. A região é rica em segredos e caminhos paralelos; muitas vezes é possível contornar inimigos ou encontrar itens que abrem novas possibilidades em outras áreas.\n\nAlém do visual, é notável por encontros com inimigos mais rápidos e pela presença de personagens que expandem a narrativa, incluindo um combate marcante contra Hornet em certas rotas.",
    bosses: ["Hornet — Protetora (Hornet Protector)", "Massa de Musgo (Massive Moss Charger) — encontro opcional"]
  },
  {
    id: "queens-gardens",
    name: "Jardins da Rainha",
    image: "/imagens/silksong/queens-gardens.jpg",
    map: "/imagens/silksong/maps/queens-gardens_map.jpg",
    description:
      "Os Jardins da Rainha são uma área ornamentada e refinada, repleta de trepadeiras, portões e estruturas antigas que contrastam com o aspecto selvagem de outras zonas.\n\nA região contém enigmas de ambiente, caminhos bloqueados por portas e áreas que exigem exploração cuidadosa para acessar plataformas secretas. É também um espaço ligado a eventos de história e personagens centrais — alguns encontros e locais aqui influenciam o andamento do enredo e a compreensão do passado de Hallownest.\n\nMesmo sem ser a área mais hostil, os jardins escondem perigos e recompensas para jogadores que investigam cada canto.",
    bosses: ["(sem boss principal obrigatório — região com eventos e segredos importantes)"]
  },
  {
    id: "fungal-wastes",
    name: "Ermos Fúngicos",
    image: "/imagens/silksong/fungal-wastes.jpg",
    map: "/imagens/silksong/maps/fungal-wastes_map.jpg",
    description:
      "Ermos Fúngicos é uma zona úmida e vertical, dominada por fungos gigantes, plataformas móveis e inimigos que saltam e se agrupam.\n\nA progressão exige precisão em saltos e domínio do posicionamento, pois muitos trechos são compostos por plataformas frágeis e armadilhas naturais. Além da estética claustrofóbica e das trilhas místicas, a área abriga a Vila Louva-a-Deus, onde tribos inteiras e arenas de combate testam as habilidades do jogador.\n\nExplorar profundamente recompensa com itens de mobilidade e atalhos que permitem voltar mais facilmente a outros pontos do mapa.",
    bosses: ["Senhores Louva-a-Deus (Mantis Lords)"]
  },
  {
    id: "fog-canyon",
    name: "Cânion da Névoa",
    image: "/imagens/silksong/fog-canyon.jpg",
    map: "/imagens/silksong/maps/fog-canyon_map.jpg",
    description:
      "O Cânion da Névoa é um conjunto de galerias enevoadas onde o ambiente altera a percepção espacial: bolhas, poços ácidos e passagens estreitas tornam a navegação tensa.\n\nAlém da atmosfera opressiva, o lugar contém ligações com o mundo dos sonhos e segredos ligados aos Dreamers — locais que têm impacto direto na progressão principal. Navegar pelo Cânion exige cuidado com armadilhas e inimigos que flutuam em padrões enganosos; o jogador frequentemente precisa conectar rotas para desbloquear áreas conectadas ao coração do jogo.",
    bosses: ["Monomon, a Professora (Dreamer Monomon) — encontro de progresso narrativo"]
  },
  {
    id: "city-of-tears",
    name: "Cidade das Lágrimas",
    image: "/imagens/silksong/city-of-tears.jpg",
    map: "/imagens/silksong/maps/city-of-tears_map.jpg",
    description:
      "A Cidade das Lágrimas é a vasta e melancólica capital de Hallownest, sempre banhada por chuva e envolta por arquitetura grandiosa.\n\nÉ uma área de transição crucial, com elevadores, salas urbanas cheias de inimigos e locais que concentram NPCs importantes, lojas e desafios de plataforma. A complexidade do mapa urbano inclui rotas longas, segredos subterrâneos e seções verticais que testam tanto a paciência quanto a navegação do jogador.\n\nVárias mecânicas de combate e upgrades surgem por aqui — além disso, a cidade abriga chefes e encontros que aprofundam a mitologia do reino.",
    bosses: ["Mestre da Alma (Soul Master) e formas relacionadas (Soul Tyrant)"]
  },
  {
    id: "royal-waterways",
    name: "Hidrovia Real",
    image: "/imagens/silksong/royal-waterways.jpg",
    map: "/imagens/silksong/maps/royal-waterways_map.jpg",
    description:
      "A Hidrovia Real é um labirinto de canais e galerias inundadas sob a Cidade das Lágrimas, com correntes, áreas alagadas e inimigos modificados pela água.\n\nA sensação é de exploração submersa: muitas rotas mesclam plataformas secas com corredores encharcados, e o jogador precisa gerenciar saltos e controle em telas que aparentam confundir a orientação. É um local ideal para encontrar inimigos que alteram seu padrão de ataque em espaços apertados e para descobrir passagens que conectam regiões profundas do mapa.\n\nAlém disso, a Hidrovia concentra histórias de degradação e mistério, com áreas que só se tornam acessíveis após obter certas habilidades.",
    bosses: ["(encontros regionais notórios, com variações locais)"]
  },
  {
    id: "ancient-basin",
    name: "Bacia Antiga",
    image: "/imagens/silksong/ancient-basin.jpg",
    map: "/imagens/silksong/maps/ancient-basin_map.jpg",
    description:
      "A Bacia Antiga é um ambiente sombrio e silencioso, marcado por ruínas enterradas e criaturas corroídas pela infecção que percorre Hallownest.\n\nEste local é pesado em atmosfera: trilhas escuras, inimigos furtivos e trechos que exigem exploração cuidadosa e leitura do mapa. A Bacia tem papel central em segmentos importantes da trama e contém pontos onde o jogador aprende mais sobre a origem do mal que atingiu o reino.\n\nPrepare-se para confrontos difíceis e pela sensação de que cada passo revela mais da história trágica de Hallownest.",
    bosses: ["(bosses narrativos e encontros de difícil acesso nas adjacências)"]
  },
  {
    id: "crystal-peak",
    name: "Pico de Cristal",
    image: "/imagens/silksong/crystal-peak.jpg",
    map: "/imagens/silksong/maps/crystal-peak_map.jpg",
    description:
      "O Pico de Cristal é uma mina industrial repleta de pontes quebradiças, plataformas mecânicas e perigos ambientais como lasers e correntes de ar.\n\nA exploração requer ritmo e paciência: plataformas em movimento, mecanismos que forçam o jogador a dominar timing preciso e seções com projéteis. Visualmente, o local destaca cristais brilhantes e uma sensação de perigo metálico — recompensas para quem avançar incluem recursos e caminhos novos por dentro da montanha.\n\nChegar ao núcleo da mina significa encarar inimigos que disparam projéteis e chefes com padrões de ataque baseados em velocidade e espaço restrito.",
    bosses: ["Guardião de Cristal (Crystal Guardian)"]
  },
  {
    id: "howling-cliffs",
    name: "Penhascos Uivantes",
    image: "/imagens/silksong/howling-cliffs.jpg",
    map: "/imagens/silksong/maps/howling-cliffs_map.jpg",
    description:
      "Os Penhascos Uivantes são extensões rochosas e ventosas que se estendem para o exterior do reino, com correntes de ar fortes e seções que testam a travessia.\n\nO terreno é mais aberto em comparação com cavernas internas, com longos saltos, inimigos voadores e pontos de observação que revelam grandes porções do mapa. Há rotas alternativas e plataformas que, quando bem usadas, permitem atalhos valiosos para outras regiões.\n\nA sensação de escala e a presença de riscos por queda tornam esta área memorável tanto pelo desafio quanto pelo design paisagístico.",
    bosses: ["(sem boss obrigatório central nesta área primária, mas com desafios e mini-encontros)"]
  },
  {
    id: "kingdoms-edge",
    name: "Borda do Reino",
    image: "/imagens/silksong/kingdoms-edge.jpg",
    map: "/imagens/silksong/maps/kingdoms-edge_map.jpg",
    description:
      "A Borda do Reino é um território acidentado com abismos, pontes suspensas e inimigos mais agressivos — uma zona que sinaliza a aproximação das partes finais do jogo.\n\nO ambiente aqui é escarpado e punitivo: quedas fatais, inimigos com projéteis e encontros que exigem timing e domínio de movimento. É também uma área de passagem para localidades secretas e para confrontos que colocam à prova as habilidades acumuladas do jogador ao longo da aventura.\n\nPara os exploradores, a Borda guarda segredos que recompensam paciência e observação do nível.",
    bosses: ["Hornet — Sentinela (Hornet Sentinel) — encontro em certa rota", "Hive Knight (encontro na Hive)"]
  },
  {
    id: "the-hive",
    name: "A Colmeia",
    image: "/imagens/silksong/the-hive.jpg",
    map: "/imagens/silksong/maps/the-hive_map.jpg",
    description:
      "A Colmeia é um enorme complexo subterrâneo habitado por enxames e criaturas com comportamento em grupo — um ambiente fechado e sufocante.\n\nA navegação exige atenção a padrões de ataque dos inimigos em enxame e ao uso de áreas seguras entre ondas de ataques. Além disso, a Colmeia possui câmaras amplas e passagens estreitas que escondem itens e desafios de plataforma.\n\nÉ um bom local para testar resistência em combates prolongados e para encontrar segredos ligados à fauna de Hallownest.",
    bosses: ["Rei/ Rainha da Colmeia / Hive Knight (encontro de dificuldade média/alta)"]
  },
  {
    id: "resting-grounds",
    name: "Terra do Descanso",
    image: "/imagens/silksong/resting-grounds.jpg",
    map: "/imagens/silksong/maps/resting-grounds_map.jpg",
    description:
      "A Terra do Descanso é um santuário solene repleto de memoriais, rituais e locais de recolhimento — um ponto chave para a história e para encontros oníricos.\n\nLá você encontra locais ligados aos Dreamers e rotas que se conectam a áreas cruciais do enredo. O clima é contemplativo mas tenso: inimigos e armadilhas pontuam o caminho e há passagens que revelam segredos sobre eventos passados em Hallownest.\n\nExplorar a Terra do Descanso recompensa com conhecimento narrativo e progressão em linhas principais da história.",
    bosses: ["(área relacionada a eventos de história e ligações com Dreamers)"]
  },
  {
    id: "deepnest",
    name: "Ninho Profundo",
    image: "/imagens/silksong/deepnest.jpg",
    map: "/imagens/silksong/maps/deepnest_map.jpg",
    description:
      "Ninho Profundo é uma das áreas mais opressivas do jogo: um emaranhado de túneis escuros, passagens estreitas e criaturas predatórias que perseguem o jogador.\n\nO ambiente é hostil tanto na navegação — com caminhos aparentemente repetitivos e rotas gigantescas — quanto nos combates, pois inimigos aqui têm comportamento agressivo e armadilhas emboscadas. A atmosfera claustrofóbica e a trilha sonora tornam Deepnest memorável; explorar suas camadas mais profundas exige paciência e nervos de aço.\n\nEsconderijos e itens valiosos esperam quem se arriscar, mas o custo é uma série de confrontos difíceis e puzzles de movimentação.",
    bosses: ["Nosk (encounter específico)"]
  }
];

export default SILKSONG_AREAS;

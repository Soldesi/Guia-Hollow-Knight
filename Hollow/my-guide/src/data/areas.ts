
import type { Area } from "../types";

export const AREAS: Area[] = [
    {
        id: "dirtmouth",
        name: "Dirtmouth",
        image: "/imagens/Areas/Dirtmouth.jpg",
        description:
            "Dirtmouth é a pacata vila à superfície que serve como portal e ponto de retorno para Hallownest.\n\nAqui o jogador encontra NPCs importantes, lojas e bancos para salvar o progresso — funcionando como hub seguro entre explorações. As conversas, rumores e pequenas missões encontradas em Dirtmouth ajudam a amarrar a história do reino e a guiar o jogador para as regiões iniciais.\n\nMesmo leve e serena, a vila carrega o peso da história de Hallownest: diálogos com personagens como Elderbug e Cornifer (o cartógrafo) revelam pistas valiosas e desbloqueiam opções de exploração.",
        bosses: []
    },
    {
        id: "forgotten-crossroads",
        name: "Encruzilhada Esquecida",
        image: "/imagens/Areas/Encruzilhada.jpg",
        map: "/imagens/Mapas/Encruzilhada-mapa.jpg",
        description:
            "As Encruzilhadas Esquecidas são cavernas fundamentais que conectam grande parte das primeiras áreas do jogo.\n\nÉ uma mistura de galerias naturais e estruturas antigas, com rotas ramificadas e inimigos básicos que testam o domínio dos controles e o uso do cenário. O local apresenta salas com segredos escondidos, inimigos que empurram o jogador a aprender a bloquear e saltar, e atalhos que, uma vez abertos, mudam muito a mobilidade no mapa.\n\nExplorar com calma revela rotas alternativas, baús e pontos que encaminham para zonas mais perigosas de Hallownest.",
        bosses: [
            {
                name: "Falso Cavaleiro",
                description:
                    "Um dos primeiros grandes confrontos do jogo. Por dentro da enorme armadura vive uma larva que assumiu uma couraça e uma arma roubada — o resultado é o Falso Cavaleiro.\n\nA luta é centrada em ataques lentos e pesados: investidas que cobrem espaço e um pulo esmagador. Estratégia: mantenha-se relativamente próximo às pernas entre os ataques para punir recuperações, esquive o pulo lateralmente e capitalize nas janelas curtas após os combos.",
                image: "/imagens/Bosses/Falso.jpg"
            },
            {
                name: "Mãe Mosca",
                description:
                    "Uma criatura volumosa encontrada em áreas úmidas e cavidades; protege filhotes e pode se tornar extremamente agressiva quando provocada.\n\nEm combate alterna momentos mais lentos com rajadas e investidas aéreas; em arenas especiais pode aparecer em conjunto com outras Mães Mosca. Dica: magias e ataques à distância funcionam bem; mantenha mobilidade vertical para escapar das batidas e ataque quando ela ficar sonolenta após alguns padrões.",
                image: "/imagens/Bosses/Mosca.jpg"
            }
        ]
    },
    {
        id: "greenpath",
        name: "Caminho Verde",
        image: "/imagens/Areas/Caminho.jpg",
        map: "/imagens/Mapas/Caminho-mapa.jpg",
        description:
            "O Caminho Verde é um labirinto de flora exuberante, raízes e pequenas quedas d'água — esteticamente o mais convidativo após a superfície.\n\nAqui predomina a verticalidade, plataformas móveis e trechos escorregadios com veneno/ácido em algumas áreas; é ideal para aprender a dominar o pulo e o dash. A região é rica em segredos e caminhos paralelos; muitas vezes é possível contornar inimigos ou encontrar itens que abrem novas possibilidades em outras áreas.\n\nAlém do visual, é notável por encontros com inimigos mais rápidos e pela presença de personagens que expandem a narrativa, incluindo um combate marcante contra Hornet em certas rotas.",
        bosses: [
            {
                name: "Hornet",
                description:
                    "Duelista ágil e personagem central na narrativa. Hornet usa estocadas rápidas com ferrão, combos móveis e ataques projéteis curtos que testam posicionamento e dash.\n\nA luta exige paciência: aprenda a contra-atacar após as sequências de estocadas. Punir erros dela rende janelas seguras para dano.",
                image: "/imagens/Bosses/Hornet.jpg"
            },
            {
                name: "Rei Vengemosca",
                description:
                    "Patriarca dos Vengeflies encontrado nas áreas verdes (Greenpath). Costuma ficar em pontos elevados ou pendurado no teto até ser provocado, então inicia o confronto com ataques aéreos rápidos.\n\nPadrões incluem movimentos erráticos pelo ar, mergulhos e tentativas de afastar o jogador. Dica: faça com ele descer e aproveite para atacar quando pousar; magias de projétil ajudam quando o rei tenta se manter longe.",
                image: "/imagens/Bosses/Venomosca.jpg"
            },
            {
                name: "Batedor Musgoso Imenso",
                description:
                    "Mini-boss que costuma se camuflar como um grande arbusto em áreas verdes. Ao ser provocado revela-se e executa cargas rápidas e pulos que esmagam o solo.\n\nO combate pede esquiva das cargas e golpes precisos nos momentos de pouso. Dica: role para o lado na preparação da investida e use ataques rápidos durante a recuperação para evitar se expor.",
                image: "/imagens/Bosses/Batedor.jpg"
            }
        ]
    },
    {
        id: "fungal-wastes",
        name: "Ermos Fúngicos",
        image: "/imagens/Areas/Ermos.jpg",
        map: "/imagens/Mapas/Ermos-mapa.jpg",
        description:
            "Ermos Fúngicos é uma zona úmida e vertical, dominada por fungos gigantes, plataformas móveis e inimigos que saltam e se agrupam.\n\nA progressão exige precisão em saltos e domínio do posicionamento, pois muitos trechos são compostos por plataformas frágeis e armadilhas naturais. Além da estética claustrofóbica e das trilhas místicas, a área abriga a Vila Louva-a-Deus, onde tribos inteiras e arenas de combate testam as habilidades do jogador.\n\nExplorar profundamente recompensa com itens de mobilidade e atalhos que permitem voltar mais facilmente a outros pontos do mapa.",
        bosses: [{
            name: "Lordes Louva-a-Deus",
            description:
                "Três guerreiros louva-a-deus que compõem uma das batalhas opcionais mais técnicas do jogo. Os padrões são rápidos, com combos coreografados e ataques em formação.\n\nA dificuldade vem da velocidade e da exigência de execução: pratique esquivas curtas e memorize os padrões (ataques com lâminas/lanças e sequências aéreas). Vencer libera passagem segura pela vila dos louva-a-deus.",
            image: "/imagens/Bosses/Lords.jpg"
        }]
    },
    {
        id: "city-of-tears",
        name: "Cidade das Lágrimas",
        image: "/imagens/Areas/Cidade.jpg",
        map: "/imagens/Mapas/Cidade-mapa.jpg",
        description:
            "A Cidade das Lágrimas é a vasta e melancólica capital de Hallownest, sempre banhada por chuva e envolta por arquitetura grandiosa.\n\nÉ uma área de transição crucial, com elevadores, salas urbanas cheias de inimigos e locais que concentram NPCs importantes, lojas e desafios de plataforma. A complexidade do mapa urbano inclui rotas longas, segredos subterrâneos e seções verticais que testam tanto a paciência quanto a navegação do jogador.\n\nVárias mecânicas de combate e upgrades surgem por aqui — além disso, a cidade abriga chefes e encontros que aprofundam a mitologia do reino.",
        bosses: ["Mestre da Alma (Soul Master) (e variantes relacionadas, como Soul Tyrant)"]
    },
    {
        id: "royal-waterways",
        name: "Hidrovia Real",
        image: "/imagens/Areas/Hidrovia.jpg",
        map: "/imagens/Mapas/Hidrovia-mapa.jpg",
        description:
            "A Hidrovia Real é um labirinto de canais e galerias inundadas sob a Cidade das Lágrimas, com correntes, áreas alagadas e inimigos modificados pela água.\n\nA sensação é de exploração submersa: muitas rotas mesclam plataformas secas com corredores encharcados, e o jogador precisa gerenciar saltos e controle em telas que aparentam confundir a orientação. É um local ideal para encontrar inimigos que alteram seu padrão de ataque em espaços apertados e para descobrir passagens que conectam regiões profundas do mapa.\n\nAlém disso, a Hidrovia concentra histórias de degradação e mistério, com áreas que só se tornam acessíveis após obter certas habilidades.",
        bosses: ["(Encontros sub-regionais; boss local notório em partes da Waterways)"]
    },
    {
        id: "crystal-peak",
        name: "Pico de Cristal",
        image: "/imagens/Areas/Cristal.jpg",
        map: "/imagens/Mapas/Cristal-mapa.jpg",
        description:
            "O Pico de Cristal é uma mina industrial repleta de pontes quebradiças, plataformas mecânicas e perigos ambientais como lasers e correntes de ar.\n\nA exploração requer ritmo e paciência: plataformas em movimento, mecanismos que forçam o jogador a dominar timing preciso e seções com projéteis. Visualmente, o local destaca cristais brilhantes e uma sensação de perigo metálico — recompensas para quem avançar incluem recursos e caminhos novos por dentro da montanha.\n\nChegar ao núcleo da mina significa encarar inimigos que disparam projéteis e chefes com padrões de ataque baseados em velocidade e espaço restrito.",
        bosses: ["Guardião de Cristal (Crystal Guardian)"]
    },
    {
        id: "queens-gardens",
        name: "Jardins da Rainha",
        image: "/imagens/Areas/Jardim.jpg",
        map: "/imagens/Mapas/Jardins-mapa.jpg",
        description:
            "Os Jardins da Rainha são uma área ornamentada e refinada, repleta de trepadeiras, portões e estruturas antigas que contrastam com o aspecto selvagem de outras zonas.\n\nA região contém enigmas de ambiente, caminhos bloqueados por portas e áreas que exigem exploração cuidadosa para acessar plataformas secretas. É também um espaço ligado a eventos de história e personagens centrais — alguns encontros e locais aqui influenciam o andamento do enredo e a compreensão do passado de Hallownest.\n\nMesmo sem ser a área mais hostil, os jardins escondem perigos e recompensas para jogadores que investigam cada canto.",
        bosses: ["(Sem boss obrigatório principal — área ligada a eventos/itens importantes)"]
    },
    {
        id: "fog-canyon",
        name: "Cânion da Névoa",
        image: "/imagens/Areas/Canion.jpg",
        map: "/imagens/Mapas/Canion-mapa.jpg",
        description:
            "O Cânion da Névoa é um conjunto de galerias enevoadas onde o ambiente altera a percepção espacial: bolhas, poços ácidos e passagens estreitas tornam a navegação tensa.\n\nAlém da atmosfera opressiva, o lugar contém ligações com o mundo dos sonhos e segredos ligados aos Dreamers — locais que têm impacto direto na progressão principal. Navegar pelo Cânion exige cuidado com armadilhas e inimigos que flutuam em padrões enganosos; o jogador frequentemente precisa conectar rotas para desbloquear áreas conectadas ao coração do jogo.",
        bosses: ["Monomon, a Professora (Dreamer Monomon) — encontro de prog."]
    },
    {
        id: "ancient-basin",
        name: "Bacia Antiga",
        image: "/imagens/Areas/Bacia.jpg",
        map: "/imagens/Mapas/Bacia-mapa.jpg",
        description:
            "A Bacia Antiga é um ambiente sombrio e silencioso, marcado por ruínas enterradas e criaturas corroídas pela infecção que percorre Hallownest.\n\nEste local é pesado em atmosfera: trilhas escuras, inimigos furtivos e trechos que exigem exploração cuidadosa e leitura do mapa. A Bacia tem papel central em segmentos importantes da trama e contém pontos onde o jogador aprende mais sobre a origem do mal que atingiu o reino.\n\nPrepare-se para confrontos difíceis e pela sensação de que cada passo revela mais da história trágica de Hallownest.",
        bosses: ["(Encontros de dificuldade crescente; bosses relacionados à história aparecem aqui/adjacências)"]
    },
    {
        id: "howling-cliffs",
        name: "Penhascos Uivantes",
        image: "/imagens/Areas/Penhascos.jpg",
        map: "/imagens/Mapas/Penhascos-mapa.jpg",
        description:
            "Região de penhascos e ventos fortes no noroeste de Hallownest; zona mais aberta com inimigos e caminhos de travessia.",
        bosses: ["(sem boss de destaque obrigatório nesta área primária)"]
    },
    {
        id: "kingdoms-edge",
        name: "Borda do Reino",
        image: "/imagens/Areas/Borda.jpg",
        map: "/imagens/Mapas/Borda-mapa.jpg",
        description:
            "Território montanhoso e em cinzas; abismos profundos e inimigos mais agressivos — caminho para áreas finais do mapa.",
        bosses: ["Hornet — Sentinela (Hornet Sentinel) (encounter em Kingdom's Edge)", "Hive Knight (na Hive)"]
    },
    {
        id: "the-hive",
        name: "A Colmeia",
        image: "/imagens/Areas/Comeia.jpg",
        map: "/imagens/Mapas/Comeia-mapa.jpg",
        description:
            "Grande comunidade de abelhas escondida abaixo da Borda do Reino; atmosfera fechada e inimigos de enxame.",
        bosses: ["Rei(a) Colmeia / Hive Knight (opcional)"]
    },
    {
        id: "resting-grounds",
        name: "Terra do Descanso",
        image: "/imagens/Areas/Descanso.jpg",
        map: "/imagens/Mapas/Descanso-mapa.jpg",
        description:
            "Cemitério sagrado onde rituais e memoriais são realizados; contém NPCs e locais-chave para progressão (p.ex. Igreja das Almas).",
        bosses: ["(Área ligada a eventos de história / encontros do tipo 'dreamer' adjacente)"]
    },
    {
        id: "deepnest",
        name: "Ninho Profundo",
        image: "/imagens/Areas/Ninho.jpg",
        map: "/imagens/Mapas/Ninho-mapa.jpg",
        description:
            "Uma das regiões mais perturbadoras — labirintos escuros cheios de aranhas e criaturas ferozes; desafios de navegação e combate.",
        bosses: ["Nosk (opcional/encounter em áreas profundas de Deepnest)"]
    }
];

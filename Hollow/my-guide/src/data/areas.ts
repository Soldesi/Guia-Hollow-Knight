
import type { Area } from "../types";

export const AREAS: Area[] = [
    {
        id: "dirtmouth",
        name: "Dirtmouth",
        image: "/imagens/Areas/Dirtmouth.jpg",
        map: "/imagens/Mapas/Dirtmouth-mapa.jpg",
        description: "Dirtmouth é a pacata vila à superfície que serve como portal e ponto de retorno para Hallownest.\n\nAqui o jogador encontra NPCs importantes, lojas e bancos para salvar o progresso — funcionando como hub seguro entre explorações. As conversas, rumores e pequenas missões encontradas em Dirtmouth ajudam a amarrar a história do reino e a guiar o jogador para as regiões iniciais.\n\nMesmo leve e serena, a vila carrega o peso da história de Hallownest: diálogos com personagens como Elderbug e Cornifer (o cartógrafo) revelam pistas valiosas e desbloqueiam opções de exploração.",
        bosses: [],
        secondary: undefined,
        npcs: [
            {
                name: "Inseto Ancião",
                description:
                    "Inseto Ancião é o NPC amigável que dá as boas-vindas em Dirtmouth.\n\nConhecido por seus comentários curiosos e conselhos práticos, 0 Ancião costuma indicar caminhos, contar boatos do reino e oferecer pequenas pistas para iniciantes. É uma figura de apoio — bom lugar para ouvir rumores e recapitular a história de Hallownest.",
                image: "/imagens/NPCs/Anciao.jpg"
            },
            {
                name: "Cornifer",
                description:
                    "Cornifer é o cartógrafo errante que vende mapas de área ao jogador.\n\nEle costuma ser encontrado em cantos escondidos do mundo e marca suas rotas no mapa quando você compra. Além de vender mapas, Cornifer personifica o espírito descobridor de Hallownest: siga suas pistas para desbloquear caminhos e localizar segredos.",
                image: "/imagens/NPCs/Cornifer.jpg"
            },
            {
                name: "Sly",
                description:
                    "Sly é um comerciante astuto e reservado que aparece em pontos específicos do mapa.\n\nEspecialista em itens e trocas pouco convencionais, ele costuma oferecer mercadorias raras ou trocas úteis para jogadores exploradores. Conversar com Sly pode revelar itens e oportunidades que não aparecem nas lojas comuns.",
                image: "/imagens/NPCs/Sly.jpg"
            },
            {
                name: "Iselda",
                description:
                    "Iselda, frequentemente vista cuidando das mercadorias e do estande de mapas quando ele está ausente.\n\nEla é atenciosa e prática — ajuda viajantes com informações sobre onde Cornifer esteve, vende mapas remanescentes e dá dicas discretas sobre rotas e segredos locais. Útil para quem procura mapas ou quer saber onde encontrar o cartógrafo.",
                image: "/imagens/NPCs/Iselda.jpg"
            },
            {
                name: "O Último Besouro",
                description:
                    "O Último Besouro é uma figura melancólica — um velho guerreiro lembrando dos dias de glória dos besouros.\n\nEle fala em tons nostálgicos, guarda relíquias e às vezes desafia aventureiros com testes de bravura ou pedidos para recuperar objetos do seu passado. Bom local para ouvir contos do reino e obter recompensas simbólicas por ajudar a preservar memórias esquecidas.",
                image: "/imagens/NPCs/Besouro.jpg"
            },
            {
                name: "Zote",
                description:
                    "Aqui Zote pode ser encontrado em Dirtmouth, após ser resgatado.\n\nEle passa o tempo todo reclamando, criticando os outros e contando histórias exageradas sobre sua suposta bravura.",
                image: "/imagens/NPCs/Zote.jpg"
            },
            {
                name: "Bretta",
                description:
                    "Bretta é uma jovem inseto tímida que vive em Hallownest. Após ser resgatada de uma situação perigosa, ela desenvolve uma admiração profunda pelo Cavaleiro.\n\nIngênua e romântica, Bretta fantasia sobre heróis e sonha com histórias de bravura, trazendo um tom leve e humano ao mundo sombrio do jogo.",
                image: "/imagens/NPCs/Bretta.jpg"
            },
        ],
    },


    {
        id: "forgotten-crossroads",
        name: "Encruzilhada Esquecida",
        image: "/imagens/Areas/Encruzilhada.jpg",
        map: "/imagens/Mapas/Encruzilhada-mapa.jpg",
        description: "As Encruzilhadas Esquecidas são cavernas fundamentais que conectam grande parte das primeiras áreas do jogo.\n\nÉ uma mistura de galerias naturais e estruturas antigas, com rotas ramificadas e inimigos básicos que testam o domínio dos controles e o uso do cenário. O local apresenta salas com segredos escondidos, inimigos que empurram o jogador a aprender a bloquear e saltar, e atalhos que, uma vez abertos, mudam muito a mobilidade no mapa.\n\nExplorar com calma revela rotas alternativas, baús e pontos que encaminham para zonas mais perigosas de Hallownest.",
        bosses: [
            {
                name: "Falso Cavaleiro",
                description: "Um dos primeiros grandes confrontos do jogo. Por dentro da enorme armadura vive uma larva que assumiu uma couraça e uma arma roubada — o resultado é o Falso Cavaleiro.\n\nA luta é centrada em ataques lentos e pesados: investidas que cobrem espaço e um pulo esmagador.",
                image: "/imagens/Bosses/Falso.jpg"
            },
            {
                name: "Mãe Mosca",
                description: "Uma criatura volumosa encontrada em áreas úmidas e cavidades; protege filhotes e pode se tornar extremamente agressiva quando provocada.\n\nEm combate alterna momentos mais lentos com rajadas e investidas aéreas; em arenas especiais pode aparecer em conjunto com outras Mães Mosca.",
                image: "/imagens/Bosses/Mae.jpg"
            },
        ],
        secondary: undefined,
        npcs: [
            {
                name: "Pai Larva",
                description:
                    "O Pai Larva é uma criatura gentil que vive na Encruzilhada Esquecida. Ele aguarda ansiosamente o retorno de suas larvas, presas em frascos por todo o Reino de Hallownest.\n\nAo resgatá-las, o Pai Larva recompensa o Cavaleiro com Geo e itens valiosos, demonstrando sua gratidão.",
                image: "/imagens/NPCs/Pai_Larva.jpg"
            },
            {
                name: "Quirrel",
                description:
                    "Quirrel é um viajante curioso e reflexivo, sempre em busca de propósito e histórias.\n\nGentil e um pouco enigmático, ele compartilha observações sobre lugares que já visitou e às vezes marca pontos relevantes no mapa. Conversar com Quirrel pode oferecer contexto histórico sobre Hallownest e pequenas pistas emocionais sobre locais importantes.",
                image: "/imagens/NPCs/Quirrel.jpg"
            },
            {
                name: "Sly — Inconsciente",
                description:
                    "Aqui Sly é encontrado desacordado em meio aos perigos de Hallownest.\n\nO pequeno comerciante parece indefeso e vulnerável, caído no chão, até que seja ajudado pelo Cavaleiro. Após esse encontro, ele retorna a Dirtmouth para abrir sua loja.",
                image: "/imagens/NPCs/Sly_Infectado.jpg"
            },
            {
                name: "Salubra",
                description:
                    "Salubra é uma curandeira excêntrica que vende talismãs e poções feitas com saberes antigos.\n\nEla oferece serviços de cura, encantamentos e conselhos sobre usos de itens místicos — ideal para quem precisa de um reforço antes de explorar áreas perigosas. Salubra costuma pedir pequenas tarefas em troca de suas receitas mais raras, e suas histórias revelam tradições das comunidades locais.",
                image: "/imagens/NPCs/Salubra.jpg"
            },
            {
                name: "Xamã Caracol",
                description:
                    "O Xamã Caracol é um velho sábio com conhecimento profundo sobre a natureza e magia.\n\nEle ensina feitiços e oferece bênçãos para os aventureiros, ajudando-os a superar desafios difíceis e a entender os mistérios do mundo em que vivem.",
                image: "/imagens/NPCs/Xama.jpg"
            }
        ],
    },


    {
        id: "greenpath",
        name: "Caminho Verde",
        image: "/imagens/Areas/Caminho.jpg",
        map: "/imagens/Mapas/Caminho-mapa.jpg",
        description: "O Caminho Verde é um labirinto de flora exuberante, raízes e pequenas quedas d'água — esteticamente o mais convidativo após a superfície.\n\nAqui predomina a verticalidade, plataformas móveis e trechos escorregadios com veneno/ácido em algumas áreas; é ideal para aprender a dominar o pulo e o dash. A região é rica em segredos e caminhos paralelos; muitas vezes é possível contornar inimigos ou encontrar itens que abrem novas possibilidades em outras áreas.\n\nAlém do visual, é notável por encontros com inimigos mais rápidos e pela presença de personagens que expandem a narrativa, incluindo um combate marcante contra Hornet em certas rotas.",
        bosses: [
            {
                name: "Hornet",
                description: "Duelista ágil e personagem central na narrativa. Hornet usa estocadas rápidas com ferrão, combos móveis e ataques projéteis curtos que testam posicionamento e dash.\n\nA luta exige paciência: aprenda a contra-atacar após as sequências de estocadas. Punir erros dela rende janelas seguras para dano.",
                image: "/imagens/Bosses/Hornet.jpg"
            },
            {
                name: "Rei Vengemosca",
                description: "Patriarca dos Vengeflies encontrado nas áreas verdes (Greenpath). Costuma ficar em pontos elevados ou pendurado no teto até ser provocado, então inicia o confronto com ataques aéreos rápidos.\n\nPadrões incluem movimentos erráticos pelo ar, mergulhos e tentativas de afastar o jogador. Dica: faça com ele descer e aproveite para atacar quando pousar; magias de projétil ajudam quando o rei tenta se manter longe.",
                image: "/imagens/Bosses/Venomosca.jpg"
            },
            {
                name: "Batedor Musgoso Imenso",
                description: "Mini-boss que costuma se camuflar como um grande arbusto em áreas verdes. Ao ser provocado revela-se e executa cargas rápidas e pulos que esmagam o solo.\n\nO combate pede esquiva das cargas e golpes precisos nos momentos de pouso. Dica: role para o lado na preparação da investida e use ataques rápidos durante a recuperação para evitar se expor.",
                image: "/imagens/Bosses/Batedor.jpg"
            }
        ],
        npcs: [
            {
                name: "Caçador",
                description:
                    "O Caçador é um especialista em rastreamento e combate que conhece bem as criaturas do reino.\n\nEle oferece contratos, desafios de caça e relatórios sobre monstros perigosos — completar suas tarefas costuma trazer equipamentos e troféus. O Caçador também dá aulas práticas sobre como lidar com inimigos específicos, tornando-o um recurso valioso para aventureiros que querem melhorar suas habilidades.",
                image: "/imagens/NPCs/Cacador.jpg"
            },
            {
                name: "Unn",
                description:
                    "Unn é uma presença enigmática e maternal das áreas fungais — calma e protetora.\n\nEla compartilha sabedoria simples sobre o equilíbrio dos ambientes e pode apontar caminhos seguros através de zonas instáveis. Conversas com Unn costumam ser curtas, mas carregadas de intuição; ótimo NPC para dicas de navegação e respeito à fauna local.",
                image: "/imagens/NPCs/Unn.jpg"
            },
            {
                name: "Zote — Caminho Verde",
                description:
                    "Aqui Zote é encontrado em grande perigo, enfrentando sozinho a Mãe Veno-mosca.\n\nApesar do risco, ele mantém seu orgulho e jeito arrogante, quase como se zombasse da situação. Após ser salvo pelo Cavaleiro, ele segue para Dirtmouth para contar suas exageradas aventuras.",
                image: "/imagens/NPCs/Zote.jpg"
            },
            {
                name: "Sheo",
                description:
                    "Sheo é um artista excêntrico e um vendedor de poções especiais.\n\nEle cria elixires únicos com efeitos variados, desde melhorias temporárias de combate até curiosos efeitos de transformação. Encontrá-lo pode ser um ponto de virada para aventureiros criativos.",
                image: "/imagens/NPCs/Sheo.jpg"
            },
        ],
        secondary: undefined
    },


    {
        id: "fungal-wastes",
        name: "Ermos Fúngicos",
        image: "/imagens/Areas/Ermos.jpg",
        map: "/imagens/Mapas/Ermos-mapa.jpg",
        description: "Ermos Fúngicos é uma zona úmida e vertical, dominada por fungos gigantes, plataformas móveis e inimigos que saltam e se agrupam.\n\nA progressão exige precisão em saltos e domínio do posicionamento, pois muitos trechos são compostos por plataformas frágeis e armadilhas naturais. Além da estética claustrofóbica e das trilhas místicas, a área abriga a Vila Louva-a-Deus, onde tribos inteiras e arenas de combate testam as habilidades do jogador.\n\nExplorar profundamente recompensa com itens de mobilidade e atalhos que permitem voltar mais facilmente a outros pontos do mapa.",
        bosses: [{
            name: "Lordes Louva-a-Deus",
            description: "Três guerreiros louva-a-deus que compõem uma das batalhas opcionais mais técnicas do jogo. Os padrões são rápidos, com combos coreografados e ataques em formação.\n\nA dificuldade vem da velocidade e da exigência de execução: pratique esquivas curtas e memorize os padrões (ataques com lâminas/lanças e sequências aéreas). Vencer libera passagem segura pela vila dos louva-a-deus.",
            image: "/imagens/Bosses/Lords.jpg"
        }],
        npcs: [
            {
                name: "Come Pernas",
                description:
                    "Come Pernas é uma criatura furtiva que ronda passagens estreitas e trilhas secundárias.\n\nRápido e evasivo, costuma atrair a atenção de quem anda desprevenido; derrotá-lo pode revelar itens escondidos ou abrir pequenas rotas alternativas. Fique atento: ele reaparece em lugares onde os viajantes se sentem seguros demais.",
                image: "/imagens/NPCs/Pernas.jpg"
            },
            {
                name: "Cloth",
                description:
                    "Cloth é uma guerreira viajante que sonha em viver grandes aventuras em Hallownest.\n\nApesar de sua aparência robusta, é bondosa e demonstra coragem crescente ao longo da jornada. Ela busca provar seu valor enfrentando perigos e, em certos encontros, pode auxiliar o Cavaleiro em batalha.",
                image: "/imagens/NPCs/Cloth.jpg"
            },
        ],
        secondary: undefined
    },


    {
        id: "city-of-tears",
        name: "Cidade das Lágrimas",
        image: "/imagens/Areas/Cidade.jpg",
        map: "/imagens/Mapas/Cidade-mapa.jpg",
        description: "A Cidade das Lágrimas é a vasta e melancólica capital de Hallownest, sempre banhada por chuva e envolta por arquitetura grandiosa.\n\nÉ uma área de transição crucial, com elevadores, salas urbanas cheias de inimigos e locais que concentram NPCs importantes, lojas e desafios de plataforma. A complexidade do mapa urbano inclui rotas longas, segredos subterrâneos e seções verticais que testam tanto a paciência quanto a navegação do jogador.\n\nVárias mecânicas de combate e upgrades surgem por aqui — além disso, a cidade abriga chefes e encontros que aprofundam a mitologia do reino.",
        bosses: [
            {
                name: "Mestre das Almas",
                description:
                    "O Mestre das Almas é uma figura enigmática e poderosa que habita o Santuário das Almas.\n\nCom vasto conhecimento em magia e manipulação espiritual, ele representa um grande desafio, usando feitiços complexos e ataques devastadores para testar os aventureiros.",
                image: "/imagens/Bosses/Mestre.jpg"
            },
            {
                name: "Guerreiro das Almas",
                description:
                    "O Guerreiro das Almas é um espírito persistente e agressivo, formado a partir de energia residual.\n\nEle surge em confrontos mágicos, usando feitiços ofensivos que exigem agilidade e reflexos rápidos dos jogadores para serem superados.",
                image: "/imagens/Bosses/Guerreiro.jpg"
            },
            {
                name: "Sentinelas",
                description:
                    "As Sentinelas são guardiãs implacáveis que protegem o acesso aos Sonhadores.\n\nAltamente disciplinadas, elas utilizam lanças afiadas e estratégias defensivas para impedir qualquer intruso de avançar. Enfrentá-las exige precisão e paciência.",
                image: "/imagens/Bosses/Sentinelas.jpg"
            },
        ],
        npcs: [
            {
                name: "Forjador de Ferrões",
                description:
                    "O Forjador de Ferrões é um ferreiro recluso que trabalha com espinhos, lâminas e ferrões.\n\nEncontrado em oficinas subterrâneas ou ao lado de forjas antigas, ele repara e reforça armas improvisadas, oferece melhorias simples ou troca serviços por materiais raros. Conversar com ele pode revelar pistas sobre onde encontrar minério especial e pequenas histórias sobre artesãos perdidos de Hallownest.",
                image: "/imagens/NPCs/Forjador.jpg"
            },
            {
                name: "Quirrel — Cidade das Lágrimas",
                description:
                    "Aqui Quirrel é encontrado observando a chuva das alturas.\n\nEle comenta sobre a beleza melancólica da cidade, refletindo sobre como a água moldou não só as construções, mas também a atmosfera de Hallownest.",
                image: "/imagens/NPCs/Quirrel.jpg"
            },
            {
                name: "Colecionador de Relíquias Lemm",
                description:
                    "Lemm é um colecionador meticuloso que valoriza itens antigos e relíquias raras.\n\nEle aparece em locais isolados oferecendo trocas vantajosas para quem possui itens difíceis de encontrar. Conversar com Lemm pode desbloquear recompensas únicas e segredos históricos.",
                image: "/imagens/NPCs/Lemm.jpg"
            },
        ],
        secondary: undefined
    },


    {
        id: "royal-waterways",
        name: "Hidrovia Real",
        image: "/imagens/Areas/Hidrovia.jpg",
        map: "/imagens/Mapas/Hidrovia-mapa.jpg",
        description: "A Hidrovia Real é um labirinto de canais e galerias inundadas sob a Cidade das Lágrimas, com correntes, áreas alagadas e inimigos modificados pela água.\n\nA sensação é de exploração submersa: muitas rotas mesclam plataformas secas com corredores encharcados, e o jogador precisa gerenciar saltos e controle em telas que aparentam confundir a orientação. É um local ideal para encontrar inimigos que alteram seu padrão de ataque em espaços apertados e para descobrir passagens que conectam regiões profundas do mapa.\n\nAlém disso, a Hidrovia concentra histórias de degradação e mistério, com áreas que só se tornam acessíveis após obter certas habilidades.",
        bosses: [
            {
                name: "Defensor do Esterco",
                description:
                    "O Defensor do Esterco é um cavaleiro excêntrico, mas nobre, que guarda com orgulho as profundezas de Hallownest.\n\nEle luta com coragem e devoção, utilizando ataques baseados em esferas de esterco, sempre demonstrando um espírito honrado e determinado.",
                image: "/imagens/Bosses/Defensor.jpg"
            },
            {
                name: "Flukemarm",
                description:
                    "Flukemarm é uma criatura monstruosa e disforme que se esconde nas cavernas úmidas de Hallownest.\n\nEla gera constantemente inimigos menores, tornando o combate caótico e desafiador, enquanto sua presença inspira desconforto e repulsa.",
                image: "/imagens/Bosses/Flukemarm.jpg"
            }
        ],
        npcs: [

        ],
        secondary: undefined
    },


    {
        id: "crystal-peak",
        name: "Pico de Cristal",
        image: "/imagens/Areas/Cristal.jpg",
        map: "/imagens/Mapas/Cristal-mapa.jpg",
        description: "O Pico de Cristal é uma mina industrial repleta de pontes quebradiças, plataformas mecânicas e perigos ambientais como lasers e correntes de ar.\n\nA exploração requer ritmo e paciência: plataformas em movimento, mecanismos que forçam o jogador a dominar timing preciso e seções com projéteis. Visualmente, o local destaca cristais brilhantes e uma sensação de perigo metálico — recompensas para quem avançar incluem recursos e caminhos novos por dentro da montanha.\n\nChegar ao núcleo da mina significa encarar inimigos que disparam projéteis e chefes com padrões de ataque baseados em velocidade e espaço restrito.",
        bosses: [],
        npcs: [
            {
                name: "Myla",
                description:
                    "Myla é uma mineira alegre que trabalha cantando nas profundezas da Encruzilhada Esquecida.\n\nCom seu canto suave, transmite uma sensação de esperança em meio à decadência de Hallownest. Contudo, como muitos de seu povo, ela está condenada pela infecção, tornando seu destino um dos mais tristes do reino.",
                image: "/imagens/NPCs/Myla.jpg"
            }
        ],
        secondary: undefined
    },


    {
        id: "resting-grounds",
        name: "Terra do Descanso",
        image: "/imagens/Areas/Descanso.jpg",
        map: "/imagens/Mapas/Descanso-mapa.jpg",
        description: "A Terra do Descanso é um santuário solene repleto de memoriais, rituais e locais de recolhimento — um ponto chave para a história e para encontros oníricos.\n\nLá você encontra locais ligados aos Dreamers e rotas que se conectam a áreas cruciais do enredo. O clima é contemplativo mas tenso: inimigos e armadilhas pontuam o caminho e há passagens que revelam segredos sobre eventos passados em Hallownest.\n\nExplorar a Terra do Descanso recompensa com conhecimento narrativo e progressão em linhas principais da história.",
        bosses: [],
        npcs: [
            {
                name: "Vidente",
                description:
                    "A Vidente é uma anciã sábia da tribo dos Louva-a-Deus das Mariposas, encontrada no Descanso da Rainha.\n\nEla guia o Cavaleiro no uso do Ferrão Onírico, revelando a importância dos sonhos e memórias em Hallownest. Sua missão é transmitir o legado de sua tribo antes que o esquecimento consuma tudo.",
                image: "/imagens/NPCs/Vidente.jpg"
            },
        ],
        secondary: undefined
    },


    {
        id: "fog-canyon",
        name: "Cânion da Névoa",
        image: "/imagens/Areas/Canion.jpg",
        map: "/imagens/Mapas/Canion-mapa.jpg",
        description: "O Cânion da Névoa é um conjunto de galerias enevoadas onde o ambiente altera a percepção espacial: bolhas, poços ácidos e passagens estreitas tornam a navegação tensa.\n\nAlém da atmosfera opressiva, o lugar contém ligações com o mundo dos sonhos e segredos ligados aos Dreamers — locais que têm impacto direto na progressão principal. Navegar pelo Cânion exige cuidado com armadilhas e inimigos que flutuam em padrões enganosos; o jogador frequentemente precisa conectar rotas para desbloquear áreas conectadas ao coração do jogo.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "queens-gardens",
        name: "Jardins da Rainha",
        image: "/imagens/Areas/Jardim.jpg",
        map: "/imagens/Mapas/Jardins-mapa.jpg",
        description: "Os Jardins da Rainha são uma área ornamentada e refinada, repleta de trepadeiras, portões e estruturas antigas que contrastam com o aspecto selvagem de outras zonas.\n\nA região contém enigmas de ambiente, caminhos bloqueados por portas e áreas que exigem exploração cuidadosa para acessar plataformas secretas. É também um espaço ligado a eventos de história e personagens centrais — alguns encontros e locais aqui influenciam o andamento do enredo e a compreensão do passado de Hallownest.\n\nMesmo sem ser a área mais hostil, os jardins escondem perigos e recompensas para jogadores que investigam cada canto.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "ancient-basin",
        name: "Bacia Antiga",
        image: "/imagens/Areas/Bacia.jpg",
        map: "/imagens/Mapas/Bacia-mapa.jpg",
        description: "A Bacia Antiga é um ambiente sombrio e silencioso, marcado por ruínas enterradas e criaturas corroídas pela infecção que percorre Hallownest.\n\nEste local é pesado em atmosfera: trilhas escuras, inimigos furtivos e trechos que exigem exploração cuidadosa e leitura do mapa. A Bacia tem papel central em segmentos importantes da trama e contém pontos onde o jogador aprende mais sobre a origem do mal que atingiu o reino.\n\nPrepare-se para confrontos difíceis e pela sensação de que cada passo revela mais da história trágica de Hallownest.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "abyss",
        name: "O Abismo",
        image: "/imagens/Areas/Abismo.jpg",
        map: "/imagens/Mapas/Abismo-mapa.jpg",
        description:
            "O Abismo é uma fenda profunda e silenciosa sob Hallownest, onde a luz mal atravessa e o próprio ar parece sugar o som. O ambiente é dominado por poços vertiginosos, paredes cobertas por sombras líquidas e plataformas instáveis que desmoronam ao toque. A navegação exige cuidado: seções verticais extensas forçam o jogador a controlar quedas e usar correntes de ar imprevisíveis para alcançar saliências escondidas.\n\nCriaturas sombrias, conhecidas como Sombras do Abismo, surgem das trevas e perseguem qualquer intruso, obrigando o jogador a manter atenção constante. Além disso, fissuras de vazio e fluxos instáveis tornam o percurso ainda mais desafiador. Apesar da hostilidade, o Abismo guarda segredos sobre a origem dos Vasos e do poder do Vazio, oferecendo recompensas únicas a quem ousar explorá-lo até o fim.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "howling-cliffs",
        name: "Penhascos Uivantes",
        image: "/imagens/Areas/Penhascos.jpg",
        map: "/imagens/Mapas/Penhascos-mapa.jpg",
        description: "Os Penhascos Uivantes são extensões rochosas e ventosas que se estendem para o exterior do reino, com correntes de ar fortes e seções que testam a travessia.\n\nO terreno é mais aberto em comparação com cavernas internas, com longos saltos, inimigos voadores e pontos de observação que revelam grandes porções do mapa. Há rotas alternativas e plataformas que, quando bem usadas, permitem atalhos valiosos para outras regiões.\n\nA sensação de escala e a presença de riscos por queda tornam esta área memorável tanto pelo desafio quanto pelo design paisagístico.",
        bosses: [],
        npcs: [
            {
                name: "Mato",
                description:
                    "Mato é um mestre espadachim dedicado e sereno, irmão de Oro.\n\nEle valoriza disciplina, foco e paciência, oferecendo instruções valiosas em artes marciais e técnicas refinadas de combate. Conversar com Mato pode revelar segredos sobre estilos de luta esquecidos.",
                image: "/imagens/NPCs/Mato.jpg"
            }
        ],
        secondary: undefined
    },


    {
        id: "kingdoms-edge",
        name: "Borda do Reino",
        image: "/imagens/Areas/Borda.jpg",
        map: "/imagens/Mapas/Borda-mapa.jpg",
        description: "A Borda do Reino é um território acidentado com abismos, pontes suspensas e inimigos mais agressivos — uma zona que sinaliza a aproximação das partes finais do jogo.\n\nO ambiente aqui é escarpado e punitivo: quedas fatais, inimigos com projéteis e encontros que exigem timing e domínio de movimento. É também uma área de passagem para localidades secretas e para confrontos que colocam à prova as habilidades acumuladas do jogador ao longo da aventura.\n\nPara os exploradores, a Borda guarda segredos que recompensam paciência e observação do nível.",
        bosses: [],
        npcs: [
            {
                name: "Oro",
                description:
                    "Oro é um guerreiro orgulhoso e de temperamento forte, sempre em busca de aprimorar suas habilidades.\n\nEle pode oferecer treinamentos de combate e desafios únicos para jogadores que desejam dominar técnicas de luta avançadas. Apesar de sua postura rígida, Oro respeita aqueles que demonstram verdadeira determinação.",
                image: "/imagens/NPCs/Oro.jpg"
            },
        ],
        secondary: undefined
    },


    {
        id: "the-hive",
        name: "A Colmeia",
        image: "/imagens/Areas/Comeia.jpg",
        map: "/imagens/Mapas/Comeia-mapa.jpg",
        description: "A Colmeia é um enorme complexo subterrâneo habitado por enxames e criaturas com comportamento em grupo — um ambiente fechado e sufocante.\n\nA navegação exige atenção a padrões de ataque dos inimigos em enxame e ao uso de áreas seguras entre ondas de ataques. Além disso, a Colmeia possui câmaras amplas e passagens estreitas que escondem itens e desafios de plataforma.\n\nÉ um bom local para testar resistência em combates prolongados e para encontrar segredos ligados à fauna de Hallownest.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "deepnest",
        name: "Ninho Profundo",
        image: "/imagens/Areas/Ninho.jpg",
        map: "/imagens/Mapas/Ninho-mapa.jpg",
        description: "Ninho Profundo é uma das áreas mais opressivas do jogo: um emaranhado de túneis escuros, passagens estreitas e criaturas predatórias que perseguem o jogador.\n\nO ambiente é hostil tanto na navegação — com caminhos aparentemente repetitivos e rotas gigantescas — quanto nos combates, pois inimigos aqui têm comportamento agressivo e armadilhas emboscadas. A atmosfera claustrofóbica e a trilha sonora tornam Deepnest memorável; explorar suas camadas mais profundas exige paciência e nervos de aço.\n\nEsconderijos e itens valiosos esperam quem se arriscar, mas o custo é uma série de confrontos difíceis e puzzles de movimentação.",
        bosses: [],
        secondary: undefined
    },


    {
        id: "blue-lake",
        name: "Lago Azul",
        image: "/imagens/Areas/Lago.jpg",
        map: "/imagens/Mapas/Lago-mapa.jpg",
        description:
            "O Lago Azul (Blue Lake / Lake of Unn) é uma enseada calma e luminosa localizada como sub-área do Greenpath.\n\nA água reflete minerais azulados e cria uma atmosfera serena — ao mesmo tempo esconde segredos e caminhos submersos. Pequenas cavernas e bordas escorregadias convidam a exploração com atenção ao ambiente.\n\nÉ também o local ligado a Unn, uma criatura aquática peculiar que recompensa o jogador com itens ou pequenas interações quando encontrada. Boa para relaxar entre áreas mais hostis e para buscar segredos de exploração.",
        bosses: [],
        secondary: true,
        parent: "resting-grounds",
    },


    {
        id: "mantis-village",
        name: "Vila dos Louva-a-Deus",
        image: "/imagens/Areas/Vila.jpg",
        map: "/imagens/Mapas/Vila-mapa.jpg",
        description:
            "A Vila dos Louva-a-Deus (Mantis Village) é um assentamento profundo dentro dos Ermos Fúngicos, lar da tribo dos mantis.\n\nArquitetura baseada em plataformas rochosas e arenas naturais, a vila funciona como centro cultural e de ritos para os mantis — inclui áreas de prova e santuários.\n\nA entrada segura normalmente exige que o jogador enfrente ou ganhe respeito dos guardiões locais; explorar a vila revela lore sobre a tribo e atalhos úteis para outras partes dos Ermos.",
        bosses: [
            {
                name: "Senhores Louva-a-Deus",
                description:
                    "Três guerreiros altamente hábeis que governam a Vila dos Louva-a-Deus e aparecem como luta opcional.\n\nA batalha é rápida e técnica: ataques em formação, esquivas curtas e golpes sincronizados. Aprender a cancelar e punir as aberturas das três formas é essencial para vencer.\n\nDica: memorize os padrões, use pequenos saltos e dash para escapar dos combos e aproveite as janelas curtas após as sequências para causar dano consistente.",
                image: "/imagens/Bosses/Lords.jpg"
            }
        ],
        secondary: true,
        parent: "fungal-wastes",
    },


    {
        id: "coliseum-of-fools",
        name: "Coliseu dos Tolos",
        image: "/imagens/Areas/Coliseu.jpg",
        map: "/imagens/Mapas/Coliseu-mapa.jpg",
        description:
            "O Coliseu dos Tolos é uma arena de combates por ondas, localizada no topo da Borda do Reino (Kingdom's Edge).\n\nFunciona como um desafio de sobrevivência em testes: o jogador enfrenta sequências de inimigos em arenas controladas, cada prova com regras próprias e recompensas (geo, itens, e às vezes chaves para progressão).\n\nÉ um ótimo local para treinar combate em espaço confinado e testar builds/charms contra variações de inimigos — as provas crescem em dificuldade à medida que se avança.",
        bosses: [],
        secondary: true,
        parent: "kingdoms-edge",
    },


    {
        id: "white-palace",
        name: "Palácio Branco",
        image: "/imagens/Areas/Palacio.jpg",
        map: "/imagens/Mapas/Palacio-mapa.jpg",
        description:
            "O Palácio Branco é uma área do Dream Realm (sonho) que representa a antiga residência do Pale King — hoje dominante por desafios de plataforma extremamente exigentes.\n\nA entrada é obtida via Dream Nail (Awoken Dream Nail) em local ligado aos Kingsmoulds; o palácio é famoso por suas seções com lâminas, serras e plataformas que exigem precisão, timing e uso avançado de dash/jump/pogo.\n\nPossui subáreas notórias (como o Path of Pain) e oferece recompensas de lore e itens para quem completa seu périplo. Não é tanto uma área de chefes, mas sim de prova de habilidade.",
        bosses: [],
        secondary: true,
        parent: "ancient-basin",
    },


    {
        id: "godhome",
        name: "Lar dos Deuses",
        image: "/imagens/Areas/Deuses.jpg",
        map: "/imagens/Mapas/Deuses-mapa.jpg",
        description:
            "O Lar dos Deuses (Godhome) é uma área especial introduzida pelo DLC Godmaster — situada no Dream Realm e dedicada a arenas de batalha e pantheons de bosses.\n\nAqui o jogador pode enfrentar versões em série de muitos chefes do jogo em desafios progressivos chamados 'Pantheon', além de áreas como a Hall of Gods. O conteúdo é orientado a combates e testes de resistência e domínio.\n\nAviso: trata-se de conteúdo de DLC (Godmaster) — contém lutas opcionais, modos difíceis e recompensas para jogadores que buscam um desafio extremo.",
        bosses: [],
        secondary: true,
        parent: "royal-waterways",
    },


    {
    id: "grimm-troupe",
    name: "Trupe do Grimm",
    image: "/imagens/Areas/Grimm.jpg",
    description:
        "A Trupe do Grimm é um evento especial que aparece em Dirtmouth quando o jogador acende a Lanterna do Pesadelo nos Penhascos Uivantes.\n\nEla traz o Mestre Grimm e seus seguidores, pedindo que o cavaleiro colete Chamas do Pesadelo espalhadas por Hallownest.\n\nEsse evento transforma Dirtmouth, revelando rituais sombrios e culminando em batalhas contra Grimm e sua forma suprema: o Nightmare King Grimm.",
    bosses: [{
    name: "Mestre da Trupe Grimm",
    description: "Líder carismático e enigmático da Trupe que aparece em Dirtmouth. Grimm desafia o cavaleiro como parte do ritual das Chamas do Pesadelo.\n\nSua luta combina elegância e perigo: ataques de projéteis, teletransportes rápidos e movimentos de palco que exigem leitura e precisão.",
    image: "/imagens/Bosses/Grimm.jpg"
},
{
    name: "Rei Pesadelo Grimm",
    description: "A forma suprema e verdadeira do Mestre da Trupe. O Nightmare King Grimm é uma das batalhas mais intensas de Hollow Knight, marcada por velocidade extrema, chuva de projéteis e padrões de ataque implacáveis.\n\nÉ um teste definitivo de reflexo e resistência, sendo considerado um dos chefes mais difíceis de todo o jogo.",
    image: "/imagens/Bosses/GrimmPesadelo.jpg"
},],
    secondary: true,
    npcs: [
        {
    name: "Divina",
    description:
        "Divina é uma misteriosa integrante da Trupe do Grimm, encontrada em Dirtmouth durante o evento da trupe.\n\nCom sua aparência excêntrica e aura enigmática, ela se oferece para aprimorar o amuleto Coração Frágil, transformando-o em Coração Inquebrável — desde que o Cavaleiro pague um alto preço em Geo.\n\nApesar de sua função peculiar, pouco se revela sobre sua verdadeira natureza ou sobre seu papel dentro dos rituais da Trupe.",
    image: "/imagens/NPCs/Divina.jpg"
},
    ],
    parent: "dirtmouth",
},


];


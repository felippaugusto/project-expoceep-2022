// variables globals
const playerName = sessionStorage.getItem('playerName');
const playerNameFormat = playerName[0].toUpperCase() + playerName.substring(1);
const model = $(".model");
const counter = $("#counter");
const btnOptions = $(".btn");
const btnOption1 = $(".option1");
const btnOption2 = $(".option2");
const btnOption3 = $(".option3");
const tagImage = $("#image");
const transitionImage = $(".transitionImage");
const messageOption = $(".message");
const audioInBackground = $("audio");
const chapter = document.querySelector(".chapter");
const playerOrNPC = document.querySelector("#person");
const story = document.querySelector(".story");
const introductionPhraseOne = document.querySelector("#introduction #introductionPhraseOne");
const introductionPhraseTwo = document.querySelector("#introduction #introductionPhraseTwo");
let time = 0;
let flag = 1;
let flagsOptions;
let interval;
let flagInterval = 10;

// introduction
const arrayIntroduction = [
    "Essa é um história de terror fictícia, criada com o intuito de entreter",

    "Espero que se divirta e bom jogo",
];

// arrays main story
const arrayChapterOne = [
    "O final de uma tarde de verão.",

    "Caminho pela vila sem rumo, apenas esperando o tempo passar, até chegar em uma praça e decidi sentar em um banco.",

    `${playerOrNPC.textContent = "Jogador:"} Que tédio…, (me encosto no banco da praça, observando o voo dos pássaros e o pôr do sol alaranjado no céu)`,

    `${playerOrNPC.textContent = "Voz desconhecida:"} O sol está bonito hoje, não acha?`,

    `${playerOrNPC.textContent = "Jogador:"} (Desvio o olhar para a garota de óculos)`,

    // after choose option 1
    `${playerOrNPC.textContent = "Voz desconhecida:"} Vou me sentar aqui também...`,

    `${playerNameFormat.textContent = "Jogador:"} Está bem..., (Escorrega para o lado). Você mora aqui?`,

    `${playerNameFormat.textContent = "Voz desconhecida:"} Sim, mudei para cá faz pouco tempo. E eu percebi que ainda não me apresentei haha, meu nome é Emily!`,

    `${playerNameFormat.textContent = "Jogador:"} Legal conhecer você, Emily. Me chamo ${playerNameFormat}. (olho para meu relógio de braço e percebo que está escurecendo).`,

    // after choose option 2
    // option 1
    `${playerOrNPC.textContent = playerNameFormat}: Está ficando escuro demais, você vai voltar para sua casa? Poderíamos ir conversando... (Me levanto do banco esperando a resposta).`,

    `${playerOrNPC.textContent = "Emily:"} Tá bom, podemos ir (Se levanta também).`,

    `(Você e Emily vão caminhando pela vila conversando por uma estrada rural que fica em
    uma das extremidades da Cidade próxima).`,

    // option 2
    `(Me levanto do banco olhando para Emily).`,

    `${playerOrNPC.textContent = playerNameFormat}: Eu preciso ir, está ficando muito tarde... Até mais. (Acena dando tchau).`,

    `${playerOrNPC.textContent = "Emily:"} Oh, é mesmo!! Nem vi a hora passar… Até mais ${playerNameFormat}. (Acena e sai andando).`,

    `Volto para casa sentindo um mal-estar, e a vila está tão cinza quanto a parede do meu quarto.`,

    `Olho ao redor e sinto um arrepio na nuca, é apenas eu ou as coisas estão estranhas mesmo?`,

    `É ruim estar sozinho...`,

    // option 3
    `${playerOrNPC.textContent = playerNameFormat}: Então, você está trabalhando ou só estudando? É que normalmente quem vem morar aqui é por causa de trabalho ou por estudos, já que a vila é próxima da cidade grande.`,

    `${playerOrNPC.textContent = "Emilly:"} Eu estava passeando hoje por aqui, vendo as lojas… Mas eu estou só estudando no momento, é difícil focar nos estudos e ter que trabalhar ao mesmo tempo. (Emily se levanta do banco) Eu preciso ir, preciso terminar de arrumar a bagunça da mudança.`,

    `${playerOrNPC.textContent = playerNameFormat}: A-Ata, tá bom, eu também já vou indo. Até mais Emily. (se despede e espera por
    mais uns minutos).`,

    `${playerOrNPC.textContent = "Emilly:"} Thau ${playerNameFormat}. (vai embora correndo).`,

    `Após a ida de Emily você continua no banco ouvido o barulho do silêncio.`,

    // final chapter 1
    `Chegando em sua casa, a noite já tinha surgido.`,

    `${playerOrNPC.textContent = "Jogador:"} Vou comer qualquer coisa que seja rápido...`,

    `Sendo assim, após comer, vou ao banheiro, tomo um banho e depois de escovar os dentes, vou me deitar.`,

    `Acordo no meio da madrugada, sinto falta de ar e palpitações, um pesadelo, eu tive um pesadelo.`,

    `Me sento na cama na tentativa de recuperar o fôlego, e então eu vejo a silhueta de um
    alguém na janela do meu quarto, não fora, mas dentro dele.`,

    `Os olhos, os olhos eram de como uma coruja, estranhas e alertas. Ele me observava como se eu fosse uma presa… Eu sou uma presa.`,

    `Sinto meu corpo pesar, as paredes parecem se aproximar… O que é isso?`,

    `Acordo confuso e acendo a luz, olho ao redor e não vejo nada. Um sonho, eu tive um sonho.`,
];

const arrayChapterTwo = [
    `Dia seguinte.`,

    `“sons de pássaros ao acordar.”`,

    `Você se levanta, cansado apesar de ter dormido e vai tomar um banho.`,

    `No meio do banho você escuta alguém batendo em sua porta.`,

    `${playerOrNPC.textContent = playerNameFormat}: Quem é o maluco que bate na porta dos outros às seis da manhã?! Que merda. (pega uma toalha e vai até a porta atender).`,

    `${playerOrNPC.textContent = "Oliver"}: Eai ${playerNameFormat}, tudo bem? Sei que está cedo, mas o que você vai fazer hoje a noite? A galera resolveu fazer um cinema ao ar livre e bem, você sabe… Queremos saber se está afim de ir, vai ser daora, muita comida e vai até rolar uma fogueira.`,

    // After choose options 3
    `Fecho a porta bruscamente e volto para o banho.`,

    `Entro no box e ligo o chuveiro.`,

    `Minhas mãos formigam.`,

    `Estou zonzo prestes a desmaiar.`,

    `Por um segundo vejo a silhueta que me assombra durante a noite.`,

    `Sem forças me apoio na parede e tudo fica escuro.Minha visão volta segundos depois e vejo minha mão sangrando.`,

    `limpo na água do chuveiro e percebo que não há corte nela.`,

    `${playerOrNPC.textContent = playerNameFormat}: Que estranho.`,

    `Olho para as duas mãos com estranheza.`,

    `Saio do banheiro e termino de me arrumar, preparo um sanduíche e vou para a faculdade.`,
];

const arrayChapterThree = [
    `Após o termino da faculdade caminho até eles.`,

    `${playerOrNPC.textContent = playerNameFormat}: Oi gente, vocês precisam que eu leve alguma coisa hoje a noite?`,

    `${playerOrNPC.textContent = "Maya"}: (Animada, ela corre para me abraçar). Bom dia ${playerNameFormat}.`,

    `${playerOrNPC.textContent = "Maya"}: Parece feliz hoje... Você poderia levar um pacotinho daqueles biscoitos que você compra no centro? Eles são deliciosos!`,

    `${playerName.textContent = "Dominic"}: Ei, eu também quero provar essas bolachas que você compra, ou biscoitos, tanto faz... Quero ver se são bons mesmo.`,

    `${playerName.textContent = playerNameFormat}: Beleza, irei comprar eles hoje a tarde, espero vocês lá, vai ser na casa da Maya como sempre.`,

    `Todos respondem com um tom estranho: Sim ${playerNameFormat}.`,

    `Peguei um ônibus até chegar no centro da cidade, fui até a loja de doces da Dona Tina e comprei 2 pacotes de biscoitos.`, // row 7

    `Assim que comprei os biscoitos, voltei para a casa e me preparei para uma looonga noite de filmes.`,

    `Estou pronto para sair e de repente sinto calafrios.`,

    `arrepios da cabeça aos pés.`,

    `meus olhos se voltam para a porta e consegui ver nitidamente a silhueta de um homem…`,

    `Seu corpo estava coberto de terra e sangue.`,

    `seus olhos eram calmos e certeiros.`,

    `E o medo percorreu por mim.`,

    `${playerOrNPC.textContent = playerNameFormat}: MAS O QUE VOCÊ QUER COMIGO?`,

    `(Dou alguns passos para trás)`, // row 16

    `${playerOrNPC.textContent = "Morte"}: Você sabe... `,

    `${playerOrNPC.textContent = "Morte"}: Não finja que não entendeu, você quem me chamou.`,

    `${playerOrNPC.textContent = "Morte"}: Acha que não ouvi suas 'preces', sua vontade incandescente de sumir com todos, de acabar com tudo isso.`,

    `${playerOrNPC.textContent = "Morte"}: Seus pais, irmãos e "amigos"... Haha, será que podemos chamar isso de amigos? Eles não merecem você, eles não ligam para sua presença, eles te enojam.`,

    `${playerOrNPC.textContent = "Morte"}: Você é um peso, um fardo para todos.`,

    `${playerOrNPC.textContent = "Morte"}: Apenas um idiota mimado, que nunca lutou por nada na vida.`,

    `${playerOrNPC.textContent = "Morte"}: Nem seus esforços valeram algo, você é totalmente inútil pra eles.`,

    `${playerOrNPC.textContent = "Morte"}: Venha comigo, vamos mostrar para todos o quão você é capaz, que você, ${playerOrNPC.textContent = playerNameFormat}, é melhor que eles, você é superior, eu enxergo algo em você, uma escuridão horrenda, medonha e selvagem.`,

    `${playerOrNPC.textContent = playerNameFormat}: Você mente, é um psicopata nojento, eu não acredito em nada que você disse. Me deixe em paz e eu não denuncio você para a polícia.`,

    `${playerOrNPC.textContent = "Morte"}: Para a polícia?`, // row 26

    `HaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa`,

    `Você acredita que isso vai me fazer parar?`,

    `Oh seu pobre tolo, e mesmo que não concorde comigo, sinto em dizer que está tarde demais.`,

    `Até mesmo para aquela sua nova amiga… Como se chama mesmo?`,

    `Aah, Emilly! O que eu poderia dizer para te reconfortar?,`,

    `Meus pêsames?`,

    `${playerOrNPC.textContent = playerNameFormat}: O que?! O QUE VOCÊ FEZ SEU MANÍACO ESTÚPIDO?`,

    `${playerOrNPC.textContent = playerNameFormat}: O que.....`,

    `Horrorizado, ouço várias sirenes passando pelas ruas da vizinhança.`,

    `Lágrimas escorrem pelo meu rosto e fujo para a casa de Maya, a noite já havia chegado.`, // row 36

    `Bato na porta da casa de Maya.`,

    `MAYA, ABRA A PORTA. ABRA A PORTA AGORA!!!`,

    `${playerOrNPC.textContent = "Maya"}: O que aconteceu ${playerNameFormat}?`,

    `${playerOrNPC.textContent = "Dominic"}: Está atrasado ${playerNameFormat}, aonde você estava?`,

    `${playerOrNPC.textContent = playerNameFormat}: Ufa....`,

    `${playerOrNPC.textContent = playerNameFormat}: Espera, cade o Oliver?`,

    `${playerOrNPC.textContent = "Maya"}: Está lá atrás, por quê....?`,

    `${playerOrNPC.textContent = "Oliver"} SOCORRO!! ME AJUDEM! SOCORRO!! ALGUÉM M...`,  // row 44

    `.......`,

    `.......`,

    `Dominic, Maya e eu corremos até a varanda, quando chegamos lá Oliver estava jogado no chão, seu corpo dilacerado e sua mão decepada.`,

    `Por segundos pude ouvir a respiração falha de cada um.`,

    `pude ver o desespero nos olhares, seus corpos tremendo e…`,

    `Ao lado de Oliver em pé, novamente a "sombra."`,

    `ou melhor.`,

    `A morte.`,

    `Era tão grotesco quanto pensava, não conseguia… não conseguia encarar seus olhos, o cheiro era horrível que fedia a porcos.`,

    `${playerOrNPC.textContent = "Morte"}: Faltam apenas dois, Jogador, que tal jogar um jogo? Podemos acabar com tudo isso de uma vez.`, // row 54

    `${playerOrNPC.textContent = playerNameFormat}: Você QUER JOGAR? E esse jogo estúpido vai trazê-los de volta?`,

    `${playerOrNPC.textContent = "Morte"}: Existe uma frase muito conhecida como "Cuidado com o que você deseja."`,

    `${playerOrNPC.textContent = "Morte"}: Você desejou, com todo o coração, você desejou por muitas noites, eu ouvi seu chamado e estou aqui.`,

    `${playerOrNPC.textContent = "Morte"}: Vamos, se escondam, e o primeiro que eu encontrar morre, e o segundo também…`,

    `FUJAM! SE SEPAREM!!!.`,

    `Essa foi minha frase clichê.`, // row 60 

    `Olhei para trás e percebi que não estava sonhando.`,

    `Não adiantava fazer nada, pois eu sabia o que estava por vir, eu estava sentindo meu coração batendo e bombeando tudo que ele podia.`,

    `Cai embaixo de uma árvore e sozinho, sem ter como pedir ajuda, apenas a árvores e o brilho do luar.`,

    `Segundos depois a morte havia chegado, encarei ela por um instante e logo desviei o olhar.`,

    `Novamente, enfrentei meu sentimento de um ser fraco e encarei a morte novamente.`,

    `uma figura alta e perturbadora.`,

    `${playerOrNPC.textContent = "Morte"}: espero que entenda a dor, e lide com ela ${playerNameFormat}.`,

    `(Era como se olhar no espelho).`, // row 68
];
// ends array story

// arrays paths of main story
const arrayMovie = [
    `${playerOrNPC.textContent = "Emily"}: Péssimo!!!`,

    `${playerOrNPC.textContent = playerNameFormat}: Quem escolher esse filme? Fala sério! Que péssimo roteiro.`,

    `${playerOrNPC.textContent = "Maya"}: É um filme da década de 70, esperava o que?`,

    `${playerOrNPC.textContent = "Oliver"}: : Foi você quem escolheu o filme?`,

    `${playerOrNPC.textContent = "Maya"}: Sim. (Disse Maya, segurando o riso).`,

    `${playerOrNPC.textContent = "Dominic"}: Uuh meus olhos sangraram.`,

    `${playerOrNPC.textContent = "Dominic"}: Você dormiu quase metade do filme...`,

    `${playerOrNPC.textContent = "Dominic"}: Estava tão ruim que eles sangraram até fechar.`,

    `Emily se levanta.`,

    `${playerOrNPC.textContent = "Maya"}: Gente olha o para fora.`,

    `${playerOrNPC.textContent = "Maya"}: Pelo menos ganhamos esse amanhacer lindo.`,

    `Todos olham, admirados e encantados pelo lindo amanhecer.`,

    `${playerName.textContent = playerNameFormat}: O sol podia ser azul.`,
]

const arraySuicide = [
    `${playerOrNPC.textContent = playerNameFormat}: Eu não sei, vejo isso depois.  Aliás, não pensaram em me mandar uma mensagem ao invés de ter vindo me incomodar às SEIS da manhã. Estou com pressa, se manda.`,

    `Volto para o banho e ligo o chuveiro.`,
    
    `Minhas mãos formigam.`,

    `Estou zonzo prestes a desmaiar.`,
    
    `Me encosto na parede e tudo fica escuro. Minha visão volta segundos depois e vejo minha mão sangrando, limpo na água do chuveiro e percebo que não há corte nela.)`,

    `${playerOrNPC.textContent = playerNameFormat}: Que estranho.`,

    `Olho para as duas mãos com estranheza.`,

    `Saio do banheiro e vou me arrumar para a faculdade.`,

    `Porém, sinto calafrios novamente...`,

    `arrepios da cabeça aos pés.`,

    `Meus olhos se voltam para a porta e consegui ver nitidamente a silhueta de um homem.`,

    `Seu corpo estava coberto de terra e sangue.`,

    `seus olhos eram calmos e certeiros. E o medo percorreu por mim.`,

    `Fico horrorizado olhando fixamente para seus olhos, até que eu percebo que não tem mais volta, não tem mais caminho... é a morte.`,

    `Assim sendo a sombra vai embora, mas as lembranças do passado ainda me assombravam.`,

    `Eu delirava todos os dias, passava noites acordado com medo do amanhã, com medo dele.`,

    `voltar… Eu estava perdido, perdido em um labirinto.`,

    `Meses se passaram, eu estava corrompido, morrendo pouco a pouco. Sufocado no próprio medo.`,

    `Não havia saída, o labirinto era intenso e frio, a solidão me dominava, é péssimo estar
    sozinho.`,

    `não tinha ninguém… Apenas a corda e eu.`,
]

const arrayAssassination = [
    `Dia cinzento.`,

    `${playerOrNPC.textContent = "Morte"}: Era como se olhar no espelho.`,

    `Eu pensei...`,

    `Por fim, eu aceitei.`,

    `${playerOrNPC.textContent = playerNameFormat}: Olhei para minhas mãos manchadas de sangue e sorri.`,

   `${playerOrNPC.textContent = playerNameFormat}: HA`,
   
   `${playerOrNPC.textContent = playerNameFormat}: HAHAHA`,
   
   `${playerOrNPC.textContent = playerNameFormat}: HAHAHAHAHAHAHHAAHAHA`,

   `${playerOrNPC.textContent = playerNameFormat}: Eu me deliciei nas sensações, na adrenalina que percorria pelo meu corpo. Eu me senti tão bem.`,

    `${playerOrNPC.textContent = playerNameFormat}: O amanhecer já tinha chegado, e com ele nuvens escuras o acompanhavam, era uma manhã chuvosa, o céu estava de luto.`,

    `Ainda podia ouvi-los.`,

    `Podia sentir o desespero.`,

    `Seus gritos de misericórdia.`,

    `Voltei até os corpos para enterrá-los.`,

    `Quando terminei a chuva despencou.`,

    `Como eu tinha dito, o céu estava de luto e a chuva era uma bênção.`, 
]
// ends paths of main story

// game is over
const arrayFinalStory = [
    "Acabou",

    "Obrigado por jogar :)",
]

$(document).ready(function() {
    playerOrNPC.textContent = "";
    introductionOrFinal(arrayIntroduction, 0, 2000, 9000, "TRACKS/machine-typing.mp3");
    
    changingImages("IMG/IMGFULLHD/paisagem14.png");

    btnOptions.click(function() {
        flag++;
        messageOption.removeClass("active");
        clearInterval(interval);
        setTimeout(function() {
            model.addClass("active");
            counter.addClass("active");
            messageOption.addClass("active");
            executionStory();
        }, 3500);
    })

    // path options
    btnOption1.click(function() {
        flagsOptions = 1;
    });

    btnOption2.click(function() {
        flagsOptions = 2;
    })

    btnOption3.click(function() {
        flagsOptions = 3;
    })
});

// function machine writing text
let textoArray;
position = 0;
let finalPosition = 0;
function typeWriter(elementText, arrayStory, audioTyping) {
    if(elementText === 0 && arrayStory === 0 && position === 0) {
        throw "está vazio";
    }
    let counter = 60;
    elementText.textContent = arrayStory[position];
    textoArray = elementText.innerHTML.split('');
    elementText.innerHTML = "";

    textoArray.forEach((letra, i) => {
        counter += 60;
        setTimeout(function() {
            elementText.innerHTML += letra;

            if(!audioTyping == 0) {
                audioInBackground.attr("src", audioTyping);
            }
        
            if(story.textContent.length == textoArray.length) {
                setTimeout(function() {
                    chapter.textContent = "";
                    position++;
                    typeWriter(story, arrayStory);
                    executionStory();
                }, 4000);
            }
            else if(chapter.textContent.length == textoArray.length) {
                setTimeout(function() {
                    story.textContent = "";
                    position++;
                    typeWriter(story, arrayStory);
                    executionStory();
                }, 4000);
            }
        }, counter);
    })  
}

// changing images smoontly
function changingImages(image) {
    transitionImage.removeClass("active");
    setTimeout(function() {
        chapter.textContent = "";
        story.textContent = "";
        transitionImage.addClass("active");
        tagImage.attr("src", `${image}`);
    }, 2100);
}

// function that changes music with animation
let intervalMusic;
let volume = 1;
let whatMusic;
function changingBackgroundMusic() {
    if(volume > 0) {
        audioInBackground.prop("volume", volume.toFixed(1));
        volume -= 0.1;
    }
    else {
        clearInterval(intervalMusic);
        setTimeout(function() {
            audioInBackground.prop("volume", 1);
            volume = 1;
            audioInBackground.attr("src", whatMusic);
        }, 1000);
    }
}

// counter options
function counterOptions() {
    const numberCounter = counter.text();
    if(numberCounter == 0 && flagInterval == 0) {
        clearInterval(interval);
        messageOption.removeClass("active");

        setTimeout(function() {
            flagsOptions = 1;
            model.addClass("active");
            counter.addClass("active");
            messageOption.addClass("active");
            flag++;
            executionStory();
        }, 2500);
    }
    else {
        counter.text(numberCounter - 1);
        flagInterval--;
    }
}

function introductionOrFinal(introductionOrFinal, condition, timerFirstPhrase, timerSecondPhrase, audioTyping) {
    introductionPhraseOne.textContent = "";
    introductionPhraseTwo.textContent = "";

    let conditionIntroductionOrFinal = condition;
    const introductionBox = $("#introduction");
    introductionBox.removeClass("active");
    time = timerFirstPhrase;
    
    setTimeout(function() {
        position = 0;
        typeWriter(introductionPhraseOne, introductionOrFinal, audioTyping);
    }, time);

    time = timerSecondPhrase;
    setTimeout(function() {
        position = 1;
        typeWriter(introductionPhraseTwo, introductionOrFinal, audioTyping);
    }, time);

    if(time == timerSecondPhrase && conditionIntroductionOrFinal == 0) {
        time = 17000;
        setTimeout(function() {
            introductionBox.addClass("active");
        }, time);

        setTimeout(function() {
            audioInBackground.attr("src", "TRACKS/sorriso.mp3");
            console.log("passou pela introdução");
            flag = 1;
            position = 0;
            finalPosition = 4;
            utils.pauseAfterChooseOption(chapter, arrayChapterOne);
        }, time)
    }
}

let noRepeat = 0;
const utils = {
    chooseOptions(time, textOptionOne, textOptionTwo, textOptionThree) {
        setTimeout(function() {
            counter.text("10");
            flagInterval = 10;
            model.removeClass("active");
            btnOption1.text(textOptionOne);
            btnOption2.text(textOptionTwo);
            btnOption3.text(textOptionThree);
            counter.removeClass("active");
            interval = setInterval(counterOptions, 1500);
        }, time);
    },

    error() {
        try {
            position = 0;
            textoArray = 0;
            typeWriter(0, 0, 0);
        } catch(e) {
            console.log(e);
        }
    },

    pauseAfterChooseOption(storyOrChapter, arrayStory) {
        setTimeout(function() {
            typeWriter(storyOrChapter, arrayStory, 0);
        }, 4500);
    },

    executingErrorAndOption(time, option1, option2, option3) {
        noRepeat = 0;
        utils.error();
        if(option1 == "" || option2 == "" || option3 == "") {
            console.log("Não tem nada");
        }
        else {
            utils.chooseOptions(time, option1, option2, option3);
        }
    },

    executingStoryAndImage(positionStory, finalPositionStory, changingImagesStory, story, arrayStory) {
        noRepeat = 1;
        position = positionStory;
        finalPosition = finalPositionStory;
        changingImages(changingImagesStory);
        utils.pauseAfterChooseOption(story, arrayStory);
    }
}

// execution of the story
let condition = false;
function executionStory() {
    if(position == finalPosition && flag == 1) {
        utils.executingErrorAndOption(9000, "Sim, o céu está realmente lindo.", "Olá, conheço você?", "(Fico sem responder)");
    }
    else if(flag == 2 && !noRepeat == 1) {
        utils.executingStoryAndImage(5, 8, "IMG/IMGFULLHD/paisagem7.png", story, arrayChapterOne);
        console.log("parte 2");
    }
    else if(position == finalPosition && flag == 2) {
        utils.executingErrorAndOption(10000, "Acompanhar Emily pela vila.", "Se despedir falando que está tarde e que precisa voltar para casa.", "Tentar puxar papo com Emily.");
    }
    else if(flag == 3 && flagsOptions == 1 && !noRepeat == 1) {
        console.log("parte 3 da opção 1");
        utils.executingStoryAndImage(9, 11, "IMG/IMGFULLHD/paisagem6.jpg", story, arrayChapterOne);
    }
    else if(flag == 3 && flagsOptions == 2 && !noRepeat == 1) {
        console.log("parte 3 da opção 2");
        utils.executingStoryAndImage(12, 17, "IMG/IMGFULLHD/paisagem6.jpg", story, arrayChapterOne);
    }
    else if(flag == 3 && flagsOptions == 3 && !noRepeat == 1) {
        console.log("parte 3 da opção 3");
        utils.executingStoryAndImage(18, 22, "IMG/IMGFULLHD/paisagem6.jpg", story, arrayChapterOne);
        condition = true;
    }
    else if(position == finalPosition && flag == 3 && flagsOptions == 3 && condition === true) {
        condition = false;
        console.log("Após a opção 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            utils.executingStoryAndImage(22, 30, "IMG/IMGFULLHD/paisagem2.jpg", story, arrayChapterOne);
            whatMusic = "TRACKS/nao-abra-a-porta.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
        }, 9000);
    }
    else if(position == finalPosition && flag == 3 && condition === false) {
        flag++;
        console.log("Acabou a parte 3 do capitulo 1");
        utils.executingErrorAndOption(8000, "", "", "");
        setTimeout(function() {
            executionStory();
        }, 10000);
    }
    else if(flag == 4 && !noRepeat == 1) {
        console.log("Capítulo 2");
        whatMusic = "TRACKS/musica-inicio-capitulo-2.mp3";
        intervalMusic = setInterval(changingBackgroundMusic, 500);
        utils.executingStoryAndImage(0, 5, "IMG/IMGFULLHD/paisagem14.png", chapter, arrayChapterTwo);
    }
    else if(position == finalPosition && flag == 4) {
        utils.executingErrorAndOption(18000, "Você aceita o convite.", "Você nega o convite", "Você claramente aceita esse convite.");
    }
    else if(flag == 5 && !noRepeat == 1){
        whatMusic = "TRACKS/capitulo-2-suspense.mp3";
        intervalMusic = setInterval(changingBackgroundMusic, 500);
        utils.executingStoryAndImage(6, 15, "IMG/IMGFULLHD/paisagem14.png", story, arrayChapterTwo);
    }
    else if(position == finalPosition && flag == 5){
        flag++;
        console.log(flag);
        console.log("Entrada do capítulo 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            utils.executingStoryAndImage(0, 6, "IMG/IMGFULLHD/paisagem14.png", story, arrayChapterThree);
            whatMusic = "TRACKS/sorriso.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
        }, 9000);
    }
    else if(position == finalPosition && flag == 6) {
        flag++;
        console.log("Continuação do capítulo 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/terror-capitulo-3.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(7, 36, "IMG/IMGFULLHD/paisagem14.png", story, arrayChapterThree);
        }, 9000);
    }
    else if(position == finalPosition && flag == 7) {
        flag++;
        console.log("Continuação do capítulo 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/terror-capitulo-3-final.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(37, 59, "IMG/IMGFULLHD/paisagem14.png", story, arrayChapterThree);
        }, 9000);
    }
    else if(position == finalPosition && flag == 8) {
        flag++;
        console.log(flag);
        console.log(flagsOptions);
        console.log("Continuação do capítulo 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/musica-suspense-capitulo-3.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(60, 68, "IMG/IMGFULLHD/paisagem14.png", story, arrayChapterThree);
        }, 9000);
    }
    else if(position == finalPosition && flag == 9 && flagsOptions == 1) {
        console.log("Deu certo opção um final");
        flag++;
        condition = true;
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/sorriso.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(0, 11, "IMG/IMGFULLHD/paisagem14.png", story, arrayMovie);
        }, 9000);
    }
    else if(position == finalPosition && flag == 9 && flagsOptions == 2) {
        console.log("Deu certo opção dois final");
        flag++;
        condition = true;
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/nao-abra-a-porta.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(0, 19, "IMG/IMGFULLHD/paisagem14.png", story, arraySuicide);
        }, 9000);
    }
    else if(position == finalPosition && flag == 9 && flagsOptions == 3) {
        console.log("Deu certo opção três final");
        flag++;
        condition = true;
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            whatMusic = "TRACKS/nao-abra-a-porta.mp3";
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            utils.executingStoryAndImage(0, 15, "IMG/IMGFULLHD/paisagem14.png", story, arrayAssassination);
        }, 9000);
    }
    else if(position == finalPosition && flag == 10 && condition === true) {
        condition = false
        console.log("deu certo");
        introductionOrFinal(arrayFinalStory, 1, 5000, 9000, "TRACKS/machine-typing.mp3");
    }
}

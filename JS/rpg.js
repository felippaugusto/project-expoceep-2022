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

// starts arrays story
const arrayChapterOne = [
    "O final de uma tarde de verão.",

    "Você está no centro de sua cidade, sem rumo, apenas caminhando e gastando seu tempo até chegar em uma praça, onde decide-se sentar-se em um banco, pois já havia andado bastante e estaria cansado.",

    `${playerOrNPC.textContent = "Jogador:"} Que tédio… (Você se encosta no banco da praça, observando o voo dos pássaros e observando o pôr do sol alaranjado no céu).`,

    `${playerOrNPC.textContent = "Voz desconhecida:"} O sol está bonito hoje, não acha? (Pergunta redirecionando seu olhar a você).`,

    `${playerOrNPC.textContent = "Jogador:"} (Desvio o olhar a pessoa a quem me faz a pergunta, aparenta ser uma moça de óculos).`,

    // after choose option 1

    `${playerOrNPC.textContent = "Voz desconhecida:"} (Olha para você com uma feição amigável) Vou me sentar aqui
    também...`,

    `${playerNameFormat.textContent = "Jogador:"} Está bem... ( Escorrega para o lado) Você mora aqui?`,

    `${playerNameFormat.textContent = "Voz desconhecida:"} Sim, me mudei para cá faz pouco tempo. Ahh falando nisso me chamo
    Emily (Emily sorri)`,

    `${playerNameFormat.textContent = "Jogador:"} Legal conhecer você, Emily. Me chamo ${playerNameFormat} ( olho para meu relógio de
    braço e percebo que está escurecendo).`,

    // after choose option 2
    // option 1
    `${playerOrNPC.textContent = playerNameFormat}: Está ficando escuro demais, você vai voltar para sua casa? Poderíamos ir
    conversando... (Se levanta no banco olhando para ela).`,

    `${playerOrNPC.textContent = "Emily:"} Tá bom, podemos ir (Se levanta também).`,

    `(Você e Emily vão caminhando pela vila conversando por uma estrada rural que fica em
    uma das extremidades da Cidade próxima).`,

    // option 2
    `( Me levanto do banco olhando para Emily)`,

    `${playerOrNPC.textContent = playerNameFormat}: Eu preciso ir, está ficando muito tarde... Até mais (Acena dando tchau).`,

    `${playerOrNPC.textContent = "Emily:"} Oh, é mesmo!! Nem vi a hora passar… Até mais, ${playerNameFormat} (Acena e sai andando)`,

    `(Você volta para casa, e o sentimento de solidão te consome, é ruim estar sozinho)`,

    // option 3
    `${playerOrNPC.textContent = playerNameFormat}: Então, você está trabalhando ou só estudando? É que normalmente quem vem morar aqui é por causa de trabalho ou por estudos, já que a vila é próxima da cidade grande.`,

    `${playerOrNPC.textContent = "Emilly:"} Eu estava passeando hoje por aqui, vendo as lojas…Mas eu estou só estudando no
    momento, é difícil focar nos estudos e ter que trabalhar ao mesmo tempo. ( Emily se levanta
    do banco) Eu preciso ir, preciso terminar de arrumar a bagunça da mudança.`,

    `${playerOrNPC.textContent = playerNameFormat}: A-Ata, tá bom, eu também já vou indo. Até mais, Emily ( se despede e espera por
    mais uns minutos).`,

    `${playerOrNPC.textContent = "Emilly:"} Thau ${playerNameFormat} vai embora correndo).`,

    `(Após a ida de Emily você continua no banco, ouvido o barulho do silêncio)`,

    // final chapter 1
    `(Chegando em sua casa, a noite já tinha surgido)`,

    `${playerOrNPC.textContent = "Jogador:"} Vou comer qualquer coisa que seja rápido...`,

    `(Sendo assim, Após comer, vou ao banheiro, tomo um banho e depois de escovar os dentes, vou me deitar)`,

    `(Acordo no meio da madrugada, sinto falta de ar e palpitações, um pesadelo, eu tive um pesadelo.`,

    `Me sento na cama na tentativa de recuperar o fôlego, e então eu vejo a silhueta de um
    alguém na janela do meu quarto, não fora, mas dentro dele.`,

    `Os olhos, os olhos eram de como uma coruja, estranhas e alertas. Ele me observava como se eu fosse uma presa… Eu sou uma presa.`,

    `Sinto meu corpo pesar, as paredes parecem se aproximar… O que é isso?)`,

    `(Acordo confuso e acendo a luz, olho ao redor e não vejo nada. Um sonho, eu tive um sonho)`,
];

const arrayChapterTwo = [
    `Dia seguinte`,

    `“sons de pássaros ao acordar”`,

    `(Você se levanta, cansado apesar de ter dormido e vai tomar um banho)`,

    `(No meio do banho você escuta alguém batendo em sua porta)`,
];
// ends array story 

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
        flagsOptions    = 3;
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
        utils.executingErrorAndOption(10000, "Sim, o céu está realmente lindo.", "Olá, conheço você?", "(Fico sem responder)");
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
        utils.executingStoryAndImage(12, 15, "IMG/IMGFULLHD/paisagem6.jpg", story, arrayChapterOne);
    }
    else if(flag == 3 && flagsOptions == 3 && !noRepeat == 1) {
        console.log("parte 3 da opção 3");
        utils.executingStoryAndImage(16, 20, "IMG/IMGFULLHD/paisagem6.jpg", story, arrayChapterOne);
        condition = true;
    }
    else if(position == finalPosition && flag == 3 && flagsOptions == 3 && condition === true) {
        condition = false;
        console.log("Após a opção 3");
        utils.executingErrorAndOption(0, "", "", "");
        setTimeout(function() {
            utils.executingStoryAndImage(21, 28, "IMG/IMGFULLHD/paisagem2.jpg", story, arrayChapterOne);
            intervalMusic = setInterval(changingBackgroundMusic, 500);
            whatMusic = "TRACKS/nao-abra-a-porta.mp3";
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
        utils.executingStoryAndImage(0, 3, "IMG/IMGFULLHD/paisagem14.png", chapter, arrayChapterTwo);
    }
    else if(position == finalPosition && flag == 4) {
        utils.executingErrorAndOption(10000, "Abrir a porta", "Abrir a porta", "Abrir a porta");
    }
    else if(flag == 5 && !noRepeat == 1) {
        console.log("deu certo");
        introductionOrFinal(arrayFinalStory, 1, 5000, 9000, 0);
    }
}
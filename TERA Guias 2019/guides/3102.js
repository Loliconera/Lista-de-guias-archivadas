// Draakon Arena
//
// made by Kuroine / HSDN
//Traducido por Loliconera

let player, entity, library, effect;

const {SpawnMarker, SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// Ress bait / range check
	"s-3102-1000-107-0": [{"type": "text","sub_type": "message","message": 'Lanzar -> (al Objetivo)',"message_RU": "Спектральный бросок (байт)"}],

	// Basic attacks
	"s-3102-1000-103-0": [{"type": "text","sub_type": "message","message": '2 hits | Sangrar',"message_RU": "2 удара | Кровоток"}],
	"s-3102-1000-113-0": [{"type": "text","sub_type": "message","message": '4 Hits Combo',"message_RU": "4 удара комба"}],
	"s-3102-1000-105-0": [{"type": "text","sub_type": "message","message": 'Ataque de Corte | Stun',"message_RU": "Удар снизу | Стан"}],
	"s-3102-1000-106-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Стан"},
		//{"type": "func","func": SpawnCircle.bind(null,true,553,0,20,24,200,100,2000)}
	],
	// 120 > 114
	"s-3102-1000-120-0": [{"type": "text","sub_type": "message","message": 'Muchos Cortes | Stun (AOE)',"message_RU": "Несколько ударов | Стан (AOE)"}],
	"s-3102-1000-114-0": [{"type": "text","sub_type": "message","message": 'Stun (AOE)',"message_RU": "Стан (AOE)"},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,16,420,100,3000)}
	],
	"s-3102-1000-111-0": [{"type": "text","sub_type": "message","message": 'Salto -> (al jugador)',"message_RU": "Прыжок (стан)"},
		//{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,16,300,0,2000)}
	],
	"s-3102-1000-115-0": [{"type": "text","sub_type": "message","message": 'AOE Bombas (reunir)',"message_RU": "AOE бомбы (вместе)"},
		{"type": "text","sub_type": "message","delay": 3000,"message": '¡Reunirse!',"message_RU": "Собраться!"}
	],
	"s-3102-1000-112-0": [{"type": "text","sub_type": "message","message": 'Patada delantera-trasera',"message_RU": "Разворот | Откид назад"},
		{"type": "func","func": SpawnVector.bind(null,553,90,120,160,300,0,3000)},
		{"type": "func","func": SpawnVector.bind(null,553,270,120,-160,300,0,3000)}
	],
	"s-3102-1000-110-0": [{"type": "text","sub_type": "message","message": 'Salto -> Olas',"message_RU": "Прыжок | Волны"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,650,0,4000)}
	],
	"s-3102-1000-109-0": [{"type": "text","sub_type": "message","message": 'Derribo (iframe) | Girar',"message_RU": "Удар | Крутилка"},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,100,10,420,0,1000)},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,150,10,420,1000,2000)}
	],
	"s-3102-1000-304-0": [{"type": "text","sub_type": "message","message": '¡ESCUDO!',"message_RU": "ЩИТ!"}],
	"ab-3102-1000-31021006": [{"type": "text","sub_type": "message","message": 'Plague/Regress',"message_RU": "Чума/регресс"}],

	// Pizza boi
	"s-3102-1000-121-0": [{"type": "text","sub_type": "message","message": 'Pie Derecho',"message_RU": "Правая нога"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,550,0,3000)},
		{"type": "func","func": SpawnSemicircle.bind(null,-60,70,912,0,50,8,450,0,4000)},
		{"type": "func","func": SpawnSemicircle.bind(null,120,250,912,0,50,8,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,70,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,120,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,250,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,300,450,0,4000)},
		{"type": "text","sub_type": "message","delay": 1900,"message": '¡Iframe!',"message_RU": "Эвейд!"}
	],
	"s-3102-1000-122-0": [{"type": "text","sub_type": "message","message": 'Delantero + trasero',"message_RU": "Передняя + задняя"},
		{"type": "func","func": SpawnMarker.bind(null,false,0,200,500,2000,true,null)}
	],
	"s-3102-1000-123-0": [{"type": "text","sub_type": "message","message": 'Ataque por detras',"message_RU": "Задняя"},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,295,550,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,85,550,0,2000)},
		{"type": "func","func": SpawnSemicircle.bind(null,85,295,912,0,0,6,550,0,2000)}
	],
	//
	"s-3102-1000-124-0": [{"type": "text","sub_type": "message","message": 'Pie Izquierdo',"message_RU": "Левая нога"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,550,0,3000)},
		{"type": "func","func": SpawnSemicircle.bind(null,-60,70,912,0,50,8,450,0,4000)},
		{"type": "func","func": SpawnSemicircle.bind(null,120,250,912,0,50,8,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,70,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,120,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,250,450,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,300,450,0,4000)},
		{"type": "text","sub_type": "message","delay": 1900,"message": '¡Iframe!',"message_RU": "Эвейд!"}
	],
	"s-3102-1000-125-0": [{"type": "text","sub_type": "message","message": 'Delantero + trasero',"message_RU": "Передняя + задняя"},
		{"type": "func","func": SpawnMarker.bind(null,false,0,200,500,3000,true,null)}
	],
	"s-3102-1000-126-0": [{"type": "text","sub_type": "message","message": 'Ataque por detras',"message_RU": "Задняя"},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,295,550,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,85,550,0,2000)},
		{"type": "func","func": SpawnSemicircle.bind(null,85,295,912,0,0,6,550,0,2000)}
	]
};
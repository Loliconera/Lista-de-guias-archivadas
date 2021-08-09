// Antaroth's Abyss (Hard)
//
// made by Yuyuko
// updated by HSDN
// Traducido por Loliconera

const {HIGHLIGHT_ITEM, SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

let player, entity, library, effect;

let counter = 0; // contar para ataques de espalda
let timer; // restablecer el tiempo
let print = true; // 2 boss Salud

// 2 boss Consejos de salud
function start_boss() {
	print = true;
}

function print_fifty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "50%",
			"message_RU": "50%"
		});
	}
	print = false;
}

function print_twenty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "20%",
			"message_RU": "20%"
		});
	}
	print = false;
}

// 3 boss: contador de ataques de espalda
function back_attack_HM(handlers) {
	clearTimeout(timer);
	counter++;
	if (counter >= 2) {
		handlers['text']({
			"sub_type": "message",
			"message": "Ataque por detras",
			"message_RU": "Задний"
		});
	}
	timer = setTimeout(()=> {
		counter = 0;
	}, 3000);
}

// 3 boss: marcas de color en la jaula
/* ------------------------------------------- */
let colour_to_use = null;
const COLOURS_OFFSETS = {
	"red": 0,
	"yellow": 120,
	"blue": 240,
};
function set_clockwise(clockwise, handlers, event, entity, dispatch) {
	setTimeout(()=> {
		// Obtén la rotación de color
		const colour_rotation = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];

		// Recorre las tres rotaciones de la jaula
		for (let i = 0; i < 3; i++) {
			let current_colour = colour_rotation[(colour_rotation.indexOf(colour_to_use) + i) % 3];
			SpawnMarker(false, COLOURS_OFFSETS[current_colour], 150, i * 2600, (i + 1) * 3000, true, null, handlers, event, entity);
		}

		// despejar en sentido horario
		setTimeout(()=> {
			clockwise = null;
		}, 12000);
	}, 1000);
}
function change_colour(colour) {
	colour_to_use = colour;
}
/* ------------------------------------------- */

// impulso cardíaco + giro en sentido antihorario + deslizamiento derecho + AOE de afuera hacia adentro
let SPAWNING_FIRST_CIRCLE_FLOWERS = [
	{"type": "text","class_position":"tank","sub_type": "message","message": "Derecha segura > Olas interiores","message_RU": "Вправо сейф > Волны к"},
	{"type": "text","class_position":"dps","sub_type": "message","message": "Izquierda segura > Olas interiores","message_RU": "Влево сейф > Волны к"},
	{"type": "text","class_position":"heal","sub_type": "message","message": "Izquierda segura > Olas interiores","message_RU": "Влево сейф > Волны к"},
	{"type": "func","func": SpawnMarker.bind(null,false,90,-250,0,2500,true,null)},
	{"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2500)},
	{"type": "func","func": SpawnVector.bind(null,553,0,0,0,500,0,1500)},
	{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,18,143,1500,5000)},
	{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,293,1500,5000)}
];
// empuje del corazón + giro en el sentido de las agujas del reloj + deslizamiento a la izquierda + AOE de adentro hacia afuera
let SPAWNING_SECOND_CIRCLE_FLOWERS = [
	{"type": "text","class_position":"tank","sub_type": "message","message": "Izquierda segura > Olas exteriores","message_RU": "Влево сейф > Волны от"},
	{"type": "text","class_position":"dps","sub_type": "message","message": "Derecha segura > Olas exteriores","message_RU": "Вправо сейф > Волны от"},
	{"type": "text","class_position":"heal","sub_type": "message","message": "Derecha segura > Olas exteriores","message_RU": "Вправо сейф > Волны от"},
	{"type": "func","func": SpawnMarker.bind(null,false,270,-250,0,2500,true,null)},
	{"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2500)},
	{"type": "func","func": SpawnVector.bind(null,553,0,0,0,500,0,1500)},
	{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,18,157,1500,5000)},
	{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,307,1500,5000)}
];

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS, NOT ENRAGED
	"s-920-1000-1117-0": [{"type": "text","sub_type": "message","message": "Entrar > Salir","message_RU": "К нему > От него"}],
	"s-920-1000-1116-0": [{"type": "text","sub_type": "message","message": "Salir > Entrar","message_RU": "От него > К нему"}],
	"s-920-1000-1109-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_RU": "Откид назад"}],
	"s-920-1000-1130-0": [{"type": "text","sub_type": "message","message": "AoE Completa> AoE Externo > AoE Interno","message_RU": "Общий > Внешний > Внутренний"}],

	// 1 BOSS, ENRAGED
	"s-920-1000-2117-0": [{"type": "text","sub_type": "message","message": "Entrar > Salir","message_RU": "К нему > От него"}],
	"s-920-1000-2116-0": [{"type": "text","sub_type": "message","message": "Salir > Entrar","message_RU": "От него > К нему"}],
	"s-920-1000-2109-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_RU": "Откид назад"}],
	"s-920-1000-2130-0": [{"type": "text","sub_type": "message","message": "AoE Completa> AoE Interno > AoE Externo","message_RU": "Общий > Внутренний > Внешний"}],

	// 1 BOSS, SPECIAL ATTACKS
	"s-920-1000-1300-0": [{"type": "text","sub_type": "message","delay": 600,"message": "¡Iframe!","message_RU": "Эвейд!"}],

	// 2 BOSS, NOT ENRAGED
	"s-920-2000-1108-0": [{"type": "text","sub_type": "message","message": "Objetivo swing","message_RU": "Таргет"}],
	"s-920-2000-1113-0": [{"type": "text","sub_type": "message","message": "Mano Izquierda","message_RU": "| Левая полоса"}],
	"s-920-2000-1114-0": [{"type": "text","sub_type": "message","message": "Mano Derecha","message_RU": "Правая полоса |"}],
	"s-920-2000-1106-0": [{"type": "text","sub_type": "message","message": "Ataque giratorio","message_RU": "Крутилка"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,320,0,3500)}
	],
	"s-920-2000-1105-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_RU": "Удар назад"}],
	"s-920-2000-1104-0": [{"type": "text","sub_type": "message","message": "Salto aleatorio","message_RU": "Прыжок (стан)"}],
	"s-920-2000-1110-0": [{"type": "text","sub_type": "message","message": "Ataque de Stun","message_RU": "Передний стан"}],
	"s-920-2000-1111-0": [{"type": "text","sub_type": "message","message": "Mano Izquierda","message_RU": "| Левая полоса"}],
	"s-920-2000-1112-0": [{"type": "text","sub_type": "message","message": "Mano Derecha","message_RU": "Правая полоса |"}],

	// 2 BOSS, ENRAGED
	"s-920-2000-2108-0": [{"type": "text","sub_type": "message","message": "Objetivo swing","message_RU": "Таргет"}],
	"s-920-2000-2113-0": [{"type": "text","sub_type": "message","message": "Mano Izquierda","message_RU": "| Левая полоса"}],
	"s-920-2000-2114-0": [{"type": "text","sub_type": "message","message": "Mano Derecha","message_RU": "Правая полоса |"}],
	"s-920-2000-2106-0": [{"type": "text","sub_type": "message","message": "Ataque giratorio","message_RU": "Крутилка"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,320,0,3500)}
	],
	"s-920-2000-2105-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_RU": "Удар назад"}],
	"s-920-2000-2104-0": [{"type": "text","sub_type": "message","message": "Salto aleatorio","message_RU": "Прыжок (стан)"}],
	"s-920-2000-2110-0": [{"type": "text","sub_type": "message","message": "Ataque de Stun","message_RU": "Передний стан"}],
	"s-920-2000-2111-0": [{"type": "text","sub_type": "message","message": "Mano Izquierda","message_RU": "| Левая полоса"}],
	"s-920-2000-2112-0": [{"type": "text","sub_type": "message","message": "Mano Derecha","message_RU": "Правая полоса"}],

	// 2 BOSS, SPECIAL ATTACKS
	"s-920-2000-3119-0": [{"type": "text","sub_type": "message","message": "Rojo: SALIR seguro","message_RU": "Красный: Наружу сейф"}],
	"s-920-2000-3220-0": [{"type": "text","sub_type": "message","message": "Azul: ENTRAR seguro","message_RU": "Синий: Внутрь сейф"}],
	"s-920-2000-3116-0": [{"type": "text","sub_type": "message","message": "Círculos","message_RU": "Круги"}],
	"h-920-2000-99": [{"type": "func","func": start_boss}],
	"h-920-2000-50": [{"type": "func","func": print_fifty}],  // 50%
	"h-920-2000-21": [{"type": "func","func": start_boss}],
	"h-920-2000-20": [{"type": "func","func": print_twenty}], // 20%

	// 3 BOSS, UNENRAGED
	"s-920-3000-1315-0": [{"type": "text","sub_type": "message","message": "Empuje hacia atrás","message_RU": "Откид (кайа)"}],
	"s-920-3000-1107-0": [{"type": "text","sub_type": "message","message": "Salto aleatorio","message_RU": "Прыжок (стан)"}],
	"s-920-3000-1204-0": [{"type": "text","sub_type": "message","message": "Haz de energía","message_RU": "Волна"}],
	// heart thrust+anticlockwise spin+right swipe+AOEs from out to in
	"s-920-3000-1109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,
	// heart thrust+clockwise spin+left swipe+AOEs from in to out
	"s-920-3000-1111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,
	//
	"s-920-3000-1113-0": [{"type": "text","sub_type": "message","message": "Ataque Frontal | Golpe por detras","message_RU": "Передний | Задний"}],
	"s-920-3000-1115-0": [{"type": "text","sub_type": "message","message": "Ataque giratorio","message_RU": "Круговая"}],
	"s-920-3000-1104-0": [{"type": "func","func": back_attack_HM}],
	//"s-920-3000-1202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_RU": "Круговая | Задний"}],
	"s-920-3000-1120-0": [{"type": "text","sub_type": "message","message": "Haz de energía","message_RU": "Волна"}],

	// 3 BOSS, ENRAGED
	"s-920-3000-2204-0": [{"type": "text","sub_type": "message","message": "Enfurecido: Haz de energía","message_RU": "Волна"}],
	// heart thrust+anticlockwise spin+right swipe+AOEs from out to in
	"s-920-3000-2109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,
	// heart thrust+clockwise spin+left swipe+AOEs from in to out
	"s-920-3000-2111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,
	//
	"s-920-3000-2113-0": [{"type": "text","sub_type": "message","message": "Ataque Frontal | Golpe por detras","message_RU": "Передний | Задний"}],
	"s-920-3000-2104-0": [{"type": "func","func": back_attack_HM}],
	"s-920-3000-2115-0": [{"type": "text","sub_type": "message","message": "Ataque giratorio","message_RU": "Круговая"}],
	"s-920-3000-2107-0": [{"type": "text","sub_type": "message","message": "Salto aleatorio","message_RU": "Прыжок (стан)"}],
	//"s-920-3000-2202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_RU": "Круговая | Задний"}],
	"s-920-3000-2120-0": [{"type": "text","sub_type": "message","message": "Haz de energía","message_RU": "Волна"}],

	// 3 BOSS, SPECIAL ATTACKS
	"s-920-3000-1400-0": [{"type": "text","sub_type": "message","message": "Clones: Haz","message_RU": "Копии: волны"}],
	"s-920-3000-1401-0": [{"type": "text","sub_type": "message","message": "Clones: Girar","message_RU": "Копии: круговые"}],
	// marcas de color en la jaula
	"ae-0-0-9203037": [{"type": "text","sub_type": "message","message": "Rojo","message_RU": "Красный"},{"type": "func","func": change_colour.bind(null, 'red')}],
	"ae-0-0-9203038": [{"type": "text","sub_type": "message","message": "Amarillo","message_RU": "Желтый"},{"type": "func","func": change_colour.bind(null, 'yellow')}],
	"ae-0-0-9203039": [{"type": "text","sub_type": "message","message": "Azul","message_RU": "Синий"},{"type": "func","func": change_colour.bind(null, 'blue')}],
	// anti-clockwise
	"s-920-3000-1317-0": [{"type": "func","func": set_clockwise.bind(null, false)}],
	// clockwise
	"s-920-3000-1318-0": [{"type": "func","func": set_clockwise.bind(null, true)}]
};
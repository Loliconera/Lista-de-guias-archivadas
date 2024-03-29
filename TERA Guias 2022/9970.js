// Ruinous Manor (Difícil)
//
// hecha por Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let debuff = null; // default debuff

	return {
		// 1 BOSS
		"nd-970-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"die": [{ type: "func", func: () => { debuff = null; } }],
		"ae-0-0-97000042": [{ type: "func", func: () => debuff = 1 }], // AoE (red)
		"ae-0-0-97000043": [{ type: "func", func: () => debuff = 2 }], // AoE (blue)
		"am-970-1000-97000042": [{ type: "func", func: () => debuff = 1 }], // Red
		"am-970-1000-97000043": [{ type: "func", func: () => debuff = 2 }], // Blue
		"s-970-1000-1306-0": [ // red inside
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", check_func: () => debuff === 1, delay: 500 },
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", check_func: () => debuff === 2, delay: 500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 4000] }
		],
		"s-970-1000-1307-0": [ // blue inside
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", check_func: () => debuff === 1, delay: 500 },
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", check_func: () => debuff === 2, delay: 500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 4000] }
		],		
		"s-970-1000-1206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás" }],
		"s-970-1000-2206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás" }],
		"s-970-1000-1106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Dodge)", message_ES: "Stun Frontal (Iframe)" }],
		"s-970-1000-2106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Dodge)", message_ES: "Stun Frontal (Iframe)" }],
		"s-970-1000-1107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_ES: "Empuje Frontal" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-970-1000-2107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_ES: "Empuje Frontal" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		// 2 BOSS
		"nd-970-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-2000-1103-0": [{ type: "text", sub_type: "message", message: "Frontal Attack", message_ES: "Ataque Frontal" }],
		"s-970-2000-2103-0": [{ type: "text", sub_type: "message", message: "Frontal Attack", message_ES: "Ataque Frontal" }],
		"s-970-2000-1105-0": [{ type: "text", sub_type: "message", message: "Random Target", message_ES: "Objetivo Aleatorio" }],
		"s-970-2000-2105-0": [{ type: "text", sub_type: "message", message: "Random Target", message_ES: "Objetivo Aleatorio" }],
		"s-970-2000-1106-0": [{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_ES: "Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 13, 180, 0, 2000] }
		],
		"s-970-2000-2106-0": [{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_ES: "Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 13, 180, 0, 2000] }
		],
		"s-970-2000-1111-0": [{ type: "text", sub_type: "message", message: "Many Hits (Target)", message_ES: "Muchos Golpes (Objetivo)" }],
		"s-970-2000-2111-0": [{ type: "text", sub_type: "message", message: "Many Hits (Target)", message_ES: "Muchos Golpes (Objetivo)" }],

		// 3 BOSS
		"nd-970-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-3000-1102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano Izquierda" }],
		"s-970-3000-2102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano Izquierda" }],
		"s-970-3000-1101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano Derecha" }],
		"s-970-3000-2101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano Derecha" }],
		"s-970-3000-1103-0": [{ type: "text", sub_type: "message", message: "Tail Slam", message_ES: "Coletazo Atrás" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] },
		],
		"s-970-3000-2103-0": [{ type: "text", sub_type: "message", message: "Tail Slam", message_ES: "Coletazo Atrás" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] },
		],
		"s-970-3000-1301-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos (Iframe)" }],
		"s-970-3000-2301-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos (Iframe)" }],
		"s-970-3000-1106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_ES: "Empuje Frontal (Iframe)" }],
		"s-970-3000-2106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_ES: "Empuje Frontal (Iframe)" }],
		"s-970-3000-1108-0": [{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Coletazo Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-970-3000-2108-0": [{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Coletazo Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-970-3000-1110-0": [{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_ES: "Cola AoE (Frente Seguro)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-970-3000-2110-0": [{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_ES: "Cola AoE (Frente Seguro)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-970-3000-1304-0": [{ type: "text", sub_type: "message", message: "Get Ready! ", message_ES: "¡PREPÁRATE!" }],
		"s-970-3000-1303-0": [{ type: "text", sub_type: "message", message: "Get Ready!", message_ES: "¡PREPÁRATE!" }],
		"s-970-3000-1113-0": [{ type: "text", sub_type: "message", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1114-0": [{ type: "text", sub_type: "message", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],		
		"s-970-3000-1116-0": [{ type: "text", sub_type: "message", message_ES: "ENTRAR", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1117-0": [{ type: "text", sub_type: "message", message_ES: "SALIR", message: "Out" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-2113-0": "s-970-3000-1113-0",
		"s-970-3000-2114-0": "s-970-3000-1114-0",
		"s-970-3000-2116-0": "s-970-3000-1116-0",
		"s-970-3000-2117-0": "s-970-3000-1117-0",
		
		"s-970-3000-1318-0": [{ type: "text", sub_type: "message", message: "Get Red Skull!", message_ES: "¡Cráneo Rojo!" }],
		"s-970-3000-1317-0": [{ type: "text", sub_type: "message", message: "Get Red Skull!", message_ES: "¡Cráneo Rojo!" }],
		"s-970-3000-1319-0": [{ type: "text", sub_type: "message", message: "Get Red Skull!", message_ES: "¡Cráneo Rojo!" }],
		"s-970-3000-1322-0": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "¡Iframe!", delay: 2000 },
			{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress", delay: 3000, class_position: "heal" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 230, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 430, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 5000] }
		],
		"s-970-3000-1311-0": [{ type: "text", sub_type: "message", message: "Gather for Cleanse!", message_ES: "¡Reunirse para Cleanse!" }],
		"s-970-3000-1120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls", message_ES: "Laser (Triple)" }],
		"s-970-3000-2120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls", message_ES: "Laser (Triple)" }],
		"s-970-3000-1121-0": [{ type: "text", sub_type: "message", message: "Double Shooting Skulls", message_ES: "Laser (Doble)" }],
		"s-970-3000-2121-0": [{ type: "text", sub_type: "message", message: "Double Shooting Skulls", message_ES: "Laser (Doble)" }]
	};
};
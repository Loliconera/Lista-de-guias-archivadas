// Stormed Citadel
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// PHASE 1
		"nd-3044-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3044-1000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3044-1000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Ataque Frontal (Stun)" }],
		"s-3044-1000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3044-1000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3044-1000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar (Objetivo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3044-1000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3044-1000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" }],
		"s-3044-1000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Lanzar | Stun Frontal" }],
		"s-3044-1000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Stun Frontal" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3044-1000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Lanzar hacia atrás" }],
		"s-3044-1000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Lanzar hacia atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3044-1000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Frontal Combo" }],
		"s-3044-1000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)" }],
		"s-3044-1000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser (Iframe)" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],
		"qb-3044-1000-3044102": [{ type: "text", sub_type: "message", message: "Kill Ghosts", message_ES: "Matar a los fantasmas" }],

		// PHASE 2
		"nd-3044-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3044-2000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3044-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Ataque Frontal (Stun)" }],
		"s-3044-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3044-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar hacia atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3044-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar (Objetivo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3044-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3044-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" }],
		"s-3044-2000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Lanzar | Stun Frontal" }],
		"s-3044-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Stun Frontal" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3044-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Salto Mortal | Lanzar hacia atrás" }],
		"s-3044-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Lanzar hacia atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3044-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Frontal Combo" }],
		"s-3044-2000-143-0": [{ type: "text", sub_type: "message", message: "Hit | Back Push", message_ES: "Lanzar | Empujar hacia atrás" }],
		"s-3044-2000-143-1": [{ type: "text", sub_type: "message", message: "Back Push", message_ES: "Empujar hacia atrás" }],
		"s-3044-2000-144-0": [ // normal
			{ type: "text", sub_type: "message", message: "Right X-Swipe", message_ES: "Arrastre Derecho (X)" },
			{ type: "spawn", func: "vector", args: [553, 305, 700, 130, 1200, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 325, 700, 130, 1200, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Left X-Swipe", message_ES: "Arrastre Izquierdo (X)", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 30, 700, 230, 1200, 3000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 50, 700, 230, 1200, 3000, 3000] }
		],
		"s-3044-2000-153-0": [ // fast
			{ type: "text", sub_type: "message", message: "Right X-Swipe", message_ES: "Arrastre Derecho (X)" },
			{ type: "spawn", func: "vector", args: [553, 305, 700, 130, 1200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 325, 700, 130, 1200, 0, 2000] },
			{ type: "text", sub_type: "message", message: "Left X-Swipe", message_ES: "Arrastre Izquierdo (X)", delay: 2000 },
			{ type: "spawn", func: "vector", args: [553, 30, 700, 230, 1200, 2000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 50, 700, 230, 1200, 2000, 3000] }
		],
		"s-3044-2000-146-0": [ // normal
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Arrastre Derecho" },
			{ type: "spawn", func: "vector", args: [553, 355, 500, 180, 1000, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 25, 500, 180, 1000, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Arrastre Izquierdo", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 335, 500, 180, 1000, 3000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 5, 500, 180, 1000, 3000, 2000] }
		],
		"s-3044-2000-147-0": [ // fast
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Arrastre Derecho" },
			{ type: "spawn", func: "vector", args: [553, 355, 500, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 25, 500, 180, 1000, 0, 2000] },
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Arrastre Izquierdo", delay: 2000 },
			{ type: "spawn", func: "vector", args: [553, 335, 500, 180, 1000, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 5, 500, 180, 1000, 2000, 2000] }
		],
		"s-3044-2000-148-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 20, null, 250, 0, 2000] }
		],
		"s-3044-2000-151-0": [
			{ type: "text", sub_type: "message", message: "Throws Combo | Stun (AoE)", message_ES: "Lanzar Combo | Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [true, 912, 180, 200, null, 200, 0, 3000] }
		],
		"s-3044-2000-152-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 20, null, 250, 0, 2000] }
		],
		"s-3044-2000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)" }], // normal
		"s-3044-2000-302-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos (Objetivo)" }], // fast
		"s-3044-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Semicircle (Left Safe)", message_ES: "Semicírculo (Izquierda Segura)" },
			{ type: "spawn", func: "marker", args: [false, 250, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 70, 300, 0, 3000, true, null] }
		],
		"s-3044-2000-306-0": [
			{ type: "text", sub_type: "message", message: "Semicircle (Right Safe)", message_ES: "Semicírculo (Derecha Segura)" },
			{ type: "spawn", func: "marker", args: [false, 110, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 290, 300, 0, 3000, true, null] }
		],
		"s-3044-2000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser (Iframe)" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],

		"qb-3044-2000-3043201": [{ type: "text", sub_type: "message", message: "Blue Circles (Safe)", message_ES: "Círculos Azules (Zona-Segura)" }], // big
		"qb-3044-2000-3044201": [{ type: "text", sub_type: "message", message: "Blue Circles (Safe)", message_ES: "Círculos Azules (Zona-Segura)" }], // small
		"qb-3044-2000-3044202": [{ type: "text", sub_type: "message", message: "Red Circles (Dodge)", message_ES: "Círculos Rojos (Iframe)" }],
		"qb-3044-2000-3044400": [{ type: "text", sub_type: "message", message: "Break Statues", message_ES: "Romper las Estatuas" }]
	};
};
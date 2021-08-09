// RK9
//made by michengs
//Traducido por Loliconera

const {SpawnPoint, SpawnVector, SpawnCircle} = require("../lib");

let player, entity, library, effect;

module.exports = {	
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
    "s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_TW": "BOSS 攻击身后打手请注意！" }],	
    "s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_TW": "BOSS 攻击身后打手请注意！" }],
    "s-735-1000-205-0": [{"type": "text","sub_type": "message","message": "viento","message_TW": "即将开启通风系统，请离开中间！" }],	
    "s-735-1000-304-0": [{"type": "text","sub_type": "message","message": "¡SALIR!","message_TW": "出去！" }],
    "s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "¡ENTRAR!","message_TW": "进！" }],	
    "s-735-1000-306-0": [{"type": "text","sub_type": "message","message": "¡Invocacion de Bombas!","message_TW": "召唤地雷！快打！" }], 	
    "s-735-1000-307-0": [{"type": "text","sub_type": "message","message": "PULL","message_TW": "BOSS 拉人，注意无敌躲避！" }],		
    "s-735-1000-309-0": [ 
      {"type": "text","sub_type": "message","message": "¡¡BOSS comenzara a lanzar 4 misiles!!","message_TW": "开始发射4次导弹！！" },
      {"type": "text","sub_type": "message","delay": 7000,"message": "5", "message_TW": "5"},
      {"type": "text","sub_type": "message","delay": 8000,"message": "4", "message_TW": "4"},
      {"type": "text","sub_type": "message","delay": 9000,"message": "3", "message_TW": "3"},
      {"type": "text","sub_type": "message","delay": 10000,"message": "2", "message_TW": "2"},
      {"type": "text","sub_type": "message","delay": 11000,"message": "1", "message_TW": "1"},
      {"type": "text","sub_type": "message","delay": 12000,"message": "¡Saltar!", "message_TW": "快跳！"}
	  ],
	  
	// 2 BOSS
    "s-735-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Ataque frontal","message_TW": "前砸注意躲避"}],
    "s-735-2000-105-0": [{"type": "text","sub_type": "message","message": "Giro (360)","message_RU": "Крутилка (откид)"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,250,100,4000)}],
    "s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "Ataque por detras","message_TW": "后踢打手補师注意"}],
    "s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "¡CUIDADO!","message_TW": "boss扔溜溜球，注意躲避"}],
    "s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "¡SALIR!","message_TW": "快跑远"}],
	"s-735-2007-201-0": [
		{"type": "func","func": SpawnVector.bind(null,912,0,0,0,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,90,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,180,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,270,500,0,4000)}
	],
	"s-735-2007-306-0": [
		{"type": "func","func": SpawnVector.bind(null,912,0,0,0,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,90,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,180,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,270,500,0,4000)}
	],
	"s-735-2007-307-0": [
		{"type": "func","func": SpawnVector.bind(null,912,0,0,0,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,90,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,180,500,0,4000)},
		{"type": "func","func": SpawnVector.bind(null,912,0,0,270,500,0,4000)}
	],    
	
	// 3 BOSS
    "s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "DERECHA |","message_TW": "S拳秒杀躲避右边 →↘"},
    {"type": "func","func": SpawnPoint.bind(null,553,120,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,130,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,140,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,150,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,160,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,170,210,180,290,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,300,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,310,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,320,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,330,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,340,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,350,210,0,290,0,3000)}   
    ],
    "s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "DERECHA |","message_TW": "S拳秒杀躲避右边 →↘"},
    {"type": "func","func": SpawnPoint.bind(null,553,120,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,130,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,140,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,150,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,160,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,170,210,180,290,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,300,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,310,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,320,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,330,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,340,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,350,210,0,290,0,3000)}
    ],
    "s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "| IZQUIERDA","message_TW": "S拳秒杀躲避 左边 ←↙"},	 
    {"type": "func","func": SpawnVector.bind(null,553,10,210,0,290,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,20,210,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,30,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,40,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,50,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,60,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,240,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,230,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,220,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,210,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,200,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,190,210,180,290,0,3000)}
    ],   
    "s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "| IZQUIERDA","message_TW": "S拳秒杀躲避 左边 ←↙"},
    {"type": "func","func": SpawnVector.bind(null,553,10,210,0,290,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,20,210,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,30,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,40,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,50,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,60,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,240,250,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,230,240,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,220,230,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,210,220,0,3000)},
    {"type": "func","func": SpawnPoint.bind(null,553,200,210,0,3000)},
    {"type": "func","func": SpawnVector.bind(null,553,190,210,180,290,0,3000)}
    ], 
    "s-735-3000-129-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "iframe","message_TW": "坦无敌闪"}],
    "s-735-3000-305-0": [{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,300,100,7000)}],
    "s-735-3000-321-0": [
		{"type": "text","sub_type": "message","message": "¡ESCUDO!","message_TW": "BOSS护盾 快打，不然灭团!" },
        {"type": "text","sub_type": "message","delay": 90000,"message": "¡BOSS Activara ESCUDO en 10seg! ", "message_TW": "10S后准备破盾！"}	    
	],	 
    "s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "¡SALIR! -> ¡Stun!","message_TW": "出去"}]

};
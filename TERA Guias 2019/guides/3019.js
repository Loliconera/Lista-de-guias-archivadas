// 
//made by michengs
let notice_guide = true;
let player, entity, library, effect;

let power = true;
let Level = 0;
let powerMsg = null;
let notice = true  ; 
let steptwo = false ;
function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});
}
notice_guide = false;

}		




	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
	
// 	召喚光柱 ，告示牌提示（  角度 距离   时间）
function SpawnThing( degrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;			
   let angle =  Math.PI * degrees / 180 
        handlers['spawn']({
			"sub_type": "build_object",
        	"id": 1,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle,
			"ownerName": "SAFE SPOT",
			"message": "SAFE"
        }, {loc: shield_loc});  
        handlers['spawn']({
			"sub_type": "item",
        	"id": 88850,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});	
}
	//构建直线（提示标志  角度 最远距离   时间）
function Spawnitem1(item,degrees, maxRadius, times, handlers, event, entity) {
 let angle = degrees * Math.PI/180
    for (let radius=50 ; radius<=maxRadius; radius+=50) {
        handlers['spawn']({
        	"id": item,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, entity);
    }
}
	
	
	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}

function start_boss() {
power = false;
Level = 0;
notice = true;
powerMsg = null;
steptwo = false ;
}

	function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (!notice) return;
	if (notice && [118, 139, 141, 150, 152].includes(skillid)) {
		notice = false;
		setTimeout(() => notice = true, 4000);
					}
			if (skillid === 300) power = true, Level = 0, powerMsg = null;
			if (skillid === 360 || skillid === 399) Level = 0;	
			if (power && [118, 143, 145, 146, 144, 147, 148, 154, 155, 161, 162, 213, 215].includes(skillid)) {
				Level++;
						//powerMsg = '<font color="#FF0000">(' + Level + ') </font> ';
				powerMsg = `{` + Level + `} `;
				
				
if (Level== 4) {
handlers['text']({
"sub_type": "message",
"message_TW": "电量填充完毕!!",
"message": "fully charged!!"

});	
handlers['text']({
"sub_type": "notification",
"message_TW": "电量填充完毕!!",
"message": "fully charged!!"
});			
} else if (Level== 2 && steptwo) {
handlers['text']({
"sub_type": "message",
"message_TW": "电量填充完毕!!",
"message": "fully charged!!"
});	
handlers['text']({
"sub_type": "notification",
"message_TW": "电量填充完毕!!",
"message": "fully charged!!"
});			
} 				
				
if ( powerMsg !== null &&  skillid !== 399){
	
if ( !steptwo &&  Level !== 4){
handlers['text']({
"sub_type": "message",
"message_TW": powerMsg,
"message": powerMsg
});
}
if ( steptwo &&  Level !== 2){
handlers['text']({
"sub_type": "message",
"message_TW": powerMsg,
"message": powerMsg
});
}
}				
				
				
					}


if ( skillid === 399){
steptwo = true ;			
}					
}



module.exports = {

	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);

	},

// "h-3019-1000-100": [{"type": "func","func": guid_voice}],

	
 //一王

 
  "s-3019-1000-106-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Heavy","message_TW": "重击" }],
  "s-3019-1000-107-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Pushback","message_TW": "后喷击退" },
                        {"type": "text","class_position":"heal","sub_type": "message","message": "Pushback","message_TW": "后喷击退" }],
  "s-3019-1000-108-0": [{"type": "text","class_position":"dps","sub_type": "message","message_TW": "点名击飞" },
                        {"type": "text","class_position":"heal","sub_type": "message","message_TW": "点名击飞" }], 
  "s-3019-1000-109-0": [{"type": "text","sub_type": "message","message": "Rocks (Small)","message_TW": "滚石" }],
  "s-3019-1000-110-0": [{"type": "text","sub_type": "message","message": "Rocks (Large)","message_TW": "滚石" }],
  "s-3019-1000-301-0": [{"type": "text","sub_type": "message","message": "Flower stuns","message_TW": "食人花眩晕" }], 
  "s-3019-1000-307-0": [{"type": "text","class_position":"dps","sub_type": "message","message_TW": "笼子禁锢" },
                        {"type": "text","class_position":"heal","sub_type": "message","message_TW": "笼子禁锢" }],
  "s-3019-1000-309-0": [{"type": "text","sub_type": "message","message": "1 flower","message_TW": "1朵花-鉴定!!" }],
  "s-3019-1000-310-0": [{"type": "text","sub_type": "message","message": "2 flower","message_TW": "2朵花-鉴定!!" }], 
  "s-3019-1000-116-0": [{"type": "text","sub_type": "message","message": "Big AoE attack!!","message_TW": "全屏攻击!!" }],
  "s-3019-1000-312-0": [{"type": "text","sub_type": "message","message": "Golden flower!!","message_TW": "金色花!!" }],

 
  //二王
  
  "s-3019-2000-105-0": [{"type": "text","sub_type": "message","message": "Spin","message_TW": "翻滚" }], 
  "s-3019-2000-113-0": [{"type": "text","sub_type": "message","message": "Stun inc","message_TW": "双手眩晕" }],
  "s-3019-2000-114-0": [{"type": "text","sub_type": "message","message": "Get IN","message_TW": "三连地板靠近" },
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}],
  "s-3019-2000-116-0": [{"type": "text","sub_type": "message","message": "Front then Back","message_TW": "前砸 后砸" },
  {"type": "func","func": Spawnitem1.bind(null,912,90,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,270,500,5000)}], 
  "s-3019-2000-301-0": [{"type": "text","sub_type": "message","message": "↓ Get OUT + dodge","message_TW": "捶地远离 旋转击退"},
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}   
  ],
  "s-3019-2000-302-0": [{"type": "text","sub_type": "message","message": "↑ Get IN + dodge","message_TW": "旋转靠近 捶地击飞" },
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}   
  ], 
 
//三王
  "h-3019-3000-99": [{"type": "func","func": start_boss}],

  "s-3019-3000-118-0": [{"type": "text","sub_type": "message","message": "Front triple","message_TW": "三连击左-右-喷" },
	{"type": "func","func": skilld_event.bind(null, 118)} 
  ],
  "s-3019-3000-143-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_TW": "左后" },
	{"type": "func","func": skilld_event.bind(null, 143)}  
  ],
  "s-3019-3000-145-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_TW": "左后" },
	{"type": "func","func": skilld_event.bind(null, 145)}  
  ], 
  "s-3019-3000-146-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_TW": "左后扩散" },
     {"type": "func","func": SpawnThing.bind(null,215,370,8000)},	 
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,6,800,2500,8000)},
	{"type": "func","func": skilld_event.bind(null, 146)} ],
  "s-3019-3000-154-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_TW": "左后扩散" },
     {"type": "func","func": SpawnThing.bind(null,215,370,8000)},	 
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,6,800,2500,8000)},
	{"type": "func","func": skilld_event.bind(null, 154)}  
	 ],
	 
	 
  "s-3019-3000-144-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_TW": "右后" },
	{"type": "func","func": skilld_event.bind(null, 144)}], 
  
  
  "s-3019-3000-147-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_TW": "右后" },
	{"type": "func","func": skilld_event.bind(null,147 )}  ],
	 
  "s-3019-3000-148-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_TW": "右后扩散" },
     {"type": "func","func": SpawnThing.bind(null,155,388,8000)}, 
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,6,800,2500,8000)},
	{"type": "func","func": skilld_event.bind(null, 148)}  ],

  "s-3019-3000-155-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_TW": "右后扩散" },
     {"type": "func","func": SpawnThing.bind(null,155,388,8000)}, 
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,6,800,2500,8000)},
	{"type": "func","func": skilld_event.bind(null, 155)}  ],
	 
  "s-3019-3000-161-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_TW": "后砸 前砸" },
	{"type": "func","func": skilld_event.bind(null, 161)}   
  ],
  "s-3019-3000-162-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_TW": "后砸 前砸" },
	{"type": "func","func": skilld_event.bind(null, 162)}   
  ],
  "s-3019-3000-213-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴" },
	{"type": "func","func": skilld_event.bind(null, 213)}   
  ],
  "s-3019-3000-215-0": [{"type": "text","sub_type": "message","message": "Tail!!","message_TW": "尾巴!!" },
	{"type": "func","func": skilld_event.bind(null, 215)}   
  ], 
   "s-3019-3000-139-0": [{"type": "text","sub_type": "message","message": "Left safe","message_TW": "打右边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,270,200,8000)},
	{"type": "func","func": skilld_event.bind(null, 139)}  ],
  "s-3019-3000-150-0": [{"type": "text","sub_type": "message","message": "Left safe","message_TW": "打右边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,270,200,8000)},
	{"type": "func","func": skilld_event.bind(null, 150)}  ],
  "s-3019-3000-141-0": [{"type": "text","sub_type": "message","message": "Right safe","message_TW": "打左边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,90,200,8000)},
	{"type": "func","func": skilld_event.bind(null, 141)}  ], 
  "s-3019-3000-152-0": [{"type": "text","sub_type": "message","message": "Right safe","message_TW": "打左边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,90,200,8000)},
	{"type": "func","func": skilld_event.bind(null, 152)}  ],
  "s-3019-3000-300-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 1","message_TW": "一次觉醒 推人" },
	{"type": "func","func": skilld_event.bind(null, 300)}  ],
  "s-3019-3000-399-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 2)","message_TW": "二次觉醒 推人" },
	{"type": "func","func": skilld_event.bind(null, 399)}    
  
  ], 
  "s-3019-3000-360-0": [{"type": "text","sub_type": "message","message": "Explosion!!","message_TW": "爆炸爆炸" },
	{"type": "func","func": skilld_event.bind(null, 360)}  ] 

};
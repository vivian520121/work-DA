//学生平板
$('#choose_class').click(function(){
	var p1=$('#stu_select').children('option:selected').val();
	if(p1=="所有"){
		
	}
	else{
		if($('#class_box').css('display')=='none'){
		$('#class_box').css('display','block')
	}
	else{
		$('#class_box').css('display','none')
	}
	}
	
	
})
$('#cancel_btn').click(function(){
	
		$('#class_box').css('display','none')
	
	
})

  $('#stu_select').change(function(){ 
  	$('#class_list').empty()
var p1=$(this).children('option:selected').val();//这就是selected的值 
if(p1=="2000以下"){

	$("#class_list").prepend("<li><input type='checkbox' value='u16'/>u16</li><li><input type='checkbox' value='u16(32G)' />u16(32G)</li><li><input type='checkbox' value='u18'/>u18</li><li><input type='checkbox' value='u19'/>u19</li><li><input type='checkbox' value='u6S'/>u6S</li><li><input type='checkbox' value='u7' />u7</li><li><input type='checkbox' value='u20'/>u20</li><li><input type='checkbox' value='u28'/>u28</li>")
}
else if(p1=="2000~2598"){

	$("#class_list").prepend("<li><input type='checkbox' value='u21' />u21</li><li><input type='checkbox' value='u22(16G)' />u22(16G)</li><li><input type='checkbox' value='u22(32G 无笔版)'/>u22(32G 无笔版)</li><li><input type='checkbox' value='Umix1'/>Umix1</li>")

}
else if(p1=="2598~3000"){
	$("#class_list").prepend("<li><input type='checkbox' value='U18S'/>U18S</li><li><input type='checkbox' value='u22(32G)' />u22(32G)</li><li><input type='checkbox'value='u26' />u26</li><li><input type='checkbox'value='U26(2G)' />U26(2G)</li>")

}
else if(p1=="3000以上"){
	$("#class_list").prepend("<li><input type='checkbox' value='u26(64G)' />u26(64G)</li><li><input type='checkbox' value='U30' />U30</li><li><input type='checkbox' value='U32'/>U32</li><li><input type='checkbox' value='U50'/>U50</li><li><input type='checkbox' value='U51(3+64)'/>U51(3+64)</li>")

}
}) 

//幼教
    $('#child_select').change(function(){ 
  	$('#class_list2').empty()
var p1=$(this).children('option:selected').val();//这就是selected的值 
if(p1=="所有"){

	$("#class_list2").prepend("<li><input type='checkbox'/>u16</li><li><input type='checkbox'value='u16(32G)'/>u16(32G)</li><li><input type='checkbox'/>u18</li><li><input type='checkbox'/>u19</li><li><input type='checkbox'/>u6S</li><li><input type='checkbox' />u7</li><li><input type='checkbox'/>u20</li><li><input type='checkbox'/>u28</li>")
}
else if(p1=="儿童平板"){

	$("#class_list2").prepend("<li><input type='checkbox' />V1</li><li><input type='checkbox' />V1S</li><li><input type='checkbox' />V2</li><li><input type='checkbox'/>V2标准版</li>")

}
else if(p1=="儿童手表"){
	$("#class_list2").prepend("<li><input type='checkbox' />UW1</li><li><input type='checkbox' />UW3</li><li><input type='checkbox' />UW5</li>")

}
else if(p1=="点读机"){
	$("#class_list2").prepend("<li><input type='checkbox' />Q6</li><li><input type='checkbox' />Q6升级版</li><li><input type='checkbox' />Q6(8G)</li>")

}
else if(p1=="点读机及其他"){
	$("#class_list2").prepend("<li><input type='checkbox' />A1高级版</li><li><input type='checkbox' />NE600</li><li><input type='checkbox' />NP18+</li><li><input type='checkbox' />小鸡叫叫</li>")

}
}) 

$('#choose_class2').click(function(){
	var p1=$('#child_select').children('option:selected').val();
	if(p1=="所有"){
		
	}
	else{
		if($('#class_box2').css('display')=='none'){
		$('#class_box2').css('display','block')
	}
	else{
		$('#class_box2').css('display','none')
	}
	}
	
	
})
$('#cancel_btn2').click(function(){
	
		$('#class_box2').css('display','none')
	
	
})
//总概
var totaldom = document.getElementById("total_echart");
var totalChart = echarts.init(totaldom);
var app = {};
option = null;
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
 
    }
};


var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option1 = {
    color: ['#2095F2', '#8BC24A', '#FC9700'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['进货', '实销金额', '库存差']
    },

    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['本年度', '2018-05-01至2018-05-31']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '进货',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [648.77,55.09]
        },
        {
            name: '实销金额',
            type: 'bar',
            label: labelOption,
            data: [569.48,95.89]
        },
        {
            name: '库存差',
            type: 'bar',
            label: labelOption,
            data: [79.29,-40.80]
        },

    ]
};
if (option1 && typeof option1 === "object") {
   totalChart.setOption(option1, true);
}
//学生平板累计台数


var dom = document.getElementById("total");
var myChart = echarts.init(dom);
var app = {};
option = null;
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
 
    }
};


var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

student={
	0:{
		in:[395,275,0,0,0,0,0,0],
		out:[487,358,3,8,4,1,3,25],
		differ:[-92,-83,-3,-8,-4,-1,-3,-25]
	},
	1:{
		in:[0,0,80,800],
		out:[0,26,157,385],
		differ:[0,-26,-77,415]
	},
	2:{
		in:[0,0,0,1760,],
		out:[0,86,185,1607],
		differ:[0,-86,-185,153]
	},
	3:{
		in:[230,0,0,0,,300],
		out:[83,2,38,30,123],
		differ:[147,-2,-38,-30,177]
	}
}
option2 = {
    color: ['#003366', '#006699', '#4cabce'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['累计进货台数', '累计实销台数', '库存差台数']
    },

    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2000以下', '2000-2598', '2598-3000', '3000以上']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '累计进货台数',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [670,880,1760,530]
        },
        {
            name: '累计实销台数',
            type: 'bar',
            label: labelOption,
            data: [889, 568,1878,276]
        },
        {
            name: '库存差台数',
            type: 'bar',
            label: labelOption,
            data: [-219,312,-118,337]
        },

    ]
};
if (option2 && typeof option2 === "object") {
    myChart.setOption(option2, true);
}

$('#surebtn1').click(function(){
	var p1=$('#stu_select').children('option:selected').val()
	var arr =new Array()
	var new_inarr = []
	var new_outarr = []
	var new_differarr = []
	var ck=$('#class_list :input[type=checkbox]')
	if(p1=='2000以下'){
		var inArr =student[0].in
	var outArr=student[0].out
	var differArr = student[0].differ
	}
	else if(p1=='2000~2598'){
		var inArr =student[1].in
	var outArr=student[1].out
	var differArr = student[1].differ
	}
	else if(p1=='2598~3000'){
		var inArr =student[2].in
	var outArr=student[2].out
	var differArr = student[2].differ
	}
	else if(p1=='3000以上'){
		var inArr =student[3].in
	var outArr=student[3].out
	var differArr = student[3].differ
	}
	ck.each(function(index){
    if($(this).is(':checked')){    
        arr.push($(this).val())
        new_inarr.push(inArr[index])
        new_outarr.push(outArr[index])
        new_differarr.push(differArr[index])
    }

	
})

	
     myChart.setOption({
        xAxis: {
            data: arr

        },
        series:[
        {
        	data:new_inarr
        },
        {
        	data:new_outarr
        },
        {
        	data:new_differarr
        },
        ]

    });
// setInterval("getdata()",1000);
	
})
 $(function(){
  function show(){
   var mydate = new Date();
   var str = "" + mydate.getFullYear() + "-";
   str += (mydate.getMonth()+1) + "-";
   str += mydate.getDate();
   var day = new Date(Date.parse(str.replace(/-/g, '/'))); 
    var w = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
    var week = w[day.getDay()]; 
    today=str+week
   return today;
  }
  
  function lastToday(){
  	 var mydate = new Date();
   var str = "" + mydate.getFullYear()-1 + "-";
   str += (mydate.getMonth()+1) + "-";
   str += mydate.getDate();
    var day = new Date(Date.parse(str.replace(/-/g, '/'))); 
    var w = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
    var week = w[day.getDay()]; 
    today=str + week
   return today;
   
  }
   $('#today').val(show());
   $('#nextday').val(show())
   $('.last_today').val(lastToday())
 
  
 });
 $('#add').click(function(){
 	function add(){
 		var n=1
 	var t=$('#last_today').val()
 	d = t.substring(0, t.indexOf('星'));
 	var day = new Date(Date.parse(d.replace(/-/g, '/')));
 	 var w = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
 	 var strs= new Array(); 
 strs = d.split("-");
 var y = strs[0];
 var m = strs[1];
 var d = strs[2];
 var t = new Date(y,m-1,d);
 var str = t.getTime()+n*(1000*60*60*24);
 var newdate = new Date();
 newdate.setTime(str);
 var strYear=newdate.getFullYear();   
    var strDay=newdate.getDate();
    if(strDay < 10){
     strDay = "0"+strDay;
    }   
    var strMonth=newdate.getMonth()+1;   
    if(strMonth < 10){   
        strMonth = "0"+strMonth;   
    }   
     var lastday=strYear+"-"+strMonth+"-"+strDay;
    var lastday2= new Date(Date.parse(lastday.replace(/-/g, '/')));
     var week = w[lastday2.getDay()];
    
     strdate =lastday+ week
    return strdate;
 	}
 	$('.last_today').val(add())
 
 })
 $('#remove').click(function(){
 	function remove(){
 		var n=-1
 	var t=$('#last_today').val()
 	d = t.substring(0, t.indexOf('星'));
 	var day = new Date(Date.parse(d.replace(/-/g, '/')));
 	
 	 var w = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
 	 var strs= new Array(); 
 strs = d.split("-");
 var y = strs[0];
 var m = strs[1];
 var d = strs[2];
 var t = new Date(y,m-1,d);
 var str = t.getTime()+n*(1000*60*60*24);
 var newdate = new Date();
 newdate.setTime(str);
 var strYear=newdate.getFullYear();   
    var strDay=newdate.getDate();
    if(strDay < 10){
     strDay = "0"+strDay;
    }   
    var strMonth=newdate.getMonth()+1;   
    if(strMonth < 10){   
        strMonth = "0"+strMonth;   
    }   
    var lastday=strYear+"-"+strMonth+"-"+strDay;
    var lastday2= new Date(Date.parse(lastday.replace(/-/g, '/')));
     var week = w[lastday2.getDay()];
    
     strdate =lastday+ week
    return strdate;
 	}
 	$('.last_today').val(remove())
   
 })
  $('#surebtn').click(function(){
  	$(".up_result").css('display','block')
  })
  
  
  
//终端销售台数
var  end_num = document.getElementById("end_num");
var endNumChart = echarts.init(end_num);
var app = {};
option = null;
app.title = '折柱混合';


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['17年4月实销台数','18年4月实销台数','数量同比增幅']
    },
    xAxis: [
        {
            type: 'category',
            data: ['金花苏宁','雁塔路赛格电脑城','北赛格电脑城','咸阳新华书店','汉唐书城','金花国美','城固新华教育电子'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{interval: 0}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '台数',
            min: 0,
            max: 100000,
            interval: 25000,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '同比增幅',
            min: -50,
            max: 150,
            interval: 50,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'17年4月实销台数',
            type:'bar',
            data:[79136, 81156, 70128, 25676,54326, 28874, 23682]
        },
        {
            name:'18年4月实销台数',
            type:'bar',
            data:[55226,81330, 84942, 30772, 37946, 65732,53264]
        },
        {
            name:'同比增幅',
            type:'line',
            yAxisIndex: 1,
            data:[-30.2,0.2,21.1,19.8,-30.2,127.7,124.9]
        }
    ]
};

if (option && typeof option === "object") {
    endNumChart.setOption(option, true);
}

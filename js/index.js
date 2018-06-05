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

	$("#class_list2").prepend("<li><input type='checkbox' value='u16'/>u16</li><li><input type='checkbox'value='u16(32G)'/>u16(32G)</li><li><input type='checkbox' value='u18'/>u18</li><li><input type='checkbox' value='u19'/>u19</li><li><input type='checkbox'value='u6S'/>u6S</li><li><input type='checkbox' value='u7'/>u7</li><li><input type='checkbox' value='u20'/>u20</li><li><input type='checkbox' value='u28'/>u28</li>")
}
else if(p1=="儿童平板"){

	$("#class_list2").prepend("<li><input type='checkbox'value='V1' />V1</li><li><input type='checkbox'value='V1S' />V1S</li><li><input type='checkbox' value='V2'/>V2</li><li><input type='checkbox' value='V2标准版'/>V2标准版</li>")

}
else if(p1=="儿童手表"){
	$("#class_list2").prepend("<li><input type='checkbox'value='UW1' />UW1</li><li><input type='checkbox' value='UW3'/>UW3</li><li><input type='checkbox' value='UW5'/>UW5</li>")

}
else if(p1=="点读机"){
	$("#class_list2").prepend("<li><input type='checkbox' value='Q6'/>Q6</li><li><input type='checkbox' value='Q6升级版'/>Q6升级版</li><li><input type='checkbox'value='Q6(8G)' />Q6(8G)</li>")

}
else if(p1=="点读机及其他"){
	$("#class_list2").prepend("<li><input type='checkbox' value='A1高级版' />A1高级版</li><li><input type='checkbox' value='NE600'/>NE600</li><li><input type='checkbox' value='NP18+' />NP18+</li><li><input type='checkbox' value='小鸡叫叫'/>小鸡叫叫</li>")

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

	
})


//幼教产品及实销

var c = document.getElementById("childtotal");
var childChart = echarts.init(c);
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

child={
	0:{
		in:[0,265,230,0],
		out:[4,183,190,8],
		differ:[-4,82,40,-8]
	},
	1:{
		in:[0,400,300],
		out:[70,375,81],
		differ:[-70,25,219]
	},
	2:{
		in:[200,0,0],
		out:[6,8,32,1607],
		differ:[194,-8,-32]
	},
	3:{
		in:[0,0,0,0],
		out:[15,27,0,64],
		differ:[-15,-27,0,-64]
	}
}
option3 = {
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
            data: ['儿童平板', '儿童手表', '点读笔', '点读机及其他']
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
            data: [495,700,200,0]
        },
        {
            name: '累计实销台数',
            type: 'bar',
            label: labelOption,
            data: [385, 526,46,106]
        },
        {
            name: '库存差台数',
            type: 'bar',
            label: labelOption,
            data: [100,174,154,-160]
        },

    ]
};
if (option3 && typeof option3 === "object") {
    childChart.setOption(option3, true);
}

$('#surebtn2').click(function(){
	var p1=$('#child_select').children('option:selected').val()
	var arr =new Array()
	var new_inarr = []
	var new_outarr = []
	var new_differarr = []
	var ck=$('#class_list2 :input[type=checkbox]')
	if(p1=='儿童平板'){
		var inArr =student[0].in
	var outArr=student[0].out
	var differArr = student[0].differ
	}
	else if(p1=='儿童手表'){
		var inArr =student[1].in
	var outArr=student[1].out
	var differArr = student[1].differ
	}
	else if(p1=='点读机'){
		var inArr =student[2].in
	var outArr=student[2].out
	var differArr = student[2].differ
	}
	else if(p1=='点读机及其他'){
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

	
     childChart.setOption({
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
   //100万以上
 $(function(){
 	var listBefore=new Array("金花国美","城固新华教育电子","北赛格电脑城","咸阳新华书店","雁塔路赛格电脑城");
    var listAfter = new Array("金花苏宁","汉唐书城")
 list_before="";
 list_after="";
for (var i=0;i<listBefore.length;i++)
{
  list_before +="<p>"+listBefore[i]+"</p>";
}
for (var j=0;j<listAfter.length;j++)
{
  list_after +="<p>"+listAfter[j]+"</p>";
}
console.log(list_before)
$('#list_before').prepend(list_before);
 $('#list_after').prepend( list_after);	
 	
 })
   $('#list_select').change(function(){ 
  	$('#list_before').empty()
  	$('#list_after').empty()
  	var p1=$('#list_select').children('option:selected').val()	
  	var p2=$('#list_select2').children('option:selected').val()	
  	if(p1=="年实销金额100万以上"){
  			var listBefore=new Array("金花国美","城固新华教育电子","北赛格电脑城","咸阳新华书店","雁塔路赛格电脑城");
           var listAfter = new Array("金花苏宁","汉唐书城")
           var lastyear = [28874,23682,70128,25676,81156,54326,79136]
           var thisyear = [65732,53264,84942,30772,81330,37946,55226]
           var zenfu = [127.7,124.9,21.1,19.8,0.2,-30.2,-30.2]
  	}
  	else if(p1=="年实销金额50-100万"){
  	
  		 var listBefore=new Array("优学派新华书店体验店","泾阳专卖店","阎良人人乐","优学派神木专卖店","彬县公刘街润家购物广场");
         var listAfter = new Array("小寨赛格国际购物中心","西大街国美","陕西电子城","宝鸡万邦书城","西二环国美")
         var lastyear = [28874,23682,70128,25676,81156,54326,79136]
         var thisyear = [65732,53264,84942,30772,81330,37946,55226]
  	     var zenfu = [612.0,471.2,284.1,160.8,137.4,60.5,24.6]
  	}
  	else if(p1=="年实销金额30-50万"){
  		var listBefore=new Array("优学派轻工专柜","北二环国美","周至隆发商城","武功诺亚舟专卖","安康市汉唐书城");
        var listAfter = new Array("洛川华商城","新华书店","临潼昌盛数码","正大商场","新华书店")
  	    var lastyear = [6994,4496,12488,30076,17588,43910,79136]
        var thisyear = [49798,25682,47964,78436,41756,70472,40470]
         var zenfu = [812.1,566.0,294.8,205.7,100,100,49.6]
  	}
  	else if(p1=="年实销金额10-30万"){
  		var listBefore=new Array("莲湖苏宁","兴庆国美","优学派定边体验店","南郊人人乐","华润万家西影路店");
        var listAfter = new Array("扶风文海书店(新区)","优学派府谷专卖店","客都超市优学派专卖","阎良新世纪","长安百货")
  	    var lastyear = [2698,3996,4496,6792,5794,4696,4696]
        var thisyear = [18124,11888,12890,19082,16074,11290,9892]
  	    var zenfu = [571.8,197.5,186.7,180.9,177.4,140.4,110.6]
  	}
  	list_before="";
    list_after="";
    
for (var i=0;i<listBefore.length;i++)
{
  list_before +="<p>"+listBefore[i]+"</p>";
}
for (var j=0;j<listAfter.length;j++)
{
  list_after +="<p>"+listAfter[j]+"</p>";
}
console.log(list_before)
$('#list_before').prepend(list_before);
 $('#list_after').prepend( list_after);	
 if(p2=="按金额"){
 	
 
 	
 } else{
 	
 }
	   endNumChart.setOption({
        xAxis: {
            data: listBefore

        },
        series:[
        {
        	data:lastyear
        },
        {
        	data:thisyear
        },
        {
        	data:zenfu
        },
        ]

    });
 
 	
  	})


var  end_num = document.getElementById("end_num");
var endNumChart = echarts.init(end_num);
var app = {};
option4 = null;
app.title = '折柱混合';


option4 = {
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
        data:['17年4月实销金额','18年4月实销金额','数量同比增幅']
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
            name: '金额',
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
            min: -100,
            max: 900,
            interval: 100,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'17年4月实销金额',
            type:'bar',
            data:[79136, 81156, 70128, 25676,54326, 28874, 23682]
        },
        {
            name:'18年4月实销金额',
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

if (option4 && typeof option4 === "object") {
    endNumChart.setOption(option4, true);
}
 //原有终端实销同比
 
$("#differ_select").change(function(){
	var p=$("#differ_select").children('option:selected').val()
	if(p=="按金额"){
		$('#beforediffer2').hide()
		$('#beforediffer').show()
	}
	else{
		$('#beforediffer').hide()
		$('#beforediffer2').show()
	}
	
})

$("#sale_select").change(function(){
	var p=$("#sale_select").children('option:selected').val()
	if(p=="按份额"){
		$('#salecompare2').hide()
		$('#salecompare1').show()
	}
	else{
		$('#salecompare1').hide()
		$('#salecompare2').show()
	}
	
})
$('#s_tab4 li').click(function(){
	$(this).addClass('s_active')
	$(this).css('color','#fff')
	$(this).siblings('li').removeClass('s_active')
	$(this).siblings('li').css('color','#cbcdd0')
	if($(this).text()=="渠道类型"){
		$('#endnum2').hide()
		$('#endnum1').show()
	}
	else if($(this).text()=="市场等级"){
		
		$('#endnum1').hide()
		$('#endnum2').show()
	}
})
$('#s_tab5 li').click(function(){
	$(this).addClass('s_active')
	$(this).css('color','#fff')
	$(this).siblings('li').removeClass('s_active')
	$(this).siblings('li').css('color','#cbcdd0')
	if($(this).text()=="渠道类型"){
		$('#endhappen2').hide()
		$('#endhappen1').show()
	}
	else if($(this).text()=="市场等级"){
		
		$('#endhappen1').hide()
		$('#endhappen2').show()
	}
})
$('#s_tab6 li').click(function(){
	$(this).addClass('s_active')
	$(this).css('color','#fff')
	$(this).siblings('li').removeClass('s_active')
	$(this).siblings('li').css('color','#cbcdd0')
	if($(this).text()=="渠道类型"){
		$('#newcompare2').hide()
		$('#newcompare1').show()
	}
	else if($(this).text()=="市场等级"){
		
		$('#newcompare1').hide()
		$('#newcompare2').show()
	}
})
$('#s_tab7 li').click(function(){
	$(this).addClass('s_active')
	$(this).css('color','#fff')
	$(this).siblings('li').removeClass('s_active')
	$(this).siblings('li').css('color','#cbcdd0')
	if($(this).text()=="渠道类型"){
		$('#proportion2').hide()
		$('#proportion1').show()
	}
	else if($(this).text()=="市场等级"){
		
		$('#proportion1').hide()
		$('#proportion2').show()
	}
})
$('#s_tab8 li').click(function(){
	$(this).addClass('s_active')
	$(this).css('color','#fff')
	$(this).siblings('li').removeClass('s_active')
	$(this).siblings('li').css('color','#cbcdd0')
	if($(this).text()=="渠道类型"){
		$('#condition2').hide()
		$('#condition1').show()
	}
	else if($(this).text()=="市场等级"){
		
		$('#condition1').hide()
		$('#condition2').show()
	}
})


//地图


var mapChart = echarts.init(document.getElementById('map'));
        mapChart.showLoading();
        $.get('../js/shanxi.json', function (geoJson) {
            mapChart.hideLoading();
            echarts.registerMap('陕西', geoJson);

            mapChart.setOption(
            	option5 = {
//              visualMap: {
//                  min: 0,
//                  max: 500,
//                  show: false,
//                  splitNumber: 5,
//                  realtime: false,
//                 calculable: true,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
//                  textStyle: {
//                      color: '#fff'
//                  }
//              },
      tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
        },
              toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
                   visualMap: {
              min: 0,
            max: 500,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            }
        },
//      dataRange: {  
//                      min: 0,  
//                      max: 1000000,  
//                      text:['High','Low'],  
//                      realtime: false,  
//                      calculable : true,  
//                      color: ['orangered','yellow','lightskyblue']  
//                  },  
                geo: {
                    map: '陕西',
                    label: {
                        normal: {
                            show: true,
                            color: '#fff'
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },

                    "left": 0,
                    "right": 0,
                    "top": 0,
                    "bottom": 0
                },
                series: [
                {
                    name: '活跃人数分布',
                    type: 'map',
                    coordinateSystem: 'geo',
                    blurSize: 30,
                      itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                      data:[
                    {name: '榆林市', value: 400}
//                  {name: '湾仔', value: 15477.48},
//                  {name: '东区', value: 31686.1},
//                  {name: '南区', value: 6992.6},
//                  {name: '油尖旺', value: 44045.49},
//                  {name: '深水埗', value: 40689.64},
//                  {name: '九龙城', value: 37659.78},
//                  {name: '黄大仙', value: 45180.97},
//                  {name: '观塘', value: 55204.26},
//                  {name: '葵青', value: 21900.9},
//                  {name: '荃湾', value: 4918.26},
//                  {name: '屯门', value: 5881.84},
//                  {name: '元朗', value: 4178.01},
//                  {name: '北区', value: 2227.92},
//                  {name: '大埔', value: 2180.98},
//                  {name: '沙田', value: 9172.94},
//                  {name: '西贡', value: 3368},
//                  {name: '离岛', value: 806.98}
                ],
                     itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                },
                
                ]
            });
        });
$(window).on('load',function(){
	var d=['leftl','centerl','rightl'];
	$('.bt1').bind('click',function(){
	var a=$('.leftl');
	var b=$('.centerl');
	var c=$('.rightl');
	animation(this.className,a,b,c,d);
	});
	$('.bt2').bind('click',function(){
	var a=$('.leftl');
	var b=$('.centerl');
	var c=$('.rightl');
	animation(this.className,a,b,c,d);
	});
});

function animation(e,a,b,c,d){
	switch(e){
		case 'bt2'  :a.attr('class',d[1]);b.attr('class',d[2]);c.attr('class',d[0]);break;
		case 'bt1':a.attr('class',d[2]);b.attr('class',d[0]);c.attr('class',d[1]);break;
		default :alert('Someting Wrong!');

	}

}

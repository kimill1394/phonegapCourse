$(document).ready(function(){

	if(!localStorage['app_task_init']) {
		localStorage['app_task_init'] = "true";
		localStorage['app_task_cnt'] = 0;
	}

	$(".BtnAdd").click(function(){ // 로딩하면서 BtnAdd한테 클로져를 클릭함수로 달아줌
		var input = window.prompt('바이리스트를 입력하세욥 ㅎ.ㅎ');
		if(!input) return false;
		var cnt = parseInt(localStorage['app_task_cnt']);
		addTask(cnt, input);

		// localStorage update
		localStorage['app_task_'+cnt] = input;
		localStorage['app_task_cnt'] = ++cnt;
	});

	$(".BtnInit").click(function(){
		if(confirm('다샀어?.?')) {
			$('TaskWrap').empty();
			var cnt = parseInt(localStorage['app_task_cnt']);
			for (var i=0; i < cnt; i++)
				localStorage.removeItem("app_task_"+i);
			localStorage['app_task_cnt'] = 0;
			redraw();
		}
	});

	$(document.body).on('click', '.BtnDel', function() {
		// 클래스가 뒤에인 노드가 생성될때마다(on) click함수에 클로져 달아줌
		// 삭제는 off
		if(confirm('샀어?.?')) {
			var idx = $(this).parent().attr('data-id');
			localStorage.removeItem('app_task_'+idx);
			$(this).parent().remove();
		}
	});

	$(document.body).on('click', '.BtnEdit', function() {
		var idx = $(this).parent().attr('data-id');
		var oldInput = localStorage['app_task_'+idx];
		var input = prompt('수정사항을 입력하세욥 ㅎ.ㅎ', oldInput);
		if(!input) return false;
		$('div[data-id='+idx+']>p').text(input);
		localStorage['app_task_'+idx] = input;
	});

	redraw();
});

function redraw() {
	var cnt = parseInt(localStorage['app_task_cnt']);
	$('.TaskWrap').empty();
	for(var i=0; i<cnt; i++) {
		var data = localStorage['app_task_'+i];
		if(!data) continue;
		addTask(i, data);
	}
}

/* function makeTag(tag_type, class_name) { // attr 리스트
	return $(tag_type).addClass(class_name);
	// tag_type은 <tag></tag> 형태로 만들어서 넣어야 한다 TT
} */

function addTask(cnt, input) {
	var item = $('<div></div>').addClass('Task').attr('data-id', cnt);
			$('<p></p>').text(input).appendTo(item);
			$('<input>').addClass('BtnEdit').attr('type', 'button').val('edit').appendTo(item);
			$('<input>').addClass('BtnDel').attr('type', 'button').val('del').appendTo(item);
	item.appendTo('.TaskWrap');
}

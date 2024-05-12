// JavaScript Document

	// タイピング風
	var id = ['a','b']; //指定するidを全て配列で渡す
	var tx = [];
	var txCount = [];
	var txSp = 70; // テキストの表示速度
	var dly = 0; // 次の文章までの待ち時間
	var count = 0;

	window.onload = function(){
		kamikakushi();
		countSet();
		itimozi()
	}

	function countSet(){ // 文字数カウントの初期設定
		for(var n=0;n<id.length;n++){
		txCount[n] = 0;
		}
	}


	function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
		for(var i=0;i<id.length;i++){
			id[i] = document.getElementById(id[i]);
			tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
			id[i].innerHTML = '';
		}
	}

	function itimozi(){
		id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
			if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
				setTimeout("itimozi()",txSp); // 次の文字へ進む
			}else{
			id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
			count++; // 次の段落に進む為のカウントアップ
			if(count != id.length){ // id数が最後なら終了
				setTimeout("itimozi()",dly); // 次の段落へ進む
			}
		}
	}


	// fadein
	$(window).scroll(function() {
		$('.fadein').each(function() {
			let scroll = $(window).scrollTop();
			let target = $(this).offset().top;
			let windowHeight = $(window).height();
			
			if (scroll > target - windowHeight + 200) {
				$(this).css('opacity','1');
				$(this).css('transform','translateY(0)');
			}
		});
		$('.fademove').each(function() {
			let scroll = $(window).scrollTop();
			let target = $(this).offset().top;
			let windowHeight = $(window).height();
			
			if (scroll > target - windowHeight + 200) {
				$(this).css('opacity','1');
				$(this).css('transform','translateX(0)');
			}
		});
		$('.fade').each(function() {
			let scroll = $(window).scrollTop();
			let target = $(this).offset().top;
			let windowHeight = $(window).height();
			
			if (scroll > target - windowHeight + 200) {
				$(this).css('opacity','1');
			}
		});
	});
	
	// 雪 参考サイトhttps://qiita.com/chi1180/items/0cfed7917cbb08c604f4
	setInterval(function(){
		// spanを作成し、spanのクラス名にsnowをつけている
		const snow = document.createElement('span');
		snow.classList.add('snow');
		
		//snowの位置をランダムで指定
		snow.style.width = snow.style.height = Math.random() * 8 + 'px'; //幅と高さが8まででランダムに指定
		snow.style.left = Math.random() * 100 + '%'; //leftが100%まででランダムに指定
		
		//snow-containerにsnowを子要素を指定
		document.querySelector('.snow-container').appendChild(snow);
		
		//cssで指定している通り10秒で消す
		setTimeout(function(){
			snow.remove();
		}, 100000); //これで10秒
	}, 100); //この秒数ごとに実行

	

$(function() {
	
});
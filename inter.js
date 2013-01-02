function show_text_mp(){
			document.getElementById('mp_on').innerHTML ='Мови Програмування';
		}
		function hide_text_mp(){
			document.getElementById('mp_on').innerHTML ='МП';
		}
		function show_text_odm(){
			document.getElementById('odm_on').innerHTML ='Основи Дискретної Математики';
		}
		function hide_text_odm(){
			document.getElementById('odm_on').innerHTML ='ОДМ';
		}
		function show_text_oma(){
			document.getElementById('oma_on').innerHTML ='Основи Мат. Аналізу';
		}
		function hide_text_oma(){
			document.getElementById('oma_on').innerHTML ='ОМА';
		}
		function show_text_mzkt(){
			document.getElementById('mzkt_on').innerHTML ='Методи та Зас. Копм. Технологій';
		}
		function hide_text_mzkt(){
			document.getElementById('mzkt_on').innerHTML ='МЗКТ';
		}
		function show_text_am(){
			document.getElementById('am_on').innerHTML ='Англійська мова';
		}
		function hide_text_am(){
			document.getElementById('am_on').innerHTML ='АМ';
		}
		function show_text_zpbp(){
			document.getElementById('zpbp_on').innerHTML ='Заст. Прин. Бол. Процесу';
		}
		function hide_text_zpbp(){
			document.getElementById('zpbp_on').innerHTML ='ЗПБП';
		}
		function show_text_um(){
			document.getElementById('um_on').innerHTML ='Українська мова';
		}
		function hide_text_um(){
			document.getElementById('um_on').innerHTML ='УМ';
		}
		function show_faq(){
			document.getElementById('ball_list').innerHTML ='<style> .about{line-height: 1.5;}</style><div class="about">USIC marks - сервіс для обрахунку середнього балу. Даний сервіс знаходится в розробці і на цей період доступний тільки для інформатиків першого року навчання. Будемо раді чути ваші відгуки - usicmark@gmail.com</div>';
			var button = document.getElementById('button_area');
    		button.innerHTML ='<a href="#" class="button" onClick="location.reload();">Назад</a>'
    		remove_faq();
		}	
		function remove_faq(){
			document.getElementById('footer').innerHTML ='';
		}
Object.prototype.isInteger = function () {
    return (this.toString().search(/^-?[0-9]+$/) == 0 )
}
function tvalid(input){
    if (input.isInteger() && input>=0 && input<=100) {
        return true;
    }
    else {
        return false;
    }
}


$(document).ready(function () {

	//showing about
	$('.footer_main').click(function(){
		$('.ball').html('<div class="about">USIC marks - сервіс для обрахунку середнього балу. Даний сервіс знаходится в розробці і на цей період доступний тільки для інформатиків першого року навчання. Будемо раді чути ваші відгуки - usicmark@gmail.com</div>');
		$('#footer').hide();
		$('.button').replaceWith('<div class="button" onClick="location.reload();">Назад</div>');
	});
	//-------

	//counting
	$('.button').click(function(){
		var mp = $('input[name=mp]').val();
        var odm = $('input[name=odm]').val();
        var oma = $('input[name=oma]').val();
        var mzkt = $('input[name=mzkt]').val();
        var am = $('input[name=am]').val();
        var zpbp = $('input[name=zpbp]').val();
        var um = $('input[name=um]').val();
        if (tvalid(mp)&&tvalid(odm)&&tvalid(oma)&&tvalid(mzkt)&&tvalid(am)&&tvalid(zpbp)&&tvalid(um)) {
            $('.ball').css('border-color', '#cecece');
        	var mark = (oma*4+mzkt*2.5+um*1.5+mp*6+odm*6+am*2+zpbp*2)/24;
        	$('.ball').css('text-align', 'center');
        	$('.ball').html('<span class="result">'+mark.toFixed()+'</span>');
        	$('.button').replaceWith('<a href="#" class="button" onClick="location.reload();">Ще раз</a>');
        }
        else{
        	$('.ball').css('border-color', '#FF0000');
        }
	});
	//-------
});
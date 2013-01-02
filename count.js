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
function validation(){
        var mp = document.getElementById("mp").value;
        var odm = document.getElementById("odm").value;
        var oma = document.getElementById("oma").value;
        var mzkt = document.getElementById("mzkt").value;
        var am = document.getElementById("am").value;
        var zpbp = document.getElementById("zpbp").value;
        var um = document.getElementById("um").value; 
    if(tvalid(mp)&&tvalid(odm)&&tvalid(oma)&&tvalid(mzkt)&&tvalid(am)&&tvalid(zpbp)&&tvalid(um)){
        return true;
    }
    else{
        return false;
    }
}
function markSender(mark){
<<<<<<< HEAD
	var elem = document.getElementById('ball_list');;;
	elem.innerHTML ='<style>.ball{text-align:center;}</style><span class="result">'+mark+'</span>';
=======
  var elem = document.getElementById('ball_list');
	elem.innerHTML ='<style>.ball{text-align:center;}</style><div class="result"> <div class="result_main"><div class="result_background blue"><span>'+mark+'</span></div></div></div></div></div> ';
>>>>>>> d32fd606d012a6f3d00e619cd754b062390659e6
    var button = document.getElementById('button_area');
    button.innerHTML ='<a href="#" class="button" onClick="location.reload();">Ще раз</a>'
	}
function generall(){
    if (validation()) {
        var mp = document.getElementById("mp").value;
        var odm = document.getElementById("odm").value;
        var oma = document.getElementById("oma").value;
        var mzkt = document.getElementById("mzkt").value;
        var am = document.getElementById("am").value;
        var zpbp = document.getElementById("zpbp").value;
        var um = document.getElementById("um").value; 
        var result = (oma*4+mzkt*2.5+um*1.5+mp*6+odm*6+am*2+zpbp*2)/24;
        markSender(result.toFixed());
    }
    else{
        alert("Ви ввели некоректні дані");
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> d32fd606d012a6f3d00e619cd754b062390659e6

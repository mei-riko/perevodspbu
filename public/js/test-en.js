$(document).ready(function() {
    var seconds = 45*60 + 1, h,m,s,t;
    function countDown() {
        if (seconds > 0) {
                seconds --;
                    h = seconds/3600 ^ 0,
                    m = (seconds-h*3600)/60 ^ 0,
                    s = seconds-h*3600-m*60,
                    time = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
                $("#timer").text(time);
        }else{
            alert("Время вышло, тестирование завершено.");
            resultTest();
            return false;
        }
        setTimeout(function() {
            countDown();
        }, 1000);
    }
    
});
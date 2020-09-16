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
    function resultTest(){
        var answer=[];
        var answerDefault=["c","c","b","b","c","c","b","b","c","c","c","a","c","b","c","a","b","c","b","c","a","b","a","c","b","c","a","b","c","c","a","b","c","a","c","b","a","c","a","c","b","c","a","b","c","b","c","c","a","b","b","c","b","a","c","b","b","a","b","c","c","b","a","a","c","b","a","c","c","b","c","b","a","c","b","a","c","a","b","c","a","b","c","c","a","b","c","b","c","a","a","b","c","a","b","c","c","b","a","c"];
        var index;
        var indexDefault;
        var sum=0;
        var level = '';
        for (indexDefault = 0; indexDefault < 100; ++indexDefault) {
            index=indexDefault+1;
            var inputAnswer = $(".question" + index + " .custom-control input:checked");
            if(inputAnswer.length === 0){
                answer[index]=0;
            }else{
                answer[index]=inputAnswer.val();
            }
            
            if(answerDefault[indexDefault] == answer[index]){
                sum=sum+1;
            }
            //console.log(index + ' ' + answerDefault[indexDefault] + ' ' + answer[index] + ' ' + sum);
        }
    
        if (sum >= 0 && sum <15){level='Beginner'; console.log('Beginner');}
        if (sum >= 14 && sum <35){level='Elementary'; console.log('Elementary');}
        if (sum >= 34 && sum <55){level='Pre-Intermediate'; console.log('Pre-Intermediate');}
        if (sum >= 54 && sum <80){level='Intermediate'; console.log('Intermediate');}
        if (sum >= 79 && sum <100){level='Upper-Intermediate'; console.log('Upper-Intermediate');}
        if (sum == 100){level='FCE'; console.log('FCE');}
        
        $("#testResult").val('Ваш результат: ' + sum + '. Ваш уровень владения английским языком: ' + level);
        $("#submitTest").click();
        $("#testSuccess").text('Ваш результат: ' + sum + '. Ваш уровень владения английским языком: ' + level);
        $("#testSuccess").slideToggle();
        $('#contentTest').slideToggle();
    }

    $('#startButton').on('click', function(event) {
        var email=$('#email').val();
        var name=$('#fio').val();
        var formTest=$('#formTest');
        var contentTest=$('#contentTest');
        
        FD = true;
        
        //проверка заполненности полей
        if ((email == null) || (email.length < 1)){
            alert('Чтобы начать тестирование, заполните свой e-mail');
            FD = false;
            return false;
	    }
	    if ((name == null) || (name.length < 1)){
            alert('Чтобы начать тестирование, укажите ФИО');
            FD = false;
            return false;
	    }
	    
	    //запуск теста
	    if (FD === true){
	        console.log('Готово к запуску теста');
	        formTest.slideToggle();
	        contentTest.slideToggle();
	        $(this).slideToggle();
	        
	        countDown(); //ТАЙМЕР НА 45 МИНУТ
	    }
    });

    $('.answer-input').on('click', function(event) {
        var checkAnswer = $(this).attr('id');
        var questionClass = $(this).attr('name');
        
        console.log(checkAnswer + ' ' + questionClass);
        
        var questionCheck = $("#contentTest").find(".question." + questionClass);
        questionCheck.find('span').css('display','none')
        var showAnswer = questionCheck.find("span."+checkAnswer);
        showAnswer.css('display','inline');
    });
    
    $('#endButton').on('click', function(event) {
        resultTest();
    });
    
});
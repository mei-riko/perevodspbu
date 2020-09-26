$(document).ready(function() {
    // var seconds = 20 + 1, h,m,s,t;
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
            if( !$(".test .test__content").hasClass("test__content--hidden") ){
                alert("Время вышло, тестирование завершено.");
                $(".test .test__content").slideUp();
                $(".test .test__form").slideDown();
                resultTest();
                return false;
            }
        }
        setTimeout(function() {
            countDown();
        }, 1000);
    }
    function resultTest(){
        let answer=[];
        let answerDefault=["b", "a", "c", "b", "a", "a", "a", "b", "c", "b", "c", "b", "c", "a", "c", "a", "b", "b", "a", "a", "b", "b", "a", "b", "b", "b", "c", "a", "a", "a", "b", "a", "b", "c", "a", "a", "b", "b", "b", "b", "c", "a", "b", "c", "b", "a", "b", "b", "b", "b", "b", "b", "a", "c", "b", "c", "c", "c", "c", "b", "b", "c", "c", "a", "b", "c", "b", "b", "a", "b", "c", "a", "a", "c", "b", "b", "b", "a", "b", "b", "b", "b", "a", "a", "c", "c", "b", "a", "a", "b", "b", "b", "c", "b", "c", "c", "c", "c", "b", "b"];
        let index,
            indexDefault;
        let sum=0;
        let level = '';
        let recommendation = '';
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
        if (sum >= 0 && sum <11){
            level='A1/Starter';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль A1»'
        }
        if (sum >= 11 && sum <31){
            level='A2.1/Elementary';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль A2.1»'
        }
        if (sum >= 31 && sum <50){
            level='A2.2/Pre-Intermediate';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль A2.2»'
        }
        if (sum >= 50 && sum <70){
            level='B1/Intermediate';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль B1»';
        }
        if (sum >= 70 && sum <90){
            level='B2/Upper-Intermediate';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль B2».<br/>Школа перевода: <br/>«Переводчик в сфере профессиональной коммуникации (Профиль 3)», «Синхронный перевод и межкультурная коммуникация. Первая ступень».<br/>Школа гидов-переводчиков: <br/>«Переводчик в сфере профессиональной коммуникации: <br/>«Гид-переводчик»).<br/>Курсы иностранных языков: <br/>«Переводчик в сфере профессиональной коммуникации («Гид-переводчик»)»';
        }
        if (sum >= 90){
            level='C1/Advanced';
            recommendation='Курсы иностранных языков: <br/>«Курс разговорного испанского языка. Модуль C1».<br/>Школа перевода: <br/>«Переводчик в сфере профессиональной коммуникации (Профиль 3)», «Синхронный перевод и межкультурная коммуникация. Первая ступень».<br/>Школа гидов-переводчиков: <br/>«Переводчик в сфере профессиональной коммуникации («Гид-переводчик»)»)';
        }
        // Вписать в форму
        $(".test .test__form .form .input[data-type=result]").val(sum);
        $(".test .test__form .form .input[data-type=recommendation]").val(recommendation);
        $(".test .test__form .form .input[data-type=level]").val(level);
        
        // console.log (recommendation);

        // Показать в блоке
        $(".test .test__result .test__result-val[data-result=sum]").text(sum);
        $(".test .test__result .test__result-val[data-result=level]").text(level);
    }
    $('.answer-input').on('click', function(e) {
        // Для какого вопроса
        var questionClass = $(this).attr('name');
        // Выбранный ответ
        var checkAnswer = $(this).attr('id');
        // Находим нужный вопрос
        var questionCheck = $(".test .test__content").find(".question." + questionClass);
        // Находим нужный ответ
        var showAnswer = questionCheck.find("span."+checkAnswer);
        // Скрываем все ответы
        questionCheck.find('span').css('display','none');
        // Показывает только нужный
        showAnswer.css('display','inline');
    });
    // Начало теста
    $('#startButton').on('click', function(e) {
        $(".test .test__welcome").slideUp();
        $(".test .test__content").slideDown();
        countDown(); //ТАЙМЕР НА 45 МИНУТ
    });
    // Завершение теста
    $('#endButton').on('click', function(e) {
        confirm('Завершить тестирование? Отменить действие будет невозможно.');
        $(".test .test__content").addClass("test__content--hidden");
        $(".test .test__content").slideUp();
        $(".test .test__form").slideDown();
        
        resultTest();
    });
});
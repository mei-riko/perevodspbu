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
        let answerDefault=["d", "b", "c", "d", "d", "a", "b", "c", "d", "a", "c", "a", "b", "c", "b", "c", "a", "d", "a", "c", "b", "a", "c", "a", "d", "b", "c", "a", "b", "c", "d", "b", "c", "a", "d", "b", "b", "d", "a", "b", "a", "d", "b", "c", "a", "b", "a", "c", "b", "c", "b", "d", "b", "a", "c", "a", "b", "d", "d", "b", "b", "a", "d", "c", "a", "d", "d", "c", "a", "d", "c", "a", "d", "c", "c"];
        let index,
            indexDefault;
        let sum=0;
        let level = '';
        let recommendation = '';
        for (indexDefault = 0; indexDefault < 75; ++indexDefault) {
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
        if (sum >= 0 && sum <20){
            level='A1';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного итальянского языка. Модуль A1»</li>';
        }
        if (sum >= 21 && sum <41){
            level='A2';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного итальянского языка. Модуль A2»</li>';
        }
        if (sum >= 41 && sum <61){
            level='B1';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного итальянского языка. Модуль B1»</li>';
        }
        if (sum >= 61 && sum <75){
            level='B2';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного итальянского языка. Модуль B2».</li><li><strong>Школа перевода:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации (Профиль 3)», </br>«Синхронный перевод и межкультурная коммуникация».</li><li><strong>Школа гидов-переводчиков:</strong> <br/>«Переводчик в сфере профессиональной коммуникации («Гид-переводчик»)».</li>';
        }
		if (sum == 75){
            level='C1 (требуется собеседование с преподавателем)';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного итальянского языка. Модуль С1».</li><li><strong>Школа перевода:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации (Профиль 3)», </br>«Синхронный перевод и межкультурная коммуникация».</li><li><strong>Школа гидов-переводчиков:</strong> <br/>«Переводчик в сфере профессиональной коммуникации («Гид-переводчик»)».</li>';
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
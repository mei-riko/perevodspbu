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
        let answerDefault=["c","c","b","b","c","c","b","b","c","c","c","a","c","b","c","a","b","c","b","c","a","b","a","c","b","c","a","b","c","c","a","b","c","a","c","b","a","c","a","c","b","c","a","b","c","b","c","c","a","b","b","c","b","a","c","b","b","a","b","c","c","b","a","a","c","b","a","c","c","b","c","b","a","c","b","a","c","a","b","c","a","b","c","c","a","b","c","b","c","a","a","b","c","a","b","c","c","b","a","c"];
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
        if (sum >= 0 && sum <16){
            level='A1/Starter';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль A1», <br/>«Интенсивный курс английского языка. Модуль A1»</li>';
        }
        if (sum >= 16 && sum <31){
            level='A2.1/Elementary';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль A2.1, <br/>«Интенсивный курс английского языка. Модуль A2.1», <br/>«Практическая фонетика английского языка: звуки, ритм, интонация»</li>';
        }
        if (sum >= 31 && sum <50){
            level='A2.2/Pre-Intermediate';
            recommendation='<li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль A2.2, <br/>«Интенсивный курс английского языка. Модуль A2.2», </br>«Деловой английский язык. BEC. Модуль Preliminary», <br/>«Английский язык для юристов. TOLES. Модуль Foundation», <br/>«Практическая фонетика английского языка: звуки, ритм, интонация»</li>'
        }
        if (sum >= 50 && sum <70){
            level='B1/Intermediate';
            recommendation='<li><strong>Школа перевода:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации (профиль 2)», <br/> «Искусство перевода».</li><li><strong>Школа гидов-переводчиков:</strong> <br/>«Переводчик в сфере профессиональной коммуникации (Гид-переводчик)».</li><li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль B1», <br/>«Интенсивный курс английского языка. Модуль B1», <br/>«Деловой английский язык. BEC. Модуль Vantage», <br/>«Английский язык для юристов. TOLES. Модули Foundation, Higher», <br/>«Практическая фонетика английского языка: звуки, ритм, интонация», <br/>«Подготовка к экзамену IELTS», <br/>«Подготовка к экзамену TOEFL».</li>';
        }
        if (sum >= 70 && sum <90){
            level='B2/Upper-Intermediate';
            recommendation='<li><strong>Школа перевода:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации (профиль 3)», <br/>«Синхронный перевод и межкультурная коммуникация. Первая ступень», <br/>«Искусство перевода», <br/>«Инновационные технологии в переводе».</li><li><strong>Школа гидов-переводчиков:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации «Гид-переводчик».</li><li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль B2», <br/>«Интенсивный курс английского языка. Модуль B2», <br/>«Деловой английский язык. BEC. Модуль Higher», <br/>«Английский язык для юристов. TOLES. Модули Higher, Advanced», <br/>«Практическая фонетика английского языка: звуки, ритм, интонация», <br/>«Подготовка к экзамену IELTS», <br/>«Подготовка к экзамену TOEFL».</li><li><strong>Повышение квалификации преподавателей вузов:</strong> <br/>«Английский язык для преподавателей специальных дисциплин в вузах».</li>';
        }
        if (sum >= 90){
            level='C1/Advanced';
            recommendation='<li><strong>Школа перевода:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации (профиль 1)», <br/>«Конференц-перевод (синхронный и последовательный перевод)», <br/>«Синхронный перевод и межкультурная коммуникация», <br/>«Искусство перевода», <br/>«Инновационные технологии в переводе».</li><li><strong>Школа гидов-переводчиков:</strong>  <br/>«Переводчик в сфере профессиональной коммуникации: «Гид-переводчик».</li><li><strong>Курсы иностранных языков:</strong> <br/>«Курс разговорного английского языка. Модуль C1», <br/>«Интенсивный курс английского языка. Модуль C1», <br/>«Деловой английский язык. BEC. Модуль Higher», <br/>«Английский язык для юристов. TOLES. Модули Higher, Advanced», <br/>«Подготовка к экзамену IELTS», <br/>«Подготовка к экзамену TOEFL».</li><li><strong>Повышение квалификации преподавателей вузов:</strong> <br/>«Английский язык для преподавателей специальных дисциплин в вузах», <br/>«Современные тенденции в преподавании перевода».</li>';
        }
        // Вписать в форму
        $(".test .test__form .form .input[data-type=result]").val(sum);
        $(".test .test__form .form .input[data-type=recommendation]").val(recommendation);
        $(".test .test__form .form .input[data-type=level]").val(level);
        
        // console.log (recommendation);
        // Показать в блоке
        // $(".test .test__result .test__result-val[data-result=sum]").text(sum);
        // $(".test .test__result .test__result-val[data-result=level]").text(level);
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
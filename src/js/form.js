$(document).ready(() =>{
    $(".form.form_registration .radio .radio__input[data-info=docs]").on("change", function(){
        // console.log( $(this).val() );
        let val = $(this).val();
        if( val == "да"){
            $(".form.form_registration .form_registration__no-docs").slideUp();
            $(".form.form_registration .form_registration__docs").slideDown();
        }
        if( val == "нет"){
            $(".form.form_registration .form_registration__docs").slideUp();
            $(".form.form_registration .form_registration__no-docs").slideDown();
        }
    });
    $(".form.form_registration select[name=programm]").on("change", function(){
        let lang = $(this).find("option:selected").data("lang") ;
        console.log( lang );
        // Английский
        if( lang == "en"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "en" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Немецкий
        if( lang == "de"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "de" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Французский
        if( lang == "fr"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "fr" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Испанский
        if( lang == "es"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "es" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Итальянский
        if( lang == "it"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "it" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Китайский
        if( lang == "ch"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "ch" ){
                    $(this).hide();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Переводчик в сфере профессиональной коммуникации
        if( lang == "combo1"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "en" ){
                    $(this).show();
                }else{
                    $(this).show().prop('selected', true);
                }
            });
        }
        // Синхронный перевод
        if( lang == "combo2"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "ch" ){
                    $(this).show();
                }else{
                    $(this).hide();
                }

                if( $(this).data("lang") == "en" ){
                    $(this).prop('selected', true);
                }
            });
        }
        // Гид-переводчик
        if( lang == "combo3"){
            $(".form.form_registration select[name=lang] option").each(function(){
                if( $(this).data("lang") != "de" && $(this).data("lang") != "fr"){
                    $(this).show();
                }else{
                    $(this).hide();
                }

                if( $(this).data("lang") == "en" ){
                    $(this).prop('selected', true);
                }
            });
        }
    });
});


    $(document).ready(function(){

        $('.menu-toggle').click(function(){
            $(this).toggleClass('open');
            $('.mobile_nav').toggleClass('active');
        });

    });

    var closed_var = document.querySelector(".close");
    var mobile_nav = document.querySelector(".mobile_nav");
    var menu_toggle = document.querySelector(".menu-toggle");

    closed_var.onclick = function(){
        mobile_nav.classList.remove('active');
        menu_toggle.classList.remove('open');
    }

 /* Press Process */   
    var terms = document.querySelector(".terms");
    var privacy = document.querySelector(".privacy");
    var legal = document.querySelector(".legal");

    var sec_terms = document.querySelector(".sec_terms");
    var sec_privacy = document.querySelector(".sec_privacy");
    var sec_legal = document.querySelector(".sec_legal");

    terms.onclick = function(){
        terms.classList.remove('active');
        privacy.classList.remove('active');
        legal.classList.remove('active');
        terms.classList.add('active');

        sec_terms.classList.remove('active');
        sec_privacy.classList.remove('active');
        sec_legal.classList.remove('active');
        sec_terms.classList.add('active');
    }

    privacy.onclick = function(){
        privacy.classList.remove('active');
        terms.classList.remove('active');
        legal.classList.remove('active');
        privacy.classList.add('active');
        
        sec_privacy.classList.remove('active');
        sec_terms.classList.remove('active');
        sec_legal.classList.remove('active');
        sec_privacy.classList.add('active');
    }

    legal.onclick = function(){
        legal.classList.remove('active');
        terms.classList.remove('active');
        privacy.classList.remove('active');
        legal.classList.add('active');

        sec_legal.classList.remove('active');
        sec_terms.classList.remove('active');
        sec_privacy.classList.remove('active');
        sec_legal.classList.add('active');
    }


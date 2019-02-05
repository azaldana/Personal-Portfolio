$(document).ready(function(){ 

    var homePage = $(".home-page");
    var mainPage = $(".main-page");
    var mainText = $(".about-me");
    var portfolio = $(".portfolio");
    var contact = $(".contact");
    var leftSide = $(".left-side");
    var graphicDesign = $(".gdesign");
    var webDesign = $(".web");
    var branding = $(".brand");
    var layout = $(".layout-design");
    var freelance = $(".free");
    var portfolioHeader = $("#about");

    function viewPortfolio(){
        var homePageButton = $("#startButton");
        mainPage.hide();
        portfolio.hide();
        contact.hide();
        layout.hide();
        leftSide.hide();

        homePageButton.on('click', function (){
            homePage.empty();
            mainPage.show();
            $("#home").css('font-weight', 'bold');
        });
    }

    viewPortfolio();

    function clickPortfolio(){
        var portfolioButton = $("#portfolio");

        portfolioButton.on('click', function (){
            homePage.empty();
            contact.hide();
            mainText.hide();
            layout.hide();
            leftSide.show();
            portfolio.show();
            $(".graphic").css('font-weight', 'bold');
            $("#home").css('font-weight', 'normal');
            $("#portfolio").css('font-weight', 'bold');
            $("#contact").css('font-weight', 'normal');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'normal');
        });
    }

    clickPortfolio();

    function clickHome(){
        var homeButton = $("#home");

        homeButton.on('click', function (){
            homePage.empty();
            contact.hide();
            layout.hide();
            leftSide.hide();
            mainText.show();
            portfolio.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'normal');
        });
    }

    clickHome();

    function clickContact(){
        var contactButton = $("#contact");

        contactButton.on('click', function (){
            homePage.empty();
            mainText.hide();
            contact.show();
            portfolio.hide();
            leftSide.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
        });
    }

    clickContact();

    function clickGraphicDesign(){
        var graphicDesignBtn = $(".graphic");

        graphicDesignBtn.on('click', function(){
            graphicDesign.show();
            layout.hide();
            $(".graphic").css('font-weight', 'bold');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'normal');
        })
    }

    clickGraphicDesign();

    function clickWebDesign(){
        var webDesignBtn = $(".web");

        webDesignBtn.on('click', function(){
            portfolioHeader.show();
            graphicDesign.hide();
            // webDesign.show();
            layout.hide();
            $(".graphic").css('font-weight', 'normal');
            $(".web").css('font-weight', 'bold');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'normal');
            
        })
    }

    clickWebDesign();

    function clickBranding(){
        var brandingBtn = $(".brand");

        brandingBtn.on('click', function(){
            portfolioHeader.show();
            graphicDesign.hide();
            // webDesign.hide();
            // branding.show();
            layout.hide();
            $(".graphic").css('font-weight', 'normal');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'bold');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'normal');
            
        })
    }

    clickBranding();

    function clickLayout(){
        var layoutBtn = $(".layout");

        layoutBtn.on('click', function(){
            portfolioHeader.show();
            graphicDesign.hide();
            // webDesign.hide();
            // branding.hide();
            layout.show();
            $(".graphic").css('font-weight', 'normal');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'bold');
            $(".free").css('font-weight', 'normal');
            
        })
    }

    clickLayout();

    function clickFreelance(){
        var freelanceBtn = $(".free");

        freelanceBtn.on('click', function(){
            portfolioHeader.show();
            graphicDesign.hide();
            // webDesign.hide();
            // branding.hide();
            layout.hide();
            // freelance.show();
            $(".graphic").css('font-weight', 'normal');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'bold');
            
        })
    }

    clickFreelance();

    // Modal Images for Portfolio Page //

    var modal = document.getElementById('myModal');

    var img01 = document.getElementById('logic-01');
    var img02 = document.getElementById('logic-02');
    var img03 = document.getElementById('dive-01');
    var img04 = document.getElementById('view-01');
    var img05 = document.getElementById('view-02');
    var img06 = document.getElementById('gulls-01');
    var img07 = document.getElementById('xy-01');
    var img08 = document.getElementById('sdba-01');

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img01.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    img02.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

    img03.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img04.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img05.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img06.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img07.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img08.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
})
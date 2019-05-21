function titleLoaders() {

    var numCurrentY = 1.25 * scrollY;
    var numScreenY = window.innerHeight;
    console.log(numCurrentY)
    console.log(numScreenY);
    
    //section 1
    if (numCurrentY < numScreenY) {
        console.log('intro')
        document.getElementById("section2Title").style.opacity = "0"
    }

    //section 2
    if (numCurrentY < 2 * numScreenY & numCurrentY > numScreenY) {
        console.log('section 2')
        document.getElementById("section2Title").style.opacity = "0.5"
        document.getElementById("section3Title").style.opacity = "0"
    }

    //section 3
    if (numCurrentY < 3 * numScreenY & numCurrentY > 2 * numScreenY) {
        console.log('section 3')
        document.getElementById("section2Title").style.opacity = "0"
        document.getElementById("section3Title").style.opacity = "0.5"
        document.getElementById("section4Title").style.opacity = "0"
    }

    //section 4
    if (numCurrentY < 4 * numScreenY & numCurrentY > 3 * numScreenY) {
        console.log('section 4')
        document.getElementById("section3Title").style.opacity = "0"
        document.getElementById("section4Title").style.opacity = "0.5"
        document.getElementById("section5Title").style.opacity = "0"
    }

    //section 5
    if (numCurrentY < 5 * numScreenY & numCurrentY > 4 * numScreenY) {
        console.log('section 5')
        document.getElementById("section4Title").style.opacity = "0"
        document.getElementById("section5Title").style.opacity = "0.5"
        document.getElementById("section6Title").style.opacity = "0"
    }

    //section 5
    if (numCurrentY < 6 * numScreenY & numCurrentY > 5 * numScreenY) {
        console.log('section 5')
        
        document.getElementById("section5Title").style.opacity = "0"
        document.getElementById("section6Title").style.opacity = "0.5"
    }

}

jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //change active nav item selection
    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            
            //select current active section
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            
            //add and remove selected class based on jQuery $window value
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    //smooth scroll
    function smoothScroll(target) {
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
        );
    }
});

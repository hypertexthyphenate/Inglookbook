(function($) {
    console.log('asda')
    $(document).on('click', '.search-item', function() {
        $(this).toggleClass('active close-search');
        const searchForm = $('.navigation-search');
        searchForm.toggleClass('nav-search-active');
        searchForm.find('input').focus();
    });

    $(document).on('click', '.menu-toggle', function() {
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false');
        $('#mobile-header').toggleClass('toggled');
    });

    $(document).on('click', '.dropdown-menu-toggle', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).parent().siblings('.sub-menu').toggleClass('toggled-on');
    });

    // scroll to top
    const scrollBtn = document.getElementById('scroll-top');
    const scrollThreshold = 300; // Show button after 300px scroll
    
    // Handle scroll event
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

})(jQuery);
$('section[data-type="background"]').each(function(){
    // Cache the Window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        // Use the cached window object here
        $window.scroll(function () {

            // Use the cached window object here
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});
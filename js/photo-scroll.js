$(document).ready(function () {

    let screenSize = $(window).width();

    let autoCycle = false;
    if (screenSize < 530) {
        autoCycle = true;
    }

    let pageID = $('#pageid').html();
    console.log("pageID =", pageID);

    const photoSets = {
        index: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        data: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        about: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        gallery: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        stories: ['3', '7', '34', '12', '19', '39', '44', '6', '16', '20', '22'],
        resources: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        mirador: ['12', '16', '13', '6', '10'],
        fema: ['3'],
        eduspec: ['5', '6', '10', '9', '4', '45'],
        airquality: ['25', '19', '18', '40', '43'],
        ddar: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
    };

    const photos = photoSets[pageID];
    if (!photos) return;

    let pointer = 0;

    function photoUpdate() {
        const id = photos[pointer];
        const url = `url(./assets/gallery/gallery${id}_compressed.webp)`;
        $('header').css("background-image", url);
    }

    photoUpdate();

    $('#left').click(function() {
        pointer = (pointer - 1 + photos.length) % photos.length;
        photoUpdate();
    });

    $('#right').click(function() {
        pointer = (pointer + 1) % photos.length;
        photoUpdate();
    });

    // -------------------------------------------
    //  Auto-scroll every 10 seconds (mobile <530)
    // -------------------------------------------
    if (autoCycle) {
        setInterval(function () {
            pointer = (pointer + 1) % photos.length;
            photoUpdate();
        }, 5000); // 10 seconds
    }

});

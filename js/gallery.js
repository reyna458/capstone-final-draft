$(document).ready(function () {

    $.getJSON('data/gallery.json', function(gallery) {
        let galleryHTML = '';

        for (let x = 0; x < gallery.length; x++) {

            const id = gallery[x].GalleryNum;

            galleryHTML += `
                <div class='gallery-photo' id='${id}' 
                     data-thumb='./assets/thumbnails/gallery${id}_compressed_compressed_compressed.webp'
                     data-full='./assets/gallery/gallery${id}_compressed.webp'>
                    
                    <img src='./assets/x-sign.png' alt='x button' class='galleryx'>
                    
                   
                    <img loading='lazy' 
                         src='./assets/thumbnails/gallery${id}_compressed_compressed_compressed.webp' 
                         alt='${gallery[x].Alt}' 
                         class='galleryIMG'>

                    <h2>${gallery[x].Caption}</h2>
                </div>
            `;
        }

        $('#gallery-container').html(galleryHTML);
    });

    // When clicking a photo
    $(document).on('click', '.gallery-photo', function () {

        // Remove active state from others
        $('.gallery-photo').removeClass('gallery-active')
                           .each(function () {
                               // revert to thumbnail
                               const thumb = $(this).data('thumb');
                               $(this).find('.galleryIMG').attr('src', thumb);
                           });

        $('.galleryx').hide();

        // Activate this one
        $(this).addClass('gallery-active');
        $(this).find('.galleryx').show();

        // Swap to high-res image
        const fullImg = $(this).data('full');
        $(this).find('.galleryIMG').attr('src', fullImg);
    });

    // Close expanded view
    $(document).on('click', '.galleryx', function (e) {
        e.stopPropagation();
        $(this).hide();
        const parent = $(this).closest('.gallery-photo');
        parent.removeClass('gallery-active');

        // Restore thumbnail
        const thumb = parent.data('thumb');
        parent.find('.galleryIMG').attr('src', thumb);
    });
});

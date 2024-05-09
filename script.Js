document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel__slide');
    const thumbnails = document.querySelectorAll('.carousel__thumbnails label');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function activateThumbnail(index) {
        thumbnails.forEach((thumbnail, i) => {
            if (i === index) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        activateThumbnail(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        activateThumbnail(currentIndex);
    }

    document.querySelector('.carousel').addEventListener('click', function(event) {
        if (event.target.classList.contains('next-btn')) {
            nextSlide();
        } else if (event.target.classList.contains('prev-btn')) {
            prevSlide();
        } else if (event.target.parentElement.tagName === 'LABEL') {
            const index = Array.from(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
            currentIndex = index;
            showSlide(currentIndex);
            activateThumbnail(currentIndex);
        }
    });
});

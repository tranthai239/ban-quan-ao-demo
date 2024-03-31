

document.addEventListener("DOMContentLoaded", function () {
   
    const imgItems = document.querySelectorAll('.img-item');

   
    imgItems.forEach(function (item) {
 
        item.addEventListener('click', function (event) {
            event.preventDefault();

    
            const imgSrc = this.querySelector('img').getAttribute('src');

            
            const imgShowcase = document.querySelector('.img-showcase img');
            imgShowcase.setAttribute('src', imgSrc);
        });
    });

   
    document.getElementById('color').addEventListener('change', function () {
    
        const selectedOption = this.value;

        
        imgItems.forEach(function (item) {
           
            const dataId = item.getAttribute('data-id');

            
            if (dataId === selectedOption) {
           
                const imgSrc = item.querySelector('img').getAttribute('src');

              
                const imgShowcase = document.querySelector('.img-showcase img');
                imgShowcase.setAttribute('src', imgSrc);
            }
        });
    });
});

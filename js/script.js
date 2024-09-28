// script.js
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // Close other sections
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null;
                }
            });

            // Toggle current section
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

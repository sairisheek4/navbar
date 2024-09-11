document.addEventListener('DOMContentLoaded', () => {
    // Select all the tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    // Select all the tab panes (content)
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and all content panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Find the corresponding tab-pane and activate it
            const targetPane = document.querySelector(`#${button.getAttribute('data-tab')}`);
            targetPane.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Nav Interaction Logic
    // Requirement: Hovering others shows indicator for them.
    // When mouse leaves, indicator returns to active.

    const navItems = document.querySelectorAll('.nav-item');
    const navList = document.getElementById('nav-list');

    // Check which item is currently active (set visually in HTML)
    const activeItem = document.querySelector('.nav-item.active');

    if (!activeItem) return; // Guard clause if no active item

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove visual active state from the originally active item (unless it's the one hovered)
            if (activeItem && activeItem !== item) {
                const activeIndicator = activeItem.querySelector('.indicator');
                if (activeIndicator) {
                    activeIndicator.style.opacity = '0';
                    activeIndicator.style.height = '0';
                }
                activeItem.querySelector('a').style.color = 'var(--text-muted)';
            }

            // Add visual active state to hovered item
            const indicator = item.querySelector('.indicator');
            if (indicator) {
                indicator.style.opacity = '1';
                indicator.style.height = '20px';
            }
            item.querySelector('a').style.color = 'var(--text-color)';
        });

        item.addEventListener('mouseleave', () => {
            // Reset hovered item state
            if (item !== activeItem) {
                const indicator = item.querySelector('.indicator');
                if (indicator) {
                    indicator.style.opacity = '0';
                    indicator.style.height = '0';
                }
                item.querySelector('a').style.color = 'var(--text-muted)';
            }
        });
    });

    navList.addEventListener('mouseleave', () => {
        // Restore the original active item state when mouse leaves the entire nav area
        if (activeItem) {
            const activeIndicator = activeItem.querySelector('.indicator');
            if (activeIndicator) {
                activeIndicator.style.opacity = '1';
                activeIndicator.style.height = '20px';
            }
            activeItem.querySelector('a').style.color = 'var(--text-color)';
        }
    });
});

async function fetchPlans() {
    const container = document.getElementById('pricing-container');
    try {
        const response = await fetch('/api/plans');
        const data = await response.json();

        if (data.success && data.plans) {
            renderPlans(data.plans);
        } else {
            container.innerHTML = '<p>Unable to load plans at this moment. Please try again later.</p>';
        }
    } catch (error) {
        console.error('Error fetching plans:', error);
        container.innerHTML = '<p>Connection lost. The server might be under maintenance.</p>';
    }
}

function renderPlans(plans) {
    const container = document.getElementById('pricing-container');
    container.innerHTML = '';

    plans.forEach((plan, index) => {
        const card = document.createElement('div');
        card.className = `pricing-card ${index === 1 ? 'popular' : ''} ${plan.is_out_of_stock ? 'out-of-stock' : ''}`;
        
        // Format specs
        const ram = plan.specs.ram_gb >= 1 ? `${plan.specs.ram_gb} GB` : `${plan.specs.ram_mb} MB`;
        const disk = plan.specs.disk_gb >= 1 ? `${plan.specs.disk_gb} GB` : `${plan.specs.disk_mb} MB`;
        const cpu = plan.specs.cpu_cores ? `${plan.specs.cpu_cores} Cores` : `${plan.specs.cpu_percent}% CPU`;

        const buttonHtml = plan.is_out_of_stock 
            ? `<div class="btn" style="background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.2); cursor: not-allowed; border: 1px solid rgba(255,255,255,0.05);">Sold Out</div>`
            : `<a href="https://dash.detriot.cloud/dashboard/checkout/${plan.id}" class="btn ${index === 1 ? 'btn-primary' : 'btn-secondary'}">Order Now</a>`;

        card.innerHTML = `
            ${index === 1 && !plan.is_out_of_stock ? '<div class="popular-tag" style="background: var(--secondary); font-size: 0.7rem; padding: 2px 10px; border-radius: 4px; display: inline-block; margin-bottom: 10px;">MOST POPULAR</div>' : ''}
            ${plan.is_out_of_stock ? '<div class="out-of-stock-tag" style="background: #dc2626; font-size: 0.7rem; padding: 2px 10px; border-radius: 4px; display: inline-block; margin-bottom: 10px; box-shadow: 0 0 15px rgba(220,38,38,0.4);">OUT OF STOCK</div>' : ''}
            <h3>${plan.name}</h3>
            <div class="price">$${plan.price.toFixed(2)}<span>/${plan.billing_period}</span></div>
            <ul class="specs-list">
                <li><i data-lucide="cpu" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${cpu}</strong> Power</li>
                <li><i data-lucide="database" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${ram}</strong> RAM</li>
                <li><i data-lucide="hard-drive" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${disk}</strong> SSD Storage</li>
                <li><i data-lucide="refresh-cw" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${plan.features.backups}</strong> Backup(s)</li>
            </ul>
            ${buttonHtml}
        `;
        if (plan.is_out_of_stock) card.style.opacity = '0.8';
        container.appendChild(card);
    });

    // Re-initialize Lucide icons for new elements
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Glitch effect on title
function initGlitch() {
    const title = document.getElementById('hero-title');
    if (!title) return;

    setInterval(() => {
        if (Math.random() > 0.95) {
            title.style.transform = `translate(${Math.random() * 5}px, ${Math.random() * 5}px)`;
            title.style.textShadow = `${Math.random() * 10}px 0 var(--secondary), -${Math.random() * 10}px 0 var(--primary)`;
            setTimeout(() => {
                title.style.transform = 'none';
                title.style.textShadow = '0 0 15px rgba(0, 242, 255, 0.5)';
            }, 100);
        }
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlans();
    initGlitch();
});

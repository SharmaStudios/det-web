async function fetchPlans() {
    const container = document.getElementById('pricing-container');
    try {
        const response = await fetch('https://dash.detriot.cloud/api/plans');
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
        card.className = `pricing-card ${index === 1 ? 'popular' : ''}`;
        
        // Format specs
        const ram = plan.specs.ram_gb >= 1 ? `${plan.specs.ram_gb} GB` : `${plan.specs.ram_mb} MB`;
        const disk = plan.specs.disk_gb >= 1 ? `${plan.specs.disk_gb} GB` : `${plan.specs.disk_mb} MB`;
        const cpu = plan.specs.cpu_cores ? `${plan.specs.cpu_cores} Cores` : `${plan.specs.cpu_percent}% CPU`;

        card.innerHTML = `
            ${index === 1 ? '<div class="popular-tag" style="background: var(--secondary); font-size: 0.7rem; padding: 2px 10px; border-radius: 4px; display: inline-block; margin-bottom: 10px;">MOST POPULAR</div>' : ''}
            <h3>${plan.name}</h3>
            <div class="price">$${plan.price.toFixed(2)}<span>/${plan.billing_period}</span></div>
            <ul class="specs-list">
                <li><i data-lucide="cpu" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${cpu}</strong> Power</li>
                <li><i data-lucide="database" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${ram}</strong> DDR4 RAM</li>
                <li><i data-lucide="hard-drive" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${disk}</strong> NVMe SSD</li>
                <li><i data-lucide="shield-check" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>Free</strong> DDoS Protection</li>
                <li><i data-lucide="refresh-cw" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 10px; color: var(--primary);"></i> <strong>${plan.features.backups}</strong> Backup(s) Included</li>
            </ul>
            <a href="https://dash.detriot.cloud/dashboard/checkout/${plan.id}" class="btn ${index === 1 ? 'btn-primary' : 'btn-secondary'}">Order Now</a>
        `;
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

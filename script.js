// Plant database based on pH levels
const plantDatabase = {
    "extreme-acid": {
        decorative: [
            { name: "⚠️ No plants suitable", ph: "<4.0" },
            { name: "Extreme acidity warning", ph: "Too low for plants" },
            { name: "Must adjust pH first", ph: "Use filtration" }
        ],
        edible: [
            { name: "❌ No edible plants", ph: "<4.0" },
            { name: "Water harmful to plants", ph: "Adjust pH to >4.5" },
            { name: "Use filtration system", ph: "Required" }
        ],
        decorativeRange: "Not applicable (<4.0)",
        edibleRange: "Not applicable (<4.0)",
        healthPercentage: 0,
        healthStatus: "❌ Extremely Poor",
        healthColor: "#E17055"
    },
    "strong-acid": {
        decorative: [
            { name: "Azaleas", ph: "4.5–6.0" },
            { name: "Rhododendrons", ph: "4.5–6.0" },
            { name: "Blue Hydrangeas", ph: "5.0–5.5" },
            { name: "Camellias", ph: "5.5–6.5" }
        ],
        edible: [
            { name: "Blueberries", ph: "4.5–5.5" },
            { name: "Potatoes", ph: "5.0–6.0" },
            { name: "Radishes", ph: "5.5–6.5" },
            { name: "Strawberries", ph: "5.5–6.5" }
        ],
        decorativeRange: "4.5–6.0",
        edibleRange: "4.5–6.0",
        healthPercentage: 40,
        healthStatus: "⚠️ Poor",
        healthColor: "#FDCB6E"
    },
    "acid": {
        decorative: [
            { name: "Roses", ph: "6.0–6.5" },
            { name: "Hydrangeas", ph: "5.5–6.5" },
            { name: "Azaleas", ph: "4.5–6.0" },
            { name: "Ferns", ph: "5.5–6.5" }
        ],
        edible: [
            { name: "Tomatoes", ph: "6.0–7.0" },
            { name: "Peppers", ph: "6.0–7.0" },
            { name: "Potatoes", ph: "5.0–6.0" },
            { name: "Carrots", ph: "6.0–7.0" }
        ],
        decorativeRange: "5.5–6.5",
        edibleRange: "5.5–6.5",
        healthPercentage: 60,
        healthStatus: "⚠️ Fair",
        healthColor: "#FDCB6E"
    },
    "neutral": {
        decorative: [
            { name: "Most decorative plants", ph: "6.0–7.5" },
            { name: "Lawn grasses", ph: "6.0–7.0" },
            { name: "Annual flowers", ph: "6.0–7.5" },
            { name: "Shrubs", ph: "6.0–7.5" }
        ],
        edible: [
            { name: "Most vegetables", ph: "6.0–7.5" },
            { name: "Lettuce", ph: "6.0–7.0" },
            { name: "Beans", ph: "6.0–7.5" },
            { name: "Cucumbers", ph: "6.0–7.0" }
        ],
        decorativeRange: "6.0–7.5",
        edibleRange: "6.0–7.5",
        healthPercentage: 95,
        healthStatus: "✅ Excellent",
        healthColor: "#00B894"
    },
    "alkaline": {
        decorative: [
            { name: "Lavender", ph: "6.5–7.5" },
            { name: "Clematis", ph: "7.0–7.5" },
            { name: "Boxwood", ph: "6.5–7.5" },
            { name: "Pink Hydrangeas", ph: "6.5+" }
        ],
        edible: [
            { name: "Asparagus", ph: "6.5–7.5" },
            { name: "Garlic", ph: "6.5–7.5" },
            { name: "Cabbage", ph: "6.5–7.5" },
            { name: "Spinach", ph: "6.5–7.5" }
        ],
        decorativeRange: "6.5–7.5",
        edibleRange: "6.5–7.5",
        healthPercentage: 70,
        healthStatus: "⚠️ Fair",
        healthColor: "#FDCB6E"
    },
    "strong-alkaline": {
        decorative: [
            { name: "Few plants tolerate", ph: ">8.0" },
            { name: "Salt-tolerant species", ph: "7.5–8.5" },
            { name: "Use filtration first", ph: "Required" }
        ],
        edible: [
            { name: "Consider soil amendment", ph: "N/A" },
            { name: "Rainwater collection", ph: "5.5–6.5" },
            { name: "Must adjust pH", ph: "Required" }
        ],
        decorativeRange: "Limited options",
        edibleRange: "Not recommended",
        healthPercentage: 20,
        healthStatus: "❌ Poor",
        healthColor: "#E17055"
    }
};

// Filtration data based on pH with specific drip rates
const filtrationData = {
    "extreme-acid": {
        rate: "1-2 drops/sec",
        description: "Extremely slow drip - Major pH adjustment needed",
        speed: "0.1-0.3 L/hour",
        time: "Maximum",
        adjustment: "Major increase",
        filters: ["Limestone chips", "Calcium carbonate", "Crushed oyster shells"],
        note: "⚠️ EXTREME ACIDITY: Water pH <4 is harmful to all plants. MUST use filtration to raise pH to at least 4.5 before considering plants.",
        steps: [
            { title: "Test with pH Paper", desc: "Confirm pH is below 4.0" },
            { title: "Use Limestone Filter", desc: "Fill filter with limestone chips" },
            { title: "Set Slowest Drip Rate", desc: "1-2 drops per second" },
            { title: "Test After Each Liter", desc: "Monitor pH increase" },
            { title: "Continue Until pH >4.5", desc: "Then reassess plants" }
        ],
        animationSpeed: 5,
        inletColor: "#E17055",
        outletColor: "#FDCB6E"
    },
    "strong-acid": {
        rate: "2-4 drops/sec",
        description: "Very slow drip - Significant pH raising",
        speed: "0.2-0.5 L/hour",
        time: "High",
        adjustment: "Significant increase",
        filters: ["Limestone chips", "Crushed oyster shells"],
        note: "⚠️ pH 4-6.5: Water too acidic for most plants. Use filtration to raise pH to 6.0-7.0 range.",
        steps: [
            { title: "Test with pH Paper", desc: "Record exact pH value" },
            { title: "Setup Limestone Filter", desc: "Use crushed limestone" },
            { title: "Set Very Slow Drip", desc: "2-4 drops per second" },
            { title: "Run Water Through", desc: "Collect filtered water" },
            { title: "Test pH After Filtration", desc: "Should reach 6.0-7.0" }
        ],
        animationSpeed: 3,
        inletColor: "#FDCB6E",
        outletColor: "#00B894"
    },
    "acid": {
        rate: "5-8 drops/sec",
        description: "Slow drip - Moderate pH adjustment",
        speed: "0.5-1.0 L/hour",
        time: "Medium",
        adjustment: "Moderate increase",
        filters: ["Limestone media", "Standard filter"],
        note: "⚠️ pH 6.0-6.5: Mildly acidic. Consider filtration to reach optimal pH 6.5-7.0.",
        steps: [
            { title: "Test Initial pH", desc: "Use pH paper" },
            { title: "Add Limestone Media", desc: "To filter chamber" },
            { title: "Set Slow Drip Rate", desc: "5-8 drops per second" },
            { title: "Collect Filtered Water", desc: "Wait for 1 liter" },
            { title: "Verify pH Improvement", desc: "Test with pH paper" }
        ],
        animationSpeed: 2,
        inletColor: "#FDCB6E",
        outletColor: "#00B894"
    },
    "neutral": {
        rate: "10-15 drops/sec",
        description: "Normal flow - Basic cleaning only",
        speed: "1-1.5 L/hour",
        time: "Low",
        adjustment: "Minimal",
        filters: ["Sediment filter", "Activated carbon"],
        note: "✅ pH 6.5-7.5: Ideal for most plants. Use basic filtration for sediment removal only.",
        steps: [
            { title: "Test pH for Baseline", desc: "Confirm neutral range" },
            { title: "Install Carbon Filter", desc: "For sediment removal" },
            { title: "Set Normal Drip Rate", desc: "10-15 drops per second" },
            { title: "Filter Water", desc: "For cleanliness" },
            { title: "Confirm pH Stability", desc: "Should remain neutral" }
        ],
        animationSpeed: 1,
        inletColor: "#00B894",
        outletColor: "#00B894"
    },
    "alkaline": {
        rate: "3-5 drops/sec",
        description: "Slow drip - pH lowering needed",
        speed: "0.3-0.6 L/hour",
        time: "High",
        adjustment: "Significant decrease",
        filters: ["Peat moss", "Sulfur media"],
        note: "⚠️ pH 7.5-9.0: Alkaline water. Use filtration to lower pH to 6.5-7.5 range.",
        steps: [
            { title: "Test Alkaline Water", desc: "Use pH paper" },
            { title: "Add Peat Moss", desc: "To filter system" },
            { title: "Set Slow Drip Rate", desc: "3-5 drops per second" },
            { title: "Filter Thoroughly", desc: "Allow contact time" },
            { title: "Test Adjusted pH", desc: "Aim for 6.5-7.5" }
        ],
        animationSpeed: 2.5,
        inletColor: "#6C5CE7",
        outletColor: "#00B894"
    },
    "strong-alkaline": {
        rate: "1 drop/2-3 sec",
        description: "Extremely slow drip - Major treatment",
        speed: "0.1-0.2 L/hour",
        time: "Maximum",
        adjustment: "Major decrease",
        filters: ["Peat moss", "Sulfur injection", "Acid injection"],
        note: "⚠️ EXTREME ALKALINITY: pH >9 is harmful to plants. MUST use filtration to lower pH to 7.0-8.0 range.",
        steps: [
            { title: "Accurate pH Test", desc: "Use precise pH paper" },
            { title: "Setup Acid Injection", desc: "If available" },
            { title: "Set Slowest Drip", desc: "1 drop every 2-3 seconds" },
            { title: "Monitor Continuously", desc: "Test pH frequently" },
            { title: "Stop When pH <8.5", desc: "Then reassess" }
        ],
        animationSpeed: 6,
        inletColor: "#6C5CE7",
        outletColor: "#00CEC9"
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const phInput = document.getElementById('ph-input');
    const phSlider = document.getElementById('ph-slider');
    const phValueDisplay = document.getElementById('ph-value-display');
    const phStatus = document.getElementById('ph-status');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const analyzeBtn = document.getElementById('analyze-btn');
    const sliderFill = document.getElementById('slider-fill');
    const resultsSection = document.getElementById('results-section');
    const fabTop = document.getElementById('fab-top');
    
    // Set initial pH display
    updatePHDisplay(7.0);
    
    // Sync slider and input
    phSlider.addEventListener('input', function() {
        const value = parseFloat(this.value);
        phInput.value = value.toFixed(1);
        updatePHDisplay(value);
    });
    
    phInput.addEventListener('input', function() {
        const value = parseFloat(this.value) || 7.0;
        const clampedValue = Math.min(14, Math.max(0, value));
        this.value = clampedValue.toFixed(1);
        phSlider.value = clampedValue;
        updatePHDisplay(clampedValue);
    });
    
    // Button controls
    btnMinus.addEventListener('click', function() {
        const current = parseFloat(phInput.value);
        const newValue = Math.max(0, current - 0.1);
        phInput.value = newValue.toFixed(1);
        phSlider.value = newValue;
        updatePHDisplay(newValue);
    });
    
    btnPlus.addEventListener('click', function() {
        const current = parseFloat(phInput.value);
        const newValue = Math.min(14, current + 0.1);
        phInput.value = newValue.toFixed(1);
        phSlider.value = newValue;
        updatePHDisplay(newValue);
    });
    
    // Analyze button
    analyzeBtn.addEventListener('click', function() {
        const phValue = parseFloat(phInput.value);
        
        // Show results section with animation
        resultsSection.style.display = 'block';
        resultsSection.style.animation = 'fadeIn 0.5s ease';
        
        // Update all recommendations
        updateRecommendations(phValue);
        
        // Scroll to results
        resultsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // FAB scroll to top
    fabTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide FAB based on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            fabTop.style.display = 'flex';
        } else {
            fabTop.style.display = 'none';
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
            e.preventDefault();
            btnPlus.click();
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
            e.preventDefault();
            btnMinus.click();
        } else if (e.key === 'Enter') {
            analyzeBtn.click();
        }
    });
    
    // Update pH display function
    function updatePHDisplay(phValue) {
        // Update number display
        phValueDisplay.textContent = phValue.toFixed(1);
        
        // Update status and color
        let color, status;
        
        if (phValue < 4) {
            color = '#E17055';
            status = 'Extreme Acid';
        } else if (phValue < 6.5) {
            color = '#FDCB6E';
            status = 'Acidic';
        } else if (phValue < 7.5) {
            color = '#00B894';
            status = 'Neutral';
        } else if (phValue < 9) {
            color = '#6C5CE7';
            status = 'Alkaline';
        } else {
            color = '#6C5CE7';
            status = 'Strong Alkaline';
        }
        
        phValueDisplay.style.color = color;
        phStatus.textContent = status;
        phStatus.style.background = color;
        
        // Update slider fill
        const fillPercent = (phValue / 14) * 100;
        sliderFill.style.width = `${fillPercent}%`;
        sliderFill.style.background = color;
    }
    
    // Update all recommendations
    function updateRecommendations(phValue) {
        const category = getPHCategory(phValue);
        const plantData = plantDatabase[category];
        const filterData = filtrationData[category];
        
        // Update current pH display in filtration
        document.getElementById('current-ph-display').textContent = phValue.toFixed(1);
        
        // Update plant recommendations
        updatePlants(plantData, phValue);
        
        // Update filtration recommendations
        updateFiltration(filterData, phValue, category);
        
        // Update health indicator
        updateHealthIndicator(plantData);
    }
    
    // Get pH category
    function getPHCategory(phValue) {
        if (phValue < 4) return "extreme-acid";
        if (phValue < 6.5) return phValue < 6 ? "strong-acid" : "acid";
        if (phValue < 7.5) return "neutral";
        if (phValue < 9) return "alkaline";
        return "strong-alkaline";
    }
    
    // Update plant recommendations
    function updatePlants(data, phValue) {
        // Update decorative plants
        const decorativeList = document.getElementById('decorative-plants');
        decorativeList.innerHTML = '';
        
        data.decorative.forEach(plant => {
            const plantItem = document.createElement('div');
            plantItem.className = 'plant-item';
            plantItem.innerHTML = `
                <div class="plant-name">${plant.name}</div>
                <div class="plant-ph">pH ${plant.ph}</div>
            `;
            decorativeList.appendChild(plantItem);
        });
        
        // Update edible plants
        const edibleList = document.getElementById('edible-plants');
        edibleList.innerHTML = '';
        
        data.edible.forEach(plant => {
            const plantItem = document.createElement('div');
            plantItem.className = 'plant-item';
            plantItem.innerHTML = `
                <div class="plant-name">${plant.name}</div>
                <div class="plant-ph">pH ${plant.ph}</div>
            `;
            edibleList.appendChild(plantItem);
        });
        
        // Update pH ranges
        document.getElementById('decorative-range').textContent = data.decorativeRange;
        document.getElementById('edible-range').textContent = data.edibleRange;
    }
    
    // Update health indicator
    function updateHealthIndicator(data) {
        const healthFill = document.getElementById('health-fill');
        const healthStatus = document.getElementById('health-status');
        
        healthFill.style.width = `${data.healthPercentage}%`;
        healthFill.style.background = data.healthColor;
        
        healthStatus.innerHTML = `
            <i class="fas fa-check-circle" style="color: ${data.healthColor}"></i>
            <span>${data.healthStatus}</span>
        `;
    }
    
    // Update filtration recommendations
    function updateFiltration(data, currentPH, category) {
        // Update flow rate
        document.getElementById('flow-rate').textContent = data.rate;
        document.getElementById('flow-description').textContent = data.description;
        document.getElementById('flow-speed').textContent = data.speed;
        document.getElementById('contact-time').textContent = data.time;
        document.getElementById('ph-adjust').textContent = data.adjustment;
        
        // Update filter tags
        const filterTags = document.getElementById('filter-tags');
        filterTags.innerHTML = '';
        
        data.filters.forEach(filter => {
            const tag = document.createElement('div');
            tag.className = 'media-tag';
            tag.textContent = filter;
            filterTags.appendChild(tag);
        });
        
        // Update note
        document.getElementById('filtration-note').textContent = data.note;
        
        // Update steps
        updateSteps(data.steps);
        
        // Update animation
        updateAnimation(data, currentPH, category);
    }
    
    // Update steps
    function updateSteps(steps) {
        const stepsContainer = document.getElementById('steps-container');
        stepsContainer.innerHTML = '';
        
        steps.forEach((step, index) => {
            const stepCard = document.createElement('div');
            stepCard.className = 'step-card';
            stepCard.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-title">${step.title}</div>
                <div class="step-description">${step.desc}</div>
            `;
            stepsContainer.appendChild(stepCard);
        });
    }
    
    // Update animation
    function updateAnimation(data, currentPH, category) {
        // Update drip animation speed
        const dripAnimation = document.getElementById('drip-animation');
        dripAnimation.style.animationDuration = `${data.animationSpeed}s`;
        
        // Update inlet and outlet pH
        document.getElementById('inlet-ph').textContent = currentPH.toFixed(1);
        
        // Calculate outlet pH based on category
        let outletPH;
        switch(category) {
            case 'extreme-acid':
                outletPH = Math.min(4.5, currentPH + 2.0);
                break;
            case 'strong-acid':
                outletPH = Math.min(7.0, currentPH + 1.5);
                break;
            case 'acid':
                outletPH = Math.min(7.0, currentPH + 0.5);
                break;
            case 'neutral':
                outletPH = currentPH;
                break;
            case 'alkaline':
                outletPH = Math.max(7.0, currentPH - 1.0);
                break;
            case 'strong-alkaline':
                outletPH = Math.max(8.0, currentPH - 2.0);
                break;
            default:
                outletPH = currentPH;
        }
        
        document.getElementById('outlet-ph').textContent = outletPH.toFixed(1);
        
        // Update colors
        const waterIn = document.getElementById('water-in');
        const waterOut = document.getElementById('water-out');
        
        waterIn.style.background = data.inletColor;
        waterOut.style.background = data.outletColor;
        
        // Update drip speed based on rate
        const drips = document.querySelectorAll('.drip');
        drips.forEach(drip => {
            drip.style.animationDuration = `${data.animationSpeed}s`;
        });
    }
    
    // Initialize with pH 7.0
    updateRecommendations(7.0);
    
    // Add some interactive animations
    addInteractiveAnimations();
});

// Add interactive animations
function addInteractiveAnimations() {
    // Add hover effects to plant items
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.plant-item')) {
            const item = e.target.closest('.plant-item');
            item.style.transform = 'translateX(10px)';
            item.style.boxShadow = '0 5px 15px rgba(255, 107, 157, 0.2)';
        }
        
        if (e.target.closest('.step-card')) {
            const card = e.target.closest('.step-card');
            card.style.transform = 'translateY(-5px)';
        }
        
        if (e.target.closest('.detail')) {
            const detail = e.target.closest('.detail');
            detail.style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.plant-item')) {
            const item = e.target.closest('.plant-item');
            item.style.transform = 'translateX(0)';
            item.style.boxShadow = 'none';
        }
        
        if (e.target.closest('.step-card')) {
            const card = e.target.closest('.step-card');
            card.style.transform = 'translateY(0)';
        }
        
        if (e.target.closest('.detail')) {
            const detail = e.target.closest('.detail');
            detail.style.transform = 'translateY(0)';
        }
    });
}
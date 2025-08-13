document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inflation-form');
    const resultDiv = document.getElementById('result');
    
    // Hardcoded inflation data for demonstration purposes
    const inflationData = {
        '2025-06': 1.0162, // 1.62% inflation
        '2025-05': 1.0230, // 2.30% inflation
        '2025-04': 1.0310  // 3.10% inflation
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const initialValue = parseFloat(document.getElementById('initial-value').value);
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (isNaN(initialValue) || !startDate || !endDate) {
            resultDiv.innerHTML = '<p style="color: red;">Por favor, complete todos los campos.</p>';
            return;
        }

        const startMonth = startDate.substring(0, 7); // e.g., '2025-06'
        const endMonth = endDate.substring(0, 7);

        // Simple calculation using hardcoded data for demonstration
        let adjustedValue = initialValue;

        if (startMonth === '2025-06' && endMonth === '2025-06') {
            adjustedValue *= inflationData['2025-06'];
            const inflationRate = (adjustedValue / initialValue - 1) * 100;
            resultDiv.innerHTML = `<p>El valor ajustado es: <strong>$${adjustedValue.toFixed(2)}</strong></p>
                                   <p>Inflación acumulada: <strong>${inflationRate.toFixed(2)}%</strong></p>`;
        } else {
            resultDiv.innerHTML = '<p>Lo sentimos, los datos de inflación para ese período no están disponibles en este momento.</p>';
        }
    });
});
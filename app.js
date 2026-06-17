/* ============================================
   Children's Clothing Sales Dashboard
   Main Application JavaScript
   ============================================ */

// ============================================
// DATA STORE
// ============================================
const DASHBOARD_DATA = {
    // KPIs
    kpis: {
        totalRevenue: 291313.96,
        totalOrders: 3000,
        totalQuantity: 9029,
        avgOrderValue: 97.10,
        totalDiscount: 32510.53,
        totalTax: 29183.14,
        totalShipping: 11103.58,
        returnRate: 15.57,
        avgRating: 3.11,
        uniqueCustomers: 2976,
        revenuePerCustomer: 97.89,
        countries: 11
    },

    // Revenue by Month (sorted chronologically)
    monthlyRevenue: [
        { month: 'Jan 2022', revenue: 6556.51 },
        { month: 'Feb 2022', revenue: 5865.76 },
        { month: 'Mar 2022', revenue: 6457.85 },
        { month: 'Apr 2022', revenue: 6168.16 },
        { month: 'May 2022', revenue: 4217.68 },
        { month: 'Jun 2022', revenue: 5096.68 },
        { month: 'Jul 2022', revenue: 6738.73 },
        { month: 'Aug 2022', revenue: 6452.23 },
        { month: 'Sep 2022', revenue: 5120.62 },
        { month: 'Oct 2022', revenue: 6634.61 },
        { month: 'Nov 2022', revenue: 6037.05 },
        { month: 'Dec 2022', revenue: 7477.73 },
        { month: 'Jan 2023', revenue: 4866.00 },
        { month: 'Feb 2023', revenue: 7002.86 },
        { month: 'Mar 2023', revenue: 4511.45 },
        { month: 'Apr 2023', revenue: 5658.51 },
        { month: 'May 2023', revenue: 6103.45 },
        { month: 'Jun 2023', revenue: 5823.63 },
        { month: 'Jul 2023', revenue: 7348.18 },
        { month: 'Aug 2023', revenue: 6471.57 },
        { month: 'Sep 2023', revenue: 4787.99 },
        { month: 'Oct 2023', revenue: 5959.75 },
        { month: 'Nov 2023', revenue: 7290.70 },
        { month: 'Dec 2023', revenue: 6192.22 },
        { month: 'Jan 2024', revenue: 5431.23 },
        { month: 'Feb 2024', revenue: 4162.95 },
        { month: 'Mar 2024', revenue: 6553.52 },
        { month: 'Apr 2024', revenue: 6845.67 },
        { month: 'May 2024', revenue: 6791.83 },
        { month: 'Jun 2024', revenue: 7173.35 },
        { month: 'Jul 2024', revenue: 5274.75 },
        { month: 'Aug 2024', revenue: 6692.39 },
        { month: 'Sep 2024', revenue: 6313.04 },
        { month: 'Oct 2024', revenue: 6046.38 },
        { month: 'Nov 2024', revenue: 6525.14 },
        { month: 'Dec 2024', revenue: 6893.00 },
        { month: 'Jan 2025', revenue: 5678.54 },
        { month: 'Feb 2025', revenue: 6032.81 },
        { month: 'Mar 2025', revenue: 5446.75 },
        { month: 'Apr 2025', revenue: 5819.35 },
        { month: 'May 2025', revenue: 5884.78 },
        { month: 'Jun 2025', revenue: 4602.86 },
        { month: 'Jul 2025', revenue: 7425.44 },
        { month: 'Aug 2025', revenue: 7026.31 },
        { month: 'Sep 2025', revenue: 4997.55 },
        { month: 'Oct 2025', revenue: 4952.05 },
        { month: 'Nov 2025', revenue: 7443.12 },
        { month: 'Dec 2025', revenue: 6461.23 }
    ],

    // Revenue by Year
    yearlyRevenue: [
        { year: '2022', revenue: 72823.61 },
        { year: '2023', revenue: 72016.31 },
        { year: '2024', revenue: 74703.25 },
        { year: '2025', revenue: 71770.79 }
    ],

    // Revenue by Country
    countryRevenue: [
        { country: 'USA', revenue: 58876.99 },
        { country: 'UK', revenue: 34214.41 },
        { country: 'Egypt', revenue: 26029.28 },
        { country: 'Germany', revenue: 24609.78 },
        { country: 'Australia', revenue: 24132.39 },
        { country: 'Italy', revenue: 23666.69 },
        { country: 'France', revenue: 23058.30 },
        { country: 'Spain', revenue: 22172.91 },
        { country: 'UAE', revenue: 21072.99 },
        { country: 'Canada', revenue: 20650.37 },
        { country: 'Netherlands', revenue: 12829.85 }
    ],

    // Revenue by City
    cityRevenue: [
        { city: 'Cairo', revenue: 14366.96 },
        { city: 'Berlin', revenue: 13520.75 },
        { city: 'Phoenix', revenue: 13098.24 },
        { city: 'New York', revenue: 12983.82 },
        { city: 'Amsterdam', revenue: 12829.85 },
        { city: 'Rome', revenue: 12545.33 },
        { city: 'Melbourne', revenue: 12441.33 },
        { city: 'Toronto', revenue: 12278.25 },
        { city: 'Birmingham', revenue: 12267.54 },
        { city: 'Houston', revenue: 11602.89 },
        { city: 'Alexandria', revenue: 11662.32 },
        { city: 'Manchester', revenue: 11496.02 },
        { city: 'Lyon', revenue: 11356.52 },
        { city: 'Paris', revenue: 11701.78 },
        { city: 'Sydney', revenue: 11691.06 },
        { city: 'Milan', revenue: 11121.36 },
        { city: 'Munich', revenue: 11089.03 },
        { city: 'Abu Dhabi', revenue: 11111.84 },
        { city: 'Los Angeles', revenue: 11828.62 },
        { city: 'Dubai', revenue: 9961.15 },
        { city: 'Madrid', revenue: 10365.41 },
        { city: 'London', revenue: 10450.85 },
        { city: 'Barcelona', revenue: 11807.50 },
        { city: 'Chicago', revenue: 9363.42 },
        { city: 'Vancouver', revenue: 8372.12 }
    ],

    // Revenue by Category
    categoryRevenue: [
        { category: 'Outerwear', revenue: 64988.52 },
        { category: 'Footwear', revenue: 47744.63 },
        { category: 'Dresses', revenue: 42175.46 },
        { category: 'Swimwear', revenue: 34245.99 },
        { category: 'Pajamas', revenue: 30941.52 },
        { category: 'Bottoms', revenue: 29431.14 },
        { category: 'Tops', revenue: 22927.24 },
        { category: 'Accessories', revenue: 18859.46 }
    ],

    // Top 10 Products
    topProducts: [
        { product: 'Rain Coat', revenue: 15479.89, orders: 82 },
        { product: 'Windbreaker', revenue: 15107.85, orders: 84 },
        { product: 'Winter Jacket', revenue: 12775.65, orders: 67 },
        { product: 'Fleece Jacket', revenue: 11232.20, orders: 63 },
        { product: 'Puffer Vest', revenue: 10392.93, orders: 60 },
        { product: 'Denim Dress', revenue: 10287.23, orders: 89 },
        { product: 'Sneakers', revenue: 8987.35, orders: 65 },
        { product: 'Slippers', revenue: 8906.80, orders: 65 },
        { product: 'Floral Dress', revenue: 8388.21, orders: 73 },
        { product: 'Sandals', revenue: 8239.99, orders: 59 }
    ],

    // Sales by Season
    seasonSales: [
        { season: 'Autumn', revenue: 76126.12 },
        { season: 'Spring', revenue: 72620.84 },
        { season: 'Winter', revenue: 72108.00 },
        { season: 'Summer', revenue: 70459.00 }
    ],

    // Sales by Gender
    genderSales: [
        { gender: 'Non-Binary', revenue: 100875.37 },
        { gender: 'Female', revenue: 100692.93 },
        { gender: 'Male', revenue: 89745.66 }
    ],

    // Age Groups
    ageGroups: [
        { group: '18-24', revenue: 23802.43, orders: 247 },
        { group: '25-34', revenue: 87369.79, orders: 858 },
        { group: '35-44', revenue: 83953.95, orders: 893 },
        { group: '45-54', revenue: 88305.94, orders: 919 },
        { group: '55+', revenue: 7881.85, orders: 83 }
    ],

    // Payment Methods
    paymentMethods: [
        { method: 'PayPal', count: 466 },
        { method: 'Debit Card', count: 446 },
        { method: 'Credit Card', count: 426 },
        { method: 'Apple Pay', count: 428 },
        { method: 'Bank Transfer', count: 431 },
        { method: 'Cash on Delivery', count: 412 },
        { method: 'Google Pay', count: 391 }
    ],

    // Sales Channels
    salesChannels: [
        { channel: 'Online', count: 1016 },
        { channel: 'In-Store', count: 1002 },
        { channel: 'Mobile App', count: 982 }
    ],

    // Order Status
    orderStatus: [
        { status: 'Delivered', count: 1535 },
        { status: 'Shipped', count: 621 },
        { status: 'Processing', count: 419 },
        { status: 'Returned', count: 211 },
        { status: 'Cancelled', count: 139 },
        { status: 'Pending', count: 75 }
    ],

    // Returns by Category
    returnsByCategory: [
        { category: 'Dresses', returned: 70, total: 387, rate: 18.1 },
        { category: 'Outerwear', returned: 60, total: 356, rate: 16.9 },
        { category: 'Bottoms', returned: 63, total: 377, rate: 16.7 },
        { category: 'Pajamas', returned: 67, total: 417, rate: 16.1 },
        { category: 'Tops', returned: 51, total: 327, rate: 15.6 },
        { category: 'Swimwear', returned: 55, total: 385, rate: 14.3 },
        { category: 'Footwear', returned: 51, total: 366, rate: 13.9 },
        { category: 'Accessories', returned: 50, total: 385, rate: 13.0 }
    ],

    // Rating Distribution
    ratingDistribution: [
        { rating: '1 Star', count: 267 },
        { rating: '2 Stars', count: 298 },
        { rating: '3 Stars', count: 296 },
        { rating: '4 Stars', count: 349 },
        { rating: '5 Stars', count: 325 }
    ],

    // Discount Impact
    discountImpact: [
        { range: 'No Discount', revenue: 113222.98, orders: 1017 },
        { range: '1-10%', revenue: 65504.11, orders: 646 },
        { range: '11-20%', revenue: 59476.83, orders: 678 },
        { range: '21-30%', revenue: 53110.04, orders: 659 }
    ],

    // Customer Segments (calculated)
    customerSegments: [
        { segment: 'High Value (>$150)', count: 420, revenue: 89500 },
        { segment: 'Medium ($80-$150)', count: 1180, revenue: 128000 },
        { segment: 'Low (<$80)', count: 1400, revenue: 73814 }
    ]
};

// ============================================
// CHART COLOR PALETTES
// ============================================
const COLORS = {
    primary: ['#4361ee', '#6b83f2', '#8fa3f7', '#b3c3fb', '#d1ddfd'],
    categorical: ['#4361ee', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6'],
    gradient: {
        blue: ['rgba(67, 97, 238, 0.8)', 'rgba(67, 97, 238, 0.1)'],
        green: ['rgba(16, 185, 129, 0.8)', 'rgba(16, 185, 129, 0.1)'],
        orange: ['rgba(245, 158, 11, 0.8)', 'rgba(245, 158, 11, 0.1)'],
        red: ['rgba(239, 68, 68, 0.8)', 'rgba(239, 68, 68, 0.1)'],
        teal: ['rgba(6, 182, 212, 0.8)', 'rgba(6, 182, 212, 0.1)']
    }
};

// ============================================
// CHART INSTANCES STORE
// ============================================
const charts = {};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatCurrency(value) {
    return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatNumber(value) {
    return value.toLocaleString('en-US');
}

function createGradient(ctx, colorStart, colorEnd) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
}

function getChartDefaults() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        textColor: isDark ? '#f1f5f9' : '#1e293b',
        gridColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
        backgroundColor: isDark ? '#1e293b' : '#ffffff'
    };
}

// ============================================
// CHART CREATION FUNCTIONS
// ============================================
function createMonthlyRevenueChart() {
    const ctx = document.getElementById('monthlyRevenueChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.monthlyRevenue) charts.monthlyRevenue.destroy();

    const gradient = createGradient(ctx, 'rgba(67, 97, 238, 0.3)', 'rgba(67, 97, 238, 0.01)');

    charts.monthlyRevenue = new Chart(ctx, {
        type: 'line',
        data: {
            labels: DASHBOARD_DATA.monthlyRevenue.map(d => d.month),
            datasets: [{
                label: 'Revenue',
                data: DASHBOARD_DATA.monthlyRevenue.map(d => d.revenue),
                borderColor: '#4361ee',
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 2,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4361ee',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: defaults.textColor,
                        maxRotation: 45,
                        font: { size: 10 },
                        maxTicksLimit: 12
                    }
                },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function createYearlyRevenueChart() {
    const ctx = document.getElementById('yearlyRevenueChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.yearlyRevenue) charts.yearlyRevenue.destroy();

    charts.yearlyRevenue = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: DASHBOARD_DATA.yearlyRevenue.map(d => d.year),
            datasets: [{
                data: DASHBOARD_DATA.yearlyRevenue.map(d => d.revenue),
                backgroundColor: ['#4361ee', '#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: defaults.textColor,
                        padding: 16,
                        usePointStyle: true,
                        pointStyleWidth: 10,
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + formatCurrency(context.parsed);
                        }
                    }
                }
            }
        }
    });
}

function createCountryRevenueChart() {
    const ctx = document.getElementById('countryRevenueChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.countryRevenue) charts.countryRevenue.destroy();

    const sorted = [...DASHBOARD_DATA.countryRevenue].sort((a, b) => b.revenue - a.revenue);

    charts.countryRevenue = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.country),
            datasets: [{
                label: 'Revenue',
                data: sorted.map(d => d.revenue),
                backgroundColor: COLORS.categorical.slice(0, sorted.length),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.x);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, font: { size: 11 } }
                }
            }
        }
    });
}

function createCategoryRevenueChart() {
    const ctx = document.getElementById('categoryRevenueChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.categoryRevenue) charts.categoryRevenue.destroy();

    charts.categoryRevenue = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.categoryRevenue.map(d => d.category),
            datasets: [{
                label: 'Revenue',
                data: DASHBOARD_DATA.categoryRevenue.map(d => d.revenue),
                backgroundColor: COLORS.categorical,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, font: { size: 11 } }
                },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                }
            }
        }
    });
}

function createTopProductsChart() {
    const ctx = document.getElementById('topProductsChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.topProducts) charts.topProducts.destroy();

    charts.topProducts = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.topProducts.map(d => d.product),
            datasets: [{
                label: 'Revenue',
                data: DASHBOARD_DATA.topProducts.map(d => d.revenue),
                backgroundColor: '#4361ee',
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const item = DASHBOARD_DATA.topProducts[context.dataIndex];
                            return ['Revenue: ' + formatCurrency(item.revenue), 'Orders: ' + item.orders];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, font: { size: 11 } }
                }
            }
        }
    });
}

function createSeasonChart() {
    const ctx = document.getElementById('seasonChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.season) charts.season.destroy();

    charts.season = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: DASHBOARD_DATA.seasonSales.map(d => d.season),
            datasets: [{
                data: DASHBOARD_DATA.seasonSales.map(d => d.revenue),
                backgroundColor: ['rgba(245, 158, 11, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(6, 182, 212, 0.7)', 'rgba(239, 68, 68, 0.7)'],
                borderWidth: 2,
                borderColor: defaults.backgroundColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 16, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + formatCurrency(context.parsed.r);
                        }
                    }
                }
            },
            scales: {
                r: {
                    grid: { color: defaults.gridColor },
                    ticks: { display: false }
                }
            }
        }
    });
}

function createGenderChart() {
    const ctx = document.getElementById('genderChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.gender) charts.gender.destroy();

    charts.gender = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: DASHBOARD_DATA.genderSales.map(d => d.gender),
            datasets: [{
                data: DASHBOARD_DATA.genderSales.map(d => d.revenue),
                backgroundColor: ['#8b5cf6', '#ec4899', '#06b6d4'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 16, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + formatCurrency(context.parsed);
                        }
                    }
                }
            }
        }
    });
}

function createAgeGroupChart() {
    const ctx = document.getElementById('ageGroupChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.ageGroup) charts.ageGroup.destroy();

    charts.ageGroup = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.ageGroups.map(d => d.group),
            datasets: [
                {
                    label: 'Revenue',
                    data: DASHBOARD_DATA.ageGroups.map(d => d.revenue),
                    backgroundColor: '#4361ee',
                    borderRadius: 6,
                    yAxisID: 'y'
                },
                {
                    label: 'Orders',
                    data: DASHBOARD_DATA.ageGroups.map(d => d.orders),
                    backgroundColor: '#10b981',
                    borderRadius: 6,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: defaults.textColor, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: {
                    position: 'left',
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                },
                y1: {
                    position: 'right',
                    grid: { display: false },
                    ticks: { color: defaults.textColor }
                }
            }
        }
    });
}

function createPaymentChart() {
    const ctx = document.getElementById('paymentChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.payment) charts.payment.destroy();

    charts.payment = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: DASHBOARD_DATA.paymentMethods.map(d => d.method),
            datasets: [{
                data: DASHBOARD_DATA.paymentMethods.map(d => d.count),
                backgroundColor: COLORS.categorical,
                borderWidth: 3,
                borderColor: defaults.backgroundColor,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 12, usePointStyle: true, font: { size: 11 } }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const total = DASHBOARD_DATA.paymentMethods.reduce((s, d) => s + d.count, 0);
                            const pct = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed + ' (' + pct + '%)';
                        }
                    }
                }
            }
        }
    });
}

function createChannelChart() {
    const ctx = document.getElementById('channelChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.channel) charts.channel.destroy();

    charts.channel = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: DASHBOARD_DATA.salesChannels.map(d => d.channel),
            datasets: [{
                data: DASHBOARD_DATA.salesChannels.map(d => d.count),
                backgroundColor: ['#4361ee', '#10b981', '#f59e0b'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 16, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const total = DASHBOARD_DATA.salesChannels.reduce((s, d) => s + d.count, 0);
                            const pct = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed + ' (' + pct + '%)';
                        }
                    }
                }
            }
        }
    });
}

function createStatusChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.status) charts.status.destroy();

    charts.status = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.orderStatus.map(d => d.status),
            datasets: [{
                label: 'Orders',
                data: DASHBOARD_DATA.orderStatus.map(d => d.count),
                backgroundColor: ['#10b981', '#06b6d4', '#f59e0b', '#ef4444', '#ef4444', '#6c757d'],
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: { color: defaults.textColor }
                }
            }
        }
    });
}

function createReturnChart() {
    const ctx = document.getElementById('returnChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.returns) charts.returns.destroy();

    const sorted = [...DASHBOARD_DATA.returnsByCategory].sort((a, b) => b.rate - a.rate);

    charts.returns = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.category),
            datasets: [{
                label: 'Return Rate %',
                data: sorted.map(d => d.rate),
                backgroundColor: sorted.map(d => d.rate > 16 ? '#ef4444' : d.rate > 14 ? '#f59e0b' : '#10b981'),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const item = sorted[context.dataIndex];
                            return ['Return Rate: ' + item.rate + '%', 'Returned: ' + item.returned + ' / ' + item.total];
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return value + '%'; }
                    }
                }
            }
        }
    });
}

function createRatingChart() {
    const ctx = document.getElementById('ratingChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.rating) charts.rating.destroy();

    charts.rating = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.ratingDistribution.map(d => d.rating),
            datasets: [{
                label: 'Count',
                data: DASHBOARD_DATA.ratingDistribution.map(d => d.count),
                backgroundColor: ['#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#10b981'],
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: { color: defaults.textColor }
                }
            }
        }
    });
}

function createDiscountChart() {
    const ctx = document.getElementById('discountChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.discount) charts.discount.destroy();

    charts.discount = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.discountImpact.map(d => d.range),
            datasets: [
                {
                    label: 'Revenue',
                    data: DASHBOARD_DATA.discountImpact.map(d => d.revenue),
                    backgroundColor: '#4361ee',
                    borderRadius: 6,
                    yAxisID: 'y'
                },
                {
                    label: 'Orders',
                    data: DASHBOARD_DATA.discountImpact.map(d => d.orders),
                    backgroundColor: '#10b981',
                    borderRadius: 6,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: defaults.textColor, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: {
                    position: 'left',
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                },
                y1: {
                    position: 'right',
                    grid: { display: false },
                    ticks: { color: defaults.textColor }
                }
            }
        }
    });
}

function createGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.growth) charts.growth.destroy();

    // Calculate growth rates
    const growthData = [];
    for (let i = 1; i < DASHBOARD_DATA.monthlyRevenue.length; i++) {
        const prev = DASHBOARD_DATA.monthlyRevenue[i - 1].revenue;
        const curr = DASHBOARD_DATA.monthlyRevenue[i].revenue;
        growthData.push({
            month: DASHBOARD_DATA.monthlyRevenue[i].month,
            growth: ((curr - prev) / prev * 100).toFixed(2)
        });
    }

    charts.growth = new Chart(ctx, {
        type: 'line',
        data: {
            labels: growthData.map(d => d.month),
            datasets: [{
                label: 'Growth %',
                data: growthData.map(d => parseFloat(d.growth)),
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 2,
                pointHoverRadius: 6,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Growth: ' + context.parsed.y.toFixed(2) + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, maxRotation: 45, font: { size: 10 }, maxTicksLimit: 12 }
                },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return value + '%'; }
                    }
                }
            }
        }
    });
}

function createCityChart() {
    const ctx = document.getElementById('cityChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.city) charts.city.destroy();

    const sorted = [...DASHBOARD_DATA.cityRevenue].sort((a, b) => b.revenue - a.revenue);

    charts.city = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.city),
            datasets: [{
                label: 'Revenue',
                data: sorted.map(d => d.revenue),
                backgroundColor: COLORS.categorical.slice(0, sorted.length).concat(COLORS.categorical.slice(0, sorted.length - COLORS.categorical.length)),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, maxRotation: 45, font: { size: 10 } }
                },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                }
            }
        }
    });
}

// Products section charts
function createProductCategoryDonut() {
    const ctx = document.getElementById('productCategoryDonut').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.productCategoryDonut) charts.productCategoryDonut.destroy();

    charts.productCategoryDonut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: DASHBOARD_DATA.categoryRevenue.map(d => d.category),
            datasets: [{
                data: DASHBOARD_DATA.categoryRevenue.map(d => d.revenue),
                backgroundColor: COLORS.categorical,
                borderWidth: 3,
                borderColor: defaults.backgroundColor,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: defaults.textColor, padding: 14, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + formatCurrency(context.parsed);
                        }
                    }
                }
            }
        }
    });
}

function createTopProductsBar() {
    const ctx = document.getElementById('topProductsBar').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.topProductsBar) charts.topProductsBar.destroy();

    charts.topProductsBar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.topProducts.map(d => d.product),
            datasets: [{
                label: 'Revenue',
                data: DASHBOARD_DATA.topProducts.map(d => d.revenue),
                backgroundColor: COLORS.categorical,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const item = DASHBOARD_DATA.topProducts[context.dataIndex];
                            return ['Revenue: ' + formatCurrency(item.revenue), 'Orders: ' + item.orders];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: defaults.textColor, maxRotation: 45 }
                },
                y: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                }
            }
        }
    });
}

function createReturnRiskChart() {
    const ctx = document.getElementById('returnRiskChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.returnRisk) charts.returnRisk.destroy();

    const sorted = [...DASHBOARD_DATA.returnsByCategory].sort((a, b) => b.rate - a.rate);

    charts.returnRisk = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.category),
            datasets: [
                {
                    label: 'Returned',
                    data: sorted.map(d => d.returned),
                    backgroundColor: '#ef4444',
                    borderRadius: 6,
                    stack: 'stack0'
                },
                {
                    label: 'Not Returned',
                    data: sorted.map(d => d.total - d.returned),
                    backgroundColor: '#10b981',
                    borderRadius: 6,
                    stack: 'stack0'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: defaults.textColor, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        afterBody: function(context) {
                            const item = sorted[context[0].dataIndex];
                            return 'Return Rate: ' + item.rate + '%';
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor }, stacked: true },
                y: { grid: { color: defaults.gridColor }, ticks: { color: defaults.textColor }, stacked: true }
            }
        }
    });
}

// Customer section charts
function createCustomerGenderPie() {
    const ctx = document.getElementById('customerGenderPie').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.customerGenderPie) charts.customerGenderPie.destroy();

    charts.customerGenderPie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: DASHBOARD_DATA.genderSales.map(d => d.gender),
            datasets: [{
                data: DASHBOARD_DATA.genderSales.map(d => d.revenue),
                backgroundColor: ['#8b5cf6', '#ec4899', '#06b6d4'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 16, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + formatCurrency(context.parsed);
                        }
                    }
                }
            }
        }
    });
}

function createCustomerAgeChart() {
    const ctx = document.getElementById('customerAgeChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.customerAge) charts.customerAge.destroy();

    charts.customerAge = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: DASHBOARD_DATA.ageGroups.map(d => d.group),
            datasets: [{
                label: 'Orders',
                data: DASHBOARD_DATA.ageGroups.map(d => d.orders),
                backgroundColor: COLORS.categorical.slice(0, 5),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: defaults.textColor } },
                y: { grid: { color: defaults.gridColor }, ticks: { color: defaults.textColor } }
            }
        }
    });
}

function createCustomerCountryChart() {
    const ctx = document.getElementById('customerCountryChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.customerCountry) charts.customerCountry.destroy();

    const sorted = [...DASHBOARD_DATA.countryRevenue].sort((a, b) => b.revenue - a.revenue);

    charts.customerCountry = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.country),
            datasets: [{
                label: 'Revenue',
                data: sorted.map(d => d.revenue),
                backgroundColor: COLORS.categorical.slice(0, sorted.length),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.x);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: defaults.gridColor },
                    ticks: {
                        color: defaults.textColor,
                        callback: function(value) { return '$' + (value / 1000).toFixed(0) + 'k'; }
                    }
                },
                y: { grid: { display: false }, ticks: { color: defaults.textColor } }
            }
        }
    });
}

function createCustomerSegmentChart() {
    const ctx = document.getElementById('customerSegmentChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.customerSegment) charts.customerSegment.destroy();

    charts.customerSegment = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: DASHBOARD_DATA.customerSegments.map(d => d.segment),
            datasets: [{
                data: DASHBOARD_DATA.customerSegments.map(d => d.count),
                backgroundColor: ['#4361ee', '#f59e0b', '#10b981'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 14, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const item = DASHBOARD_DATA.customerSegments[context.dataIndex];
                            return [context.label + ': ' + context.parsed + ' customers', 'Revenue: ' + formatCurrency(item.revenue)];
                        }
                    }
                }
            }
        }
    });
}

function createRepeatCustomerChart() {
    const ctx = document.getElementById('repeatCustomerChart').getContext('2d');
    const defaults = getChartDefaults();

    if (charts.repeatCustomer) charts.repeatCustomer.destroy();

    // Simulated: 2976 unique customers, 3000 orders => ~24 repeat customers
    const repeatCount = 24;
    const singleCount = 2976 - repeatCount;

    charts.repeatCustomer = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Single Purchase', 'Repeat Customer'],
            datasets: [{
                data: [singleCount, repeatCount],
                backgroundColor: ['#64748b', '#4361ee'],
                borderWidth: 3,
                borderColor: defaults.backgroundColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: defaults.textColor, padding: 16, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: defaults.backgroundColor,
                    titleColor: defaults.textColor,
                    bodyColor: defaults.textColor,
                    borderColor: defaults.gridColor,
                    borderWidth: 1
                }
            }
        }
    });
}

// ============================================
// DATA TABLE
// ============================================
let salesDataTable = null;

function initDataTable() {
    // Sample data for the table (first 100 rows embedded)
    const sampleData = [
        ['ORD-00001', '02-08-2025', 'Noah Martin', 'USA', 'Houston', 'Outerwear', 'Rain Coat', 5, 74.19, 0, 450.13, 'Bank Transfer', 'Mobile App', 'Delivered', 2],
        ['ORD-00002', '21-01-2025', 'Isabella Rodriguez', 'UAE', 'Abu Dhabi', 'Footwear', 'Sneakers', 2, 54.15, 20, 99.29, 'PayPal', 'In-Store', 'Delivered', 3],
        ['ORD-00003', '26-06-2023', 'Liu Lopez', 'USA', 'Los Angeles', 'Bottoms', 'Leggings', 3, 12.36, 15, 37.82, 'Cash on Delivery', 'Online', 'Shipped', ''],
        ['ORD-00004', '24-07-2023', 'Wei Ali', 'Egypt', 'Cairo', 'Accessories', 'Scarf', 3, 9.19, 0, 41.07, 'Bank Transfer', 'In-Store', 'Delivered', 2],
        ['ORD-00005', '25-04-2022', 'Oliver Hassan', 'UK', 'Birmingham', 'Footwear', 'Sneakers', 5, 29.49, 15, 143.35, 'Bank Transfer', 'Mobile App', 'Delivered', 4],
        ['ORD-00006', '23-06-2023', 'Mateo Mostafa', 'Italy', 'Rome', 'Pajamas', 'Onesie', 2, 17.04, 30, 27.44, 'Google Pay', 'Online', 'Shipped', ''],
        ['ORD-00007', '21-02-2024', 'Omar Rivera', 'Australia', 'Melbourne', 'Tops', 'Long-Sleeve Shirt', 5, 27.46, 10, 135.93, 'Credit Card', 'Mobile App', 'Delivered', 1],
        ['ORD-00008', '01-08-2025', 'Isabella Anderson', 'Canada', 'Toronto', 'Accessories', 'Belt', 5, 8.23, 0, 53.37, 'Google Pay', 'Online', 'Delivered', 3],
        ['ORD-00009', '22-09-2024', 'Diego Miller', 'USA', 'Chicago', 'Swimwear', 'Rash Guard', 5, 19.12, 20, 88.59, 'Apple Pay', 'Mobile App', 'Shipped', ''],
        ['ORD-00010', '05-09-2022', 'Isabella Jones', 'UK', 'Birmingham', 'Tops', 'Tank Top', 5, 22.96, 5, 114.51, 'Google Pay', 'Online', 'Shipped', ''],
        ['ORD-00011', '02-10-2025', 'Ava Collins', 'Egypt', 'Alexandria', 'Swimwear', 'Board Shorts', 4, 38.32, 5, 152.90, 'Credit Card', 'In-Store', 'Shipped', ''],
        ['ORD-00012', '26-11-2023', 'Mia Anderson', 'USA', 'Houston', 'Swimwear', 'Board Shorts', 3, 27.08, 25, 65.80, 'Credit Card', 'Online', 'Delivered', 5],
        ['ORD-00013', '12-04-2024', 'Carlos Thomas', 'Egypt', 'Alexandria', 'Tops', 'Polo Shirt', 4, 18.23, 10, 79.46, 'Debit Card', 'Online', 'Delivered', 5],
        ['ORD-00014', '15-01-2025', 'Yang Hassan', 'USA', 'Los Angeles', 'Tops', 'Tank Top', 5, 20.87, 0, 115.56, 'Credit Card', 'Mobile App', 'Delivered', 5],
        ['ORD-00015', '31-03-2025', 'Oliver Cook', 'Australia', 'Melbourne', 'Pajamas', 'Sleep Shirt', 3, 25.00, 10, 80.89, 'Apple Pay', 'In-Store', 'Shipped', ''],
        ['ORD-00016', '29-05-2022', 'Omar Cook', 'USA', 'New York', 'Bottoms', 'Jeans', 5, 26.13, 10, 130.99, 'Cash on Delivery', 'Mobile App', 'Cancelled', ''],
        ['ORD-00017', '12-09-2023', 'Li Rivera', 'Australia', 'Melbourne', 'Footwear', 'Slippers', 2, 24.66, 10, 46.61, 'Debit Card', 'Mobile App', 'Shipped', ''],
        ['ORD-00018', '25-06-2023', 'Maria Harris', 'Canada', 'Toronto', 'Bottoms', 'Joggers', 3, 22.71, 0, 75.53, 'Google Pay', 'Online', 'Shipped', ''],
        ['ORD-00019', '04-06-2022', 'Logan Collins', 'Italy', 'Milan', 'Accessories', 'Sunglasses', 4, 16.05, 0, 71.40, 'Bank Transfer', 'Online', 'Delivered', 1],
        ['ORD-00020', '20-02-2025', 'Zhang Wilson', 'UAE', 'Abu Dhabi', 'Dresses', 'Party Dress', 1, 50.26, 0, 60.28, 'Apple Pay', 'Online', 'Shipped', '']
    ];

    if (salesDataTable) {
        salesDataTable.destroy();
    }

    salesDataTable = $('#salesTable').DataTable({
        data: sampleData,
        columns: [
            { title: 'Order ID' },
            { title: 'Date' },
            { title: 'Customer' },
            { title: 'Country' },
            { title: 'City' },
            { title: 'Category' },
            { title: 'Product' },
            { title: 'Qty' },
            { title: 'Unit Price', render: function(data) { return '$' + parseFloat(data).toFixed(2); } },
            { title: 'Discount %', render: function(data) { return data + '%'; } },
            { title: 'Total Price', render: function(data) { return '$' + parseFloat(data).toFixed(2); } },
            { title: 'Payment' },
            { title: 'Channel' },
            { title: 'Status', render: function(data) {
                const cls = 'badge-' + data.toLowerCase();
                return '<span class="badge ' + cls + '">' + data + '</span>';
            }},
            { title: 'Rating', render: function(data) {
                if (!data) return '<span class="text-muted">N/A</span>';
                return '<span class="rating-stars">' + '★'.repeat(data) + '☆'.repeat(5 - data) + '</span>';
            }}
        ],
        pageLength: 10,
        lengthMenu: [10, 25, 50, 100],
        order: [[0, 'asc']],
        dom: 'Bfrtip',
        buttons: [
            { extend: 'csv', className: 'btn btn-sm btn-outline-primary', text: '<i class="fas fa-file-csv"></i> CSV' },
            { extend: 'excel', className: 'btn btn-sm btn-outline-success', text: '<i class="fas fa-file-excel"></i> Excel' },
            { extend: 'pdf', className: 'btn btn-sm btn-outline-danger', text: '<i class="fas fa-file-pdf"></i> PDF' },
            { extend: 'print', className: 'btn btn-sm btn-outline-secondary', text: '<i class="fas fa-print"></i> Print' }
        ],
        language: {
            search: '<i class="fas fa-search"></i>',
            searchPlaceholder: 'Search records...',
            lengthMenu: 'Show _MENU_ entries',
            info: 'Showing _START_ to _END_ of _TOTAL_ records',
            paginate: { first: 'First', last: 'Last', next: 'Next', previous: 'Previous' }
        }
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');

            // Update active nav
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show target section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');

            // Initialize charts if needed
            if (targetId === 'analytics') {
                setTimeout(() => {
                    createSeasonChart();
                    createGenderChart();
                    createAgeGroupChart();
                    createPaymentChart();
                    createChannelChart();
                    createStatusChart();
                    createReturnChart();
                    createRatingChart();
                    createDiscountChart();
                    createGrowthChart();
                    createCityChart();
                }, 100);
            } else if (targetId === 'products') {
                setTimeout(() => {
                    createProductCategoryDonut();
                    createTopProductsBar();
                    createReturnRiskChart();
                }, 100);
            } else if (targetId === 'customers') {
                setTimeout(() => {
                    createCustomerGenderPie();
                    createCustomerAgeChart();
                    createCustomerCountryChart();
                    createCustomerSegmentChart();
                    createRepeatCustomerChart();
                }, 100);
            } else if (targetId === 'data-table') {
                setTimeout(() => {
                    if (!salesDataTable) initDataTable();
                }, 100);
            }

            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('mobile-open');
        });
    });
}

// ============================================
// SIDEBAR TOGGLE
// ============================================
function initSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const mobileToggle = document.getElementById('mobileSidebarToggle');

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // Redraw charts on resize
        setTimeout(() => {
            Object.values(charts).forEach(chart => {
                if (chart) chart.resize();
            });
        }, 350);
    });

    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });
}

// ============================================
// DARK MODE
// ============================================
function initDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    // Check saved preference
    const savedTheme = localStorage.getItem('dashboard-theme');
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('dashboard-theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('dashboard-theme', 'light');
        }

        // Recreate all visible charts with new theme
        setTimeout(() => {
            createMonthlyRevenueChart();
            createYearlyRevenueChart();
            createCountryRevenueChart();
            createCategoryRevenueChart();
            createTopProductsChart();

            // Recreate analytics charts if visible
            if (document.getElementById('analytics').classList.contains('active')) {
                createSeasonChart();
                createGenderChart();
                createAgeGroupChart();
                createPaymentChart();
                createChannelChart();
                createStatusChart();
                createReturnChart();
                createRatingChart();
                createDiscountChart();
                createGrowthChart();
                createCityChart();
            }

            // Recreate products charts if visible
            if (document.getElementById('products').classList.contains('active')) {
                createProductCategoryDonut();
                createTopProductsBar();
                createReturnRiskChart();
            }

            // Recreate customer charts if visible
            if (document.getElementById('customers').classList.contains('active')) {
                createCustomerGenderPie();
                createCustomerAgeChart();
                createCustomerCountryChart();
                createCustomerSegmentChart();
                createRepeatCustomerChart();
            }
        }, 100);
    });
}

// ============================================
// CHART TYPE TOGGLE
// ============================================
function initChartTypeToggle() {
    document.querySelectorAll('.chart-actions .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartName = this.getAttribute('data-chart');
            const type = this.getAttribute('data-type');

            // Update active button
            this.parentElement.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Toggle chart type
            if (chartName === 'monthly' && charts.monthlyRevenue) {
                charts.monthlyRevenue.config.type = type;
                if (type === 'bar') {
                    charts.monthlyRevenue.data.datasets[0].fill = false;
                    charts.monthlyRevenue.data.datasets[0].backgroundColor = '#4361ee';
                    charts.monthlyRevenue.data.datasets[0].borderRadius = 4;
                } else {
                    const ctx = charts.monthlyRevenue.ctx;
                    charts.monthlyRevenue.data.datasets[0].fill = true;
                    charts.monthlyRevenue.data.datasets[0].backgroundColor = createGradient(ctx, 'rgba(67, 97, 238, 0.3)', 'rgba(67, 97, 238, 0.01)');
                    delete charts.monthlyRevenue.data.datasets[0].borderRadius;
                }
                charts.monthlyRevenue.update();
            }
        });
    });
}

// ============================================
// EXPORT FUNCTIONALITY
// ============================================
function initExport() {
    document.getElementById('exportExcel').addEventListener('click', function(e) {
        e.preventDefault();
        // Trigger DataTable export if on table page
        if (salesDataTable) {
            $('.buttons-excel').click();
        } else {
            alert('Navigate to the Data Table section to export data.');
        }
    });

    document.getElementById('exportPDF').addEventListener('click', function(e) {
        e.preventDefault();
        if (salesDataTable) {
            $('.buttons-pdf').click();
        } else {
            alert('Navigate to the Data Table section to export data.');
        }
    });
}

// ============================================
// ANIMATED COUNTER
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.kpi-value');
    counters.forEach(counter => {
        const text = counter.textContent;
        const hasPrefix = text.startsWith('$');
        const hasSuffix = text.endsWith('%') || text.endsWith('/5');
        const numStr = text.replace(/[$,%\/5\s]/g, '').replace(/,/g, '');
        const target = parseFloat(numStr);

        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            let display = '';
            if (hasPrefix) display += '$';
            display += current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            if (hasSuffix && text.endsWith('%')) display += '%';
            if (hasSuffix && text.endsWith('/5')) display += ' / 5';

            counter.textContent = display;
        }, 16);
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    initSidebarToggle();
    initDarkMode();
    initChartTypeToggle();
    initExport();

    // Create dashboard charts
    createMonthlyRevenueChart();
    createYearlyRevenueChart();
    createCountryRevenueChart();
    createCategoryRevenueChart();
    createTopProductsChart();

    // Animate KPI counters
    animateCounters();

    // Hide loading overlay
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 800);
});

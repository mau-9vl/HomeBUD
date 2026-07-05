// Mock Data for HomeOS

// Family Members
export const familyMembers = [
  {
    id: 'mau',
    name: 'Mau',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    color: '#5B8CFF',
    mood: 'productive',
    todayTasks: 5,
    completedTasks: 3,
    upcomingEvents: 2,
  },
  {
    id: 'maf',
    name: 'Maf',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    color: '#7C3AED',
    mood: 'relaxed',
    todayTasks: 4,
    completedTasks: 2,
    upcomingEvents: 3,
  },
];

// Calendar Events
export const calendarEvents = [
  {
    id: '1',
    title: 'Morning Workout',
    time: '07:00',
    duration: 60,
    color: '#5B8CFF',
    member: 'mau',
    day: 0,
  },
  {
    id: '2',
    title: 'Team Meeting',
    time: '10:00',
    duration: 90,
    color: '#5B8CFF',
    member: 'mau',
    day: 0,
  },
  {
    id: '3',
    title: 'Lunch with Mom',
    time: '12:30',
    duration: 90,
    color: '#4ADE80',
    member: 'shared',
    day: 0,
  },
  {
    id: '4',
    title: 'Yoga Class',
    time: '08:00',
    duration: 60,
    color: '#7C3AED',
    member: 'maf',
    day: 1,
  },
  {
    id: '5',
    title: 'Date Night Dinner',
    time: '20:00',
    duration: 120,
    color: '#4ADE80',
    member: 'shared',
    day: 2,
  },
  {
    id: '6',
    title: 'Grocery Shopping',
    time: '14:00',
    duration: 60,
    color: '#FBBF24',
    member: 'shared',
    day: 3,
  },
  {
    id: '7',
    title: 'Movie Night',
    time: '19:00',
    duration: 150,
    color: '#4ADE80',
    member: 'shared',
    day: 4,
  },
  {
    id: '8',
    title: 'Brunch with Friends',
    time: '11:00',
    duration: 120,
    color: '#4ADE80',
    member: 'shared',
    day: 5,
  },
];

// Budget Categories
export const budgetBuckets = [
  {
    id: 'living',
    name: 'Living',
    icon: 'home',
    percentage: 80,
    budget: 4000,
    spent: 3200,
    color: '#5B8CFF',
    items: [
      { name: 'Mortgage', amount: 2200, icon: 'home' },
      { name: 'Groceries', amount: 600, icon: 'shopping-cart' },
      { name: 'Utilities', amount: 200, icon: 'zap' },
      { name: 'Transportation', amount: 150, icon: 'car' },
      { name: 'Insurance', amount: 180, icon: 'shield' },
      { name: 'Maintenance', amount: 50, icon: 'wrench' },
    ],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    icon: 'sparkles',
    percentage: 10,
    budget: 500,
    spent: 380,
    color: '#FBBF24',
    items: [
      { name: 'Restaurants', amount: 150, icon: 'utensils' },
      { name: 'Entertainment', amount: 80, icon: 'film' },
      { name: 'Shopping', amount: 100, icon: 'shopping-bag' },
      { name: 'Coffee', amount: 50, icon: 'coffee' },
    ],
  },
  {
    id: 'future',
    name: 'Future Wealth',
    icon: 'trending-up',
    percentage: 5,
    budget: 250,
    spent: 200,
    color: '#4ADE80',
    items: [
      { name: 'Stocks', amount: 100, icon: 'bar-chart-2' },
      { name: 'ETF', amount: 50, icon: 'line-chart' },
      { name: 'Crypto', amount: 30, icon: 'bitcoin' },
      { name: 'Courses', amount: 20, icon: 'book-open' },
    ],
  },
  {
    id: 'savings',
    name: 'Savings',
    icon: 'piggy-bank',
    percentage: 5,
    budget: 250,
    spent: 220,
    color: '#7C3AED',
    items: [
      { name: 'Emergency Fund', amount: 100, icon: 'shield' },
      { name: 'Japan Trip', amount: 80, icon: 'plane' },
      { name: 'Wedding Fund', amount: 40, icon: 'heart' },
    ],
  },
];

// Goals
export const goals = [
  {
    id: '1',
    title: 'Japan 2028',
    target: 15000,
    current: 6150,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop',
    deadline: '2028-06-01',
    nextMilestone: 'Save $500/month',
    category: 'Travel',
  },
  {
    id: '2',
    title: 'Dream House',
    target: 100000,
    current: 25000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop',
    deadline: '2030-01-01',
    nextMilestone: 'Save $2,000/month',
    category: 'Home',
  },
  {
    id: '3',
    title: 'Investment Portfolio',
    target: 50000,
    current: 18500,
    image: 'https://images.unsplash.com/photo-1611974789855-9c659c8f6325?w=800&h=400&fit=crop',
    deadline: '2027-01-01',
    nextMilestone: 'Rebalance portfolio',
    category: 'Finance',
  },
  {
    id: '4',
    title: 'Emergency Fund',
    target: 10000,
    current: 7500,
    image: 'https://images.unsplash.com/photo-1554224155-6dc6be437d88?w=800&h=400&fit=crop',
    deadline: '2025-06-01',
    nextMilestone: '3 months of expenses',
    category: 'Security',
  },
  {
    id: '5',
    title: 'Kitchen Remodel',
    target: 25000,
    current: 8000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    deadline: '2026-06-01',
    nextMilestone: 'Get contractor quotes',
    category: 'Home',
  },
  {
    id: '6',
    title: 'New Car',
    target: 35000,
    current: 12000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop',
    deadline: '2027-01-01',
    nextMilestone: 'Research EV options',
    category: 'Transportation',
  },
];

// Rooms
export const rooms = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=400&fit=crop',
    status: 'clean',
    lastCleaned: '2024-01-15',
    maintenance: [],
    inventory: 12,
    projects: 1,
    devices: 4,
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    status: 'needs-attention',
    lastCleaned: '2024-01-12',
    maintenance: [{ task: 'Clean oven', due: '2024-01-20' }],
    inventory: 45,
    projects: 2,
    devices: 6,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1540518614846-7d9b2fc60708?w=800&h=400&fit=crop',
    status: 'clean',
    lastCleaned: '2024-01-16',
    maintenance: [],
    inventory: 28,
    projects: 0,
    devices: 3,
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1593062096033-9a60b66d10f4?w=800&h=400&fit=crop',
    status: 'clean',
    lastCleaned: '2024-01-14',
    maintenance: [{ task: 'Organize cables', due: '2024-01-25' }],
    inventory: 15,
    projects: 1,
    devices: 8,
  },
  {
    id: 'garage',
    name: 'Garage',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    status: 'needs-attention',
    lastCleaned: '2024-01-01',
    maintenance: [{ task: 'Organize tools', due: '2024-01-30' }],
    inventory: 85,
    projects: 3,
    devices: 2,
  },
];

// Shopping Lists
export const shoppingLists = [
  {
    id: 'groceries',
    name: 'Groceries',
    store: 'Whole Foods',
    items: [
      { id: '1', name: 'Organic eggs', completed: true },
      { id: '2', name: 'Almond milk', completed: false },
      { id: '3', name: 'Spinach', completed: false },
      { id: '4', name: 'Chicken breast', completed: false },
      { id: '5', name: 'Avocados', completed: true },
      { id: '6', name: 'Greek yogurt', completed: false },
      { id: '7', name: 'Bananas', completed: false },
      { id: '8', name: 'Coffee beans', completed: true },
    ],
    color: '#4ADE80',
  },
  {
    id: 'costco',
    name: 'Costco',
    store: 'Costco',
    items: [
      { id: '1', name: 'Paper towels', completed: false },
      { id: '2', name: 'Laundry detergent', completed: true },
      { id: '3', name: 'Olive oil', completed: false },
      { id: '4', name: 'Quinoa', completed: false },
    ],
    color: '#F87171',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    store: 'Amazon',
    items: [
      { id: '1', name: 'LED bulbs', completed: false },
      { id: '2', name: 'Phone charger', completed: true },
      { id: '3', name: 'Smart plug', completed: false },
    ],
    color: '#FBBF24',
  },
];

// Gift Planner
export const giftRecipients = [
  {
    id: 'mom',
    name: 'Mom',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    birthday: '2024-02-10',
    birthdayCountdown: 6,
    preferences: ['Gardening', 'Cooking', 'Spa'],
    gifts: [
      { id: '1', name: 'Spa Gift Set', status: 'idea', price: 85 },
      { id: '2', name: 'Garden Tools', status: 'idea', price: 120 },
    ],
  },
  {
    id: 'dad',
    name: 'Dad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    birthday: '2024-04-15',
    birthdayCountdown: 76,
    preferences: ['Golf', 'Technology', 'BBQ'],
    gifts: [
      { id: '1', name: 'Golf Clubs Cover', status: 'purchased', price: 45 },
    ],
  },
  {
    id: 'ana',
    name: 'Ana',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    birthday: '2024-06-20',
    birthdayCountdown: 142,
    preferences: ['Fashion', 'Art', 'Travel'],
    gifts: [],
  },
  {
    id: 'coque',
    name: 'Coque',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    birthday: '2024-03-08',
    birthdayCountdown: 38,
    preferences: ['Gaming', 'Music', 'Sports'],
    gifts: [
      { id: '1', name: 'Gaming Headset', status: 'wrapped', price: 150 },
    ],
  },
];

// Projects
export const projects = [
  {
    id: '1',
    name: 'Kitchen Remodel',
    description: 'Complete kitchen renovation with new cabinets and appliances',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    progress: 25,
    budget: 25000,
    spent: 6500,
    tasks: [
      { name: 'Get contractor quotes', completed: true },
      { name: 'Select cabinets', completed: true },
      { name: 'Choose appliances', completed: false },
      { name: 'Finalize layout', completed: false },
      { name: 'Schedule demolition', completed: false },
    ],
    documents: 4,
    startDate: '2024-01-01',
    endDate: '2026-06-01',
  },
  {
    id: '2',
    name: 'Japan Trip',
    description: 'Planning our dream trip to Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop',
    progress: 41,
    budget: 15000,
    spent: 6150,
    tasks: [
      { name: 'Get passports renewed', completed: true },
      { name: 'Research cities to visit', completed: true },
      { name: 'Book flights', completed: false },
      { name: 'Reserve hotels', completed: false },
      { name: 'Plan itinerary', completed: false },
    ],
    documents: 8,
    startDate: '2023-01-01',
    endDate: '2028-06-01',
  },
  {
    id: '3',
    name: 'Wedding',
    description: 'Our special day celebration',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop',
    progress: 60,
    budget: 20000,
    spent: 12000,
    tasks: [
      { name: 'Book venue', completed: true },
      { name: 'Hire photographer', completed: true },
      { name: 'Order invitations', completed: true },
      { name: 'Finalize guest list', completed: false },
      { name: 'Choose menu', completed: false },
    ],
    documents: 12,
    startDate: '2024-01-01',
    endDate: '2024-12-01',
  },
];

// Documents
export const documentCategories = [
  { name: 'House', icon: 'home', count: 8 },
  { name: 'Insurance', icon: 'shield', count: 6 },
  { name: 'Passports', icon: 'book', count: 2 },
  { name: 'Medical', icon: 'heart', count: 12 },
  { name: 'Pets', icon: 'paw', count: 4 },
  { name: 'Receipts', icon: 'file-text', count: 45 },
  { name: 'Car', icon: 'car', count: 7 },
];

export const recentDocuments = [
  { name: 'Home Insurance Policy.pdf', category: 'Insurance', date: '2024-01-10', size: '2.4 MB' },
  { name: 'Car Registration.pdf', category: 'Car', date: '2024-01-08', size: '1.1 MB' },
  { name: 'Vaccination Records.pdf', category: 'Medical', date: '2024-01-05', size: '890 KB' },
  { name: 'Warranty - Refrigerator.pdf', category: 'House', date: '2024-01-03', size: '456 KB' },
  { name: 'Pet Insurance - Luna.pdf', category: 'Pets', date: '2024-01-02', size: '1.8 MB' },
];

// Hermes Suggestions
export const hermesSuggestions = [
  "Add a $350 grocery expense",
  "Schedule dinner Friday",
  "How are we doing financially?",
  "Can we afford Italy?",
  "Add Costco receipt",
  "Create grocery list",
  "What should we focus on this week?",
];

// Tasks
export const todayTasks = [
  { id: '1', title: 'Complete project proposal', completed: true, priority: 'high', assignee: 'mau' },
  { id: '2', title: 'Call mom', completed: false, priority: 'medium', assignee: 'maf' },
  { id: '3', title: 'Pay electricity bill', completed: false, priority: 'high', assignee: 'shared' },
  { id: '4', title: 'Grocery shopping', completed: true, priority: 'medium', assignee: 'shared' },
  { id: '5', title: 'Evening walk', completed: false, priority: 'low', assignee: 'shared' },
];

// Upcoming Events
export const upcomingEvents = [
  { title: "Mom's Birthday", date: '2024-02-04', days: 6, type: 'birthday' },
  { title: 'Date Night', date: '2024-02-07', days: 9, type: 'event' },
  { title: 'Valentine\'s Day', date: '2024-02-14', days: 16, type: 'holiday' },
  { title: 'Dentist Appointment', date: '2024-02-18', days: 20, type: 'appointment' },
];

// House Status
export const houseStatus = {
  temperature: 72,
  humidity: 45,
  airQuality: 'Good',
  security: 'Armed',
  doors: { front: 'locked', back: 'locked', garage: 'closed' },
  lights: { on: 5, off: 12 },
  energy: { today: 24, month: 520 },
};

// Budget Overview
export const budgetOverview = {
  monthlyIncome: 8500,
  budgetUsed: 4000,
  savings: 850,
  investments: 425,
};

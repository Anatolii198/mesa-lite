/* ==========================================================================
   Mesa — demo data
   Replace this file with your own numbers (or fetch them from your API and
   assign the same shapes). Nothing else in the template needs to change.
   ========================================================================== */

const DATA = {

  currency: '€',

  /* ---- headline tiles ------------------------------------------------- */
  kpi: {
    revenue:  { value: 8420,  delta: +12.4, spark: [5100, 5600, 5300, 6200, 6800, 6400, 7100, 7400, 7000, 7900, 8100, 8420] },
    orders:   { value: 214,   delta: +6.1,  spark: [152, 161, 158, 173, 181, 176, 188, 195, 190, 203, 209, 214] },
    avgCheck: { value: 39.3,  delta: +5.9,  spark: [33.6, 34.8, 33.5, 35.8, 37.6, 36.4, 37.8, 37.9, 36.8, 38.9, 38.8, 39.3] },
    covers:   { value: 341,   delta: -2.3,  spark: [372, 366, 358, 349, 362, 355, 347, 352, 344, 350, 349, 341] }
  },

  /* ---- revenue, last 30 days ----------------------------------------- */
  revenue30: {
    labels: ['1 Sep','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
             '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30 Sep'],
    values: [6100, 5800, 6400, 7900, 9600, 10200, 6900, 6300, 6050, 6700, 8100, 9900, 10800, 7200, 6600,
             6400, 7000, 8300, 10100, 11200, 7600, 6900, 6700, 7300, 8600, 10400, 11600, 7900, 7400, 8420]
  },

  /* ---- hours × weekday, orders ---------------------------------------- */
  heat: {
    hours: ['11','12','13','14','15','16','17','18','19','20','21','22'],
    days: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    /* rows = days, columns = hours */
    values: [
      [ 4, 12, 18,  9,  5,  4,  7, 14, 19, 16,  9,  3],
      [ 5, 13, 20, 10,  5,  4,  8, 16, 21, 18, 10,  4],
      [ 5, 14, 21, 11,  6,  5,  9, 18, 24, 20, 11,  4],
      [ 6, 16, 24, 12,  7,  6, 11, 22, 29, 25, 14,  6],
      [ 7, 19, 28, 15,  9,  8, 15, 31, 42, 38, 24, 11],
      [ 9, 22, 34, 24, 16, 14, 21, 38, 48, 44, 29, 15],
      [10, 24, 36, 26, 15, 11, 16, 27, 31, 24, 13,  5]
    ]
  },

  /* ---- revenue by channel, last 7 days -------------------------------- */
  channels: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    series: [
      { name: 'Dine-in',  color: '--s1', values: [3100, 3300, 3600, 4400, 6200, 7400, 5100] },
      { name: 'Delivery', color: '--s2', values: [1900, 2050, 2200, 2600, 3300, 3900, 3400] },
      { name: 'Takeaway', color: '--s3', values: [ 900,  950, 1050, 1250, 1700, 2000, 1600] }
    ]
  },

  /* ---- channel split, month ------------------------------------------- */
  /* the row totals of `channelPayments` below — the two must agree, because the
     Overview donut and the Sales grid are the same money seen two ways */
  channelSplit: [
    { name: 'Dine-in',  value: 127400, color: '--s1' },
    { name: 'Delivery', value:  68300, color: '--s2' },
    { name: 'Takeaway', value:  31800, color: '--s3' }
  ],

  /* ---- top dishes by revenue ------------------------------------------ */
  topDishes: [
    { name: 'Truffle tagliatelle', value: 7840 },
    { name: 'Dry-aged ribeye',     value: 6920 },
    { name: 'Burrata & peach',     value: 4310 },
    { name: 'Octopus a la brasa',  value: 3980 },
    { name: 'Tiramisu',            value: 2640 },
    { name: 'House negroni',       value: 2180 }
  ],

  /* ---- average check trend, 12 weeks ---------------------------------- */
  avgCheckTrend: {
    labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
    series: [
      { name: 'Dine-in',  color: '--s1', values: [44.1, 44.8, 45.2, 46.0, 45.6, 46.8, 47.2, 47.0, 48.1, 48.6, 49.0, 49.4] },
      { name: 'Delivery', color: '--s2', values: [28.4, 28.9, 29.1, 29.8, 30.2, 30.0, 30.9, 31.4, 31.2, 32.0, 32.4, 32.8] }
    ]
  },

  /* ---- sales page ------------------------------------------------------ */
  byWeekday: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    values: [5900, 6300, 6850, 8250, 11200, 13300, 10100]
  },
  byHour: {
    labels: ['11','12','13','14','15','16','17','18','19','20','21','22'],
    values: [410, 1180, 1960, 1140, 620, 540, 910, 2080, 2890, 2470, 1420, 600]
  },
  payments: [
    { name: 'Card',   value: 118600, color: '--s1' },
    { name: 'Cash',   value:  41200, color: '--s2' },
    { name: 'Online', value:  67700, color: '--s3' }
  ],

  /* Channel × payment method, this month. The rows add up to the channel split
     on the Overview page and the columns to `payments` above — one grid, so the
     two donuts elsewhere can never contradict it. */
  channelPayments: {
    labels: ['Dine-in', 'Delivery', 'Takeaway'],
    series: [
      { name: 'Card',   color: '--s1', values: [86000, 19600, 13000] },
      { name: 'Cash',   color: '--s2', values: [33400,  3200,  4600] },
      { name: 'Online', color: '--s3', values: [ 8000, 45500, 14200] }
    ]
  },
  /* Gross profit = revenue − cost of goods (food & drink).
     Stored as the two parts, so the stack adds up to revenue and the margin
     is derived rather than typed in twice. */
  grossProfit: {
    labels:  ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    revenue: [186400, 192300, 201700, 198900, 214500, 221800, 219400, 227300],
    cost:    [ 62300,  63500,  65800,  65400,  68900,  70100,  68900,  70500],
    /* everything below the food cost: wages, then rent, utilities, marketing.
       Operating profit = revenue − cost − labour − overhead. */
    labour:  [ 53100,  54400,  56700,  56100,  59400,  60800,  60300,  61800],
    overhead:[ 55000,  55000,  55600,  55600,  56400,  56400,  57100,  57100]
  },

  salesDays: [
    { date: '30 Sep', orders: 214, covers: 341, revenue: 8420,  avg: 39.3, discount: 310 },
    { date: '29 Sep', orders: 198, covers: 318, revenue: 7400,  avg: 37.4, discount: 265 },
    { date: '28 Sep', orders: 206, covers: 332, revenue: 7900,  avg: 38.3, discount: 288 },
    { date: '27 Sep', orders: 291, covers: 468, revenue: 11600, avg: 39.9, discount: 442 },
    { date: '26 Sep', orders: 268, covers: 421, revenue: 10400, avg: 38.8, discount: 395 },
    { date: '25 Sep', orders: 224, covers: 351, revenue: 8600,  avg: 38.4, discount: 322 },
    { date: '24 Sep', orders: 192, covers: 302, revenue: 7300,  avg: 38.0, discount: 271 }
  ],

  /* ---- inventory page --------------------------------------------------- */

  /* onHand and par are in `unit`; usePerDay is the average draw, so the days of
     cover and the stock value are both derived — never typed in twice. */

  /* The service dates are what drive the schedule chart: `last` is the check that
     was done, `next` the one it falls due on, `every` the interval in months and
     `cost` what that visit is quoted at. Status is derived from `next` against
     today, never typed in, so moving a date moves the colour with it. */

  /* ---- menu page ------------------------------------------------------- */
  /* value = revenue for the month; margin = gross margin %, the weighted average
     of the items in that category (see menuItems below). */
  menuCategories: [
    { name: 'Mains',    value: 84200, margin: 65.1, color: '--s1' },
    { name: 'Starters', value: 39600, margin: 66.0, color: '--s2' },
    { name: 'Desserts', value: 21300, margin: 78.2, color: '--s3' },
    { name: 'Drinks',   value: 48900, margin: 74.3, color: '--s4' }
  ],

  /* ---- orders page ------------------------------------------------------ */

  /* ---- returned / refused dishes --------------------------------------- */

  /* ---- order status by channel (sums to the same 214 orders) ------------ */

  /* ---- delivery page ---------------------------------------------------- */

  /* ---- customers page --------------------------------------------------- */

  /* ---- staff page -------------------------------------------------------- */

  /* ---- live orders ----------------------------------------------------- */
  orders: [
    { id: '#4821', time: '20:14', table: 'T12', items: 6, guests: 4, total: 184.50, channel: 'Dine-in',  status: 'ok',     statusText: 'Served' },
    { id: '#4820', time: '20:08', table: '—',   items: 3, guests: 1, total:  46.00, channel: 'Delivery', status: 'ok',     statusText: 'Delivered' },
    { id: '#4819', time: '20:02', table: 'T04', items: 8, guests: 5, total: 231.00, channel: 'Dine-in',  status: 'wait',   statusText: 'In kitchen' },
    { id: '#4818', time: '19:57', table: '—',   items: 2, guests: 2, total:  38.40, channel: 'Takeaway', status: 'ok',     statusText: 'Picked up' },
    { id: '#4817', time: '19:51', table: 'T09', items: 5, guests: 3, total: 142.80, channel: 'Dine-in',  status: 'ok',     statusText: 'Served' },
    { id: '#4816', time: '19:44', table: '—',   items: 4, guests: 2, total:  67.20, channel: 'Delivery', status: 'cancel', statusText: 'Cancelled' },
    { id: '#4815', time: '19:38', table: 'T02', items: 7, guests: 4, total: 198.00, channel: 'Dine-in',  status: 'ok',     statusText: 'Served' },
    { id: '#4814', time: '19:30', table: '—',   items: 3, guests: 1, total:  52.10, channel: 'Delivery', status: 'ok',     statusText: 'Delivered' }
  ]
};

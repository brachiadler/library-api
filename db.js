// db.js

let books = [
  {
    code: 101,
    name: "מבוא למדעי המחשב",
    category: "תוכנה",
    price: 89.90,
    isBorrowed: false,
    borrowHistory: [] 
  },
  {
    code: 102,
    name: "אלגוריתמים ומבני נתונים",
    category: "תוכנה",
    price: 120.00,
    isBorrowed: true,
    borrowHistory: [
      { borrowDate: "2026-01-15", userId: 1 }
    ]
  },
  {
    code: 103,
    name: "רשתות תקשורת",
    category: "חומרה ורשתות",
    price: 95.50,
    isBorrowed: false,
    borrowHistory: []
  },
  {
    code: 104,
    name: "מסדי נתונים רלוציוניים ו-SQL",
    category: "תוכנה",
    price: 110.00,
    isBorrowed: false,
    borrowHistory: [
      { borrowDate: "2025-12-10", userId: 2 },
      { borrowDate: "2026-02-05", userId: 1 }
    ]
  },
  {
    code: 105,
    name: "אבטחת מידע וסייבר",
    category: "אבטחת מידע",
    price: 145.90,
    isBorrowed: true,
    borrowHistory: [
      { borrowDate: "2026-03-01", userId: 2 }
    ]
  },
  {
    code: 106,
    name: "מערכות הפעלה",
    category: "חומרה ורשתות",
    price: 105.00,
    isBorrowed: false,
    borrowHistory: []
  },
  {
    code: 107,
    name: "פיתוח אפליקציות צד-שרת (Node.js)",
    category: "תוכנה",
    price: 130.00,
    isBorrowed: true,
    borrowHistory: [
      { borrowDate: "2026-01-20", userId: 1 },
      { borrowDate: "2026-03-15", userId: 2 }
    ]
  },
  {
    code: 108,
    name: "תכנות מונחה עצמים ב-C++",
    category: "תוכנה",
    price: 115.50,
    isBorrowed: false,
    borrowHistory: [
      { borrowDate: "2025-11-30", userId: 1 }
    ]
  },
  {
    code: 109,
    name: "ארכיטקטורת מחשבים ואסמבלי",
    category: "חומרה ורשתות",
    price: 125.00,
    isBorrowed: false,
    borrowHistory: []
  },
  {
    code: 110,
    name: "עיצוב ממשק משתמש (UI/UX)",
    category: "עיצוב ופיתוח חזית",
    price: 98.00,
    isBorrowed: true,
    borrowHistory: [
      { borrowDate: "2026-04-02", userId: 1 }
    ]
  }
];



module.exports = { books };
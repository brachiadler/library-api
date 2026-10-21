// קובץ controllers/book.controller.js

// ייבוא מערך הספרים ממסד הנתונים
let { books } = require('../db'); 

//קבלת כל הספרים
const getAllBooks = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || '';
    
    const bookS = books.filter(b => b.name.includes(search));
    const startIndex = limit * (page - 1);
    const endIndex = page * limit;
    const paginatedBooks = bookS.slice(startIndex, endIndex);
    
    res.status(200).json({
        length: bookS.length,
        currentPage: page,
        countPages: Math.ceil(bookS.length / limit),
        array: paginatedBooks
    });
};

//קבלת ספר עפ"י קוד ספר
const getBookById = (req, res) => {
    const code = parseInt(req.params.code);
    const book = books.find(b => b.code === code);
    if (!book) { 
        return res.status(404).json({ message: `not found book with code ${code}` }); 
    }
    res.status(200).json(book);
};

//הוספת ספר חדש
const addBook = (req, res) => {
    const { code, name, category, price } = req.body;
    if (!code || !name || !category || price === undefined) {
        return res.status(400).json({ message: "חובה לספק קוד,שם,קטגוריה ומחיר" });
    }
    const existingBook = books.find(b => b.code === code);
    if (existingBook) {
        return res.status(400).json({ message: "קיים כבר ספר עם קוד זה" });
    }
    const newBook = {
        code: parseInt(code),
        name, 
        category,
        price: parseFloat(price),
        isBorrowed: false,
        borrowHistory: []
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

//עדכון ספר
const updateBook = (req, res) => {
    const code = parseInt(req.params.code);
    const book = books.find(b => b.code === code);
    if (!book) {
        return res.status(404).json({ message: `לא קיים ספר עם קוד ${code}` });
    }
    const { name, category, price } = req.body;
    if (name !== undefined) book.name = name;
    if (category !== undefined) book.category = category;
    if (price !== undefined) book.price = price;
    res.status(200).json(book);
};

//השאלת ספר
const borrowBook = (req, res) => {
    const code = parseInt(req.params.code);
    const { userId } = req.body;
    const book = books.find(b => b.code === code);
    if (!book) {
        return res.status(404).json({ message: `לא קיים ספר עם קוד ${code}` });
    }
    if (book.isBorrowed === true) {
        return res.status(400).json({ message: "הספר מושאל" });
    }
    book.isBorrowed = true;
    book.borrowHistory.push({
        borrowDate: new Date().toISOString().split('T')[0],
        userId: parseInt(userId)
    });
    res.status(200).json({ message: "הספר הושאל בהצלחה", book });
};

//החזרת ספר
const returnBook = (req, res) => {
    const code = parseInt(req.params.code);
    const book = books.find(b => b.code === code);
    if (!book) {
        return res.status(404).json({ message: `לא קיים ספר עם קוד ${code}` });
    }
    book.isBorrowed = false;
    res.status(200).json({ message: "הספר הוחזר בהצלחה", book });
};

//מחיקת ספר
const deleteBook = (req, res) => {
    const code = parseInt(req.params.code);
    const book = books.find(b => b.code === code);
    if (!book) {
        return res.status(404).json({ message: `לא קיים ספר עם קוד ${code}` });
    }
    books = books.filter(b => b.code !== code);
    res.status(200).json({ message: "הספר נמחק בהצלחה" });
};


module.exports = {
    getAllBooks, getBookById, addBook, updateBook, borrowBook, returnBook, deleteBook
};
let { users } = require('../dbUsers');

//הצגת כל המשתמשים
const getAllUsers = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || '';
    
    const userS = users.filter(b => b.name.includes(search));
    const startIndex = limit * (page - 1);
    const endIndex = page * limit;
    const paginatedBooks = userS.slice(startIndex, endIndex);
    
    res.status(200).json({
        length: userS.length,
        currentPage: page,
        countPages: Math.ceil(userS.length / limit),
        array: paginatedUsers
    });
    console.log(req.currentDate);
};

//הרשמה
const sign_up = (req, res) => {
    const { code, name, email, password } = req.body;
    if ( !name || ! email|| !password === undefined) {
        return res.status(400).json({ message: "חובה לספק שם,אימייל וסיסמא" });
    }
    const existingUser = users.find(b => b.code === code);
    if (existingUser) {
        return res.status(400).json({ message: "קיים כבר משתמש עם קוד זה" });
    }
    const newUser = {
        code: parseInt(code),
        name, 
        email,
        password,
        borrowedBooks: []
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

//הרשמה
const sign_in = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        res.status(200).json({ message: "התחברות מוצלחת", user });
    } else {
        res.status(401).json({ message: "אימייל או סיסמה שגויים" });
    }
};

module.exports = { getAllUsers, sign_up, sign_in };


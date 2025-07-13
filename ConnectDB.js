const { default: taskArray } = require('./src/util/MockData');

const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./src/todoList.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log(`Kết nối thành công.`);
    }
});

//Get data

const getData = async (sql) => {
    sql = `SELECT * FROM tasks`;
    db.all(sql, [], (err, taskArray) => {
        taskArray.forEach((task) => {
            // console.log(task);
            
            return task;
        })
    })
}


const displayData = getData(sql);

console.log(`Danh sách task: `);
console.log(displayData);


//Insert data
// sql = `INSERT INTO tasks(taskName, startDate, endDate, status) VALUES (?, ? ,?, ?)`;
// db.run(
//     sql,
//     [],
//     (err) => {
//         if (err) {
//             return console.error(err.message);
//         }
//     }
// )



// const insetData = (sql) => {
//     sql = `INSERT INTO tasks(taskName, startDate, endDate, status) VALUES (?, ? ,?, ?)`;
//     db.run (
//         sql, 
//         []
//     )
// }

//Edit data
// const editData = (sql) => {
//     sql = `UPDATE tasks SET taskName = ?, startDate = ?, endDate = ?, status = ? where taskID = ?`;
//     db.run(sql, [], err => {
//         if(err) {
//             return console.error(err.message);
//         }
//     })
// }

//Delete data
// const deleteData = (sql) => {
//     sql = `DELETE tasks WHERE taskID = ?`
//     db.run(sql, [], err => {
//         if(err) {
//             return console.error(err.message);
//         }
//     })
// }
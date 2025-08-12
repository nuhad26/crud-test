import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aman@1234",
    database:"rentcar_db"
})
app.use(express.json());
app.use(cors())

app.get("/", (req,res)=> {
    res.json("hellooo")
})

app.get("/rentcar", (req,res)=>{
    const q = "SELECT * FROM rentcar"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})
app.get("/rentcar/:id", (req,res)=>{
    const carId = req.params.id;
    const q = "SELECT * FROM rentcar WHERE id = ?";
    db.query(q,[carId],(err,data)=>{
        if(err) return res.json(err)
            return res.json(data[0])
    })
})

app.post("/rentcar", (req,res)=>{
    const q = "INSERT INTO rentcar(carname,model,rate_per_day) VALUES (?)"
    const values = [
        req.body.carname,
        req.body.model,
        req.body.rate_per_day,

    ]
    
    db.query(q,[values], (err,data)=>{
         if(err) return res.json(err)
            return res.json("Car Added Successfully.")
    })
})

app.delete("/rentcar/:id", (req,res)=>{
    const carId = req.params.id;
    const q = "DELETE FROM rentcar WHERE id = ?"

    db.query(q,[carId], (err,data)=>{
      if(err) return res.json(err)
            return res.json("Deleted Successfully.")
    })
})
app.put("/rentcar/:id", (req,res)=>{
    const carId = req.params.id;
    const q = "UPDATE rentcar SET `carname`= ?, `model`= ?, `rate_per_day`= ? WHERE id = ?";

 const values = [
        req.body.carname,
        req.body.model,
        req.body.rate_per_day,
     ];

    db.query(q,[...values,carId], (err,data)=>{
      if(err) return res.json(err)
            return res.json("Updated Successfully.");
    });
});
//

app.get("/customers", (req,res)=>{
    const q = "SELECT * FROM customers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})
app.get("/customers/:id", (req,res)=>{
    const cusId = req.params.id;
    const q = "SELECT * FROM customers WHERE id = ?";
    db.query(q,[cusId],(err,data)=>{
        if(err) return res.json(err)
            return res.json(data[0]);
    });
})

app.post("/customers", (req, res) => {
    const { customername, carname } = req.body;

    const checkCarQuery = "SELECT * FROM rentcar WHERE carname = ?";
    db.query(checkCarQuery, [carname], (err, carData) => {
        if (err) return res.status(500).json({ error: err });

        if (carData.length === 0) {
            return res.status(400).json({ message: "Car name does not exist in rentcar table." });
        }

        const insertQuery = "INSERT INTO customers(customername, carname) VALUES (?, ?)";
        db.query(insertQuery, [customername, carname], (err, data) => {
            if (err) return res.status(500).json({ error: err });
            return res.json({ message: "Added Successfully." });
        });
    });
});

app.delete("/customers/:id", (req,res)=>{
    const cusId = req.params.id;
    const q = "DELETE FROM customers WHERE id = ?"

    db.query(q,[cusId], (err,data)=>{
      if(err) return res.json(err)
            return res.json("Deleted Successfully.")
    })
})
app.put("/customers/:id", (req,res)=>{
    const cusId = req.params.id;
    const q = "UPDATE customers SET  `customername`= ?, `carname`= ?  WHERE id = ?";

 const values = [
        req.body.customername,
        req.body.carname,
     ];

    db.query(q,[...values,cusId], (err,data)=>{
      if(err) return res.json(err)
            return res.json("Updated Successfully.");
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend!")

})
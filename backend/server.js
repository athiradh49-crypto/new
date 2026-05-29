const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://athiradh49_db_user:NU4p4g4cABiM4tyI@athirdh123.4pazwwj.mongodb.net/complaintbox?appName=athirdh123')
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Database connection error:',err));
const complaintSchema = new mongoose.Schema({
    department: String,
    description: String,
    image: String 
});
const Complaint = mongoose.model('Complaint',complaintSchema);
app.post('/complaints', async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        await newComplaint.save();
        res.status(201).json({ message: "Complaint filed successfully!", data: newComplaint});

     } catch (error) {
        res.status(500).json({ message: "failed to save complaint", error: error.message});

     }

});
app.get('/complaints', async (req, res) => {
    try {
        const allComplaints = await Complaint.find();
        res.status(200).json(allComplaints);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch  complaints", error: error.message});

    }

});
app.delete('/complaints/:id', async (req, res) => {
    try {
        await Complaint.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Delete successfully" });

    }catch (error) {
        res.status(500).json({ error: error.message});

    }

});
app.listen(3000, () => {
    console.log(' server is running on port 3000');
});
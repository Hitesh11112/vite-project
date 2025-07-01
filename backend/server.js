import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json(), cors());

const arr = [
    { title: "Buy groceries", description: "Milk, Eggs, Bread", id: "1" },
    { title: "Read a book", description: "Finish Chapter 5", id: "2" },
    { title: "Workout", description: "Leg day at the gym", id: "3" },
    { title: "Call Mom", description: "Weekly catch-up call", id: "4" },
    { title: "Study JS", description: "Learn Promises and Async", id: "5" }
];
const arr1 = [
    { title: "Morning Jog", description: "5km run around park", id: "6" },
    { title: "Water Plants", description: "Don't forget balcony plants", id: "7" },
    { title: "Email Boss", description: "Send weekly report", id: "8" },
    { title: "Fix Bug #42", description: "Frontend crashing issue", id: "9" },
    { title: "Clean Room", description: "Vacuum and organize books", id: "10" }
];
const arr2 = [
    { title: "Cook Dinner", description: "Try pasta recipe", id: "11" },
    { title: "Walk Dog", description: "Evening walk at 6PM", id: "12" },
    { title: "Backup Files", description: "Move to external drive", id: "13" },
    { title: "Write Blog", description: "React hooks deep dive", id: "14" },
    { title: "Meditation", description: "10 min mindfulness", id: "15" }
];
const arr3 = [
    { title: "Learn Node.js", description: "Understand Express basics", id: "16" },
    { title: "Pay Bills", description: "Electricity and water", id: "17" },
    { title: "Call Friend", description: "Wish happy birthday", id: "18" },
    { title: "Laundry", description: "Wash and fold clothes", id: "19" },
    { title: "Update Resume", description: "Add recent project", id: "20" }
];
const arr4 = [
    { title: "Write Tests", description: "Add unit tests", id: "21" },
    { title: "Walk Cat", description: "Yes, really", id: "22" },
    { title: "Plan Trip", description: "Look for places in Manali", id: "23" },
    { title: "Game Night", description: "Play FIFA with cousins", id: "24" },
    { title: "Grocery Run", description: "Buy fruits & snacks", id: "25" }
];
const arr5 = [
    { title: "Practice Typing", description: "10FastFingers test", id: "26" },
    { title: "Sketch Art", description: "Pencil landscape drawing", id: "27" },
    { title: "Learn Git", description: "Branching and merging", id: "28" },
    { title: "Drink Water", description: "8 glasses goal", id: "29" },
    { title: "Clean Desk", description: "Declutter workspace", id: "30" }
];
const arr6 = [
    { title: "Bike Ride", description: "Morning trail ride", id: "31" },
    { title: "Review PR", description: "Check teammate's code", id: "32" },
    { title: "Yoga", description: "Stretching and breathing", id: "33" },
    { title: "Repair Lamp", description: "Fix broken switch", id: "34" },
    { title: "Learn SQL", description: "Write SELECT queries", id: "35" }
];
const arr7 = [
    { title: "Check Emails", description: "Inbox cleanup", id: "36" },
    { title: "Attend Meeting", description: "Project sync at 4 PM", id: "37" },
    { title: "Prepare PPT", description: "Demo slides for team", id: "38" },
    { title: "Join Webinar", description: "Node.js best practices", id: "39" },
    { title: "Groom Pet", description: "Bath and brush", id: "40" }
];
const arr8 = [
    { title: "Meal Prep", description: "Chop and store veggies", id: "41" },
    { title: "Learn React", description: "Component lifecycle", id: "42" },
    { title: "Buy Gift", description: "For sibling’s birthday", id: "43" },
    { title: "Fix CSS", description: "Mobile responsiveness", id: "44" },
    { title: "Write Poem", description: "Theme: Rainy Day", id: "45" }
];
const arr9 = [
    { title: "Practice Piano", description: "20 minutes scales", id: "46" },
    { title: "Team Feedback", description: "Monthly review", id: "47" },
    { title: "Movie Night", description: "Watch Inception", id: "48" },
    { title: "Clean Kitchen", description: "Sink and shelves", id: "49" },
    { title: "Check Analytics", description: "Traffic report", id: "50" }
];
const arr10 = [
    { title: "Make Portfolio", description: "HTML/CSS showcase", id: "51" },
    { title: "Learn Python", description: "Basics to OOP", id: "52" },
    { title: "Fix Typos", description: "Proofread essay", id: "53" },
    { title: "Install VSCode", description: "Setup extensions", id: "54" },
    { title: "Stretch Break", description: "5 min every hour", id: "55" }
];



const arras = [arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10];

app.get('/', (req, res) => {
    res.send("hello world");
});
app.get('/data', (req, res) => {
    const randomNumber = Math.floor(Math.random() * arras.length);
    res.status(200).send(arras[randomNumber]);
});
app.get('/data/:id', (req, res) => {
    const {id} = req.params;
    for (let array of arras) {
        const item = array.find(getItem => getItem.id === id)
        if (item) {
            return res.status(200).json(arras[item]);
        }
    }
    return res.status(404).json({ error: "Item not found" });
});

app.listen(port, () => {
    console.log(`Listening on port Number ${port}`);
});
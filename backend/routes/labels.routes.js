import express from 'express';
import { 
    createAndAdd, 
    createLabel, 
    getAllLabelNotes, 
    deleteLabel, 
    addToMultipleNotes, 
    addOrDeleteIndividual 
} from '../controllers/labels.controllers.js';

const router = express.Router();

// Create a label and add it to a note
router.post('/add', createAndAdd);

// Create a new label
router.post('/create', createLabel);

// Get all notes associated with a specific label
router.get('/notes/:labelID', getAllLabelNotes);

// Delete a label from all notes
router.delete('/delete/:labelID', deleteLabel);

// Add a label to multiple selected notes
router.put('/add-to-multiple/:labelID', addToMultipleNotes);

// Add or remove a label from an individual note
router.put('/toggle-label', addOrDeleteIndividual);

export default router;

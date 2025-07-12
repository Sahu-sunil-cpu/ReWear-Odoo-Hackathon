import express from 'express';
import { 
    addNote, 
    updateNote, 
    createCopy, 
    createSelectedNotesCopy, 
    addOrEditPriority, 
    deletePriority, 
    pinNote, 
    pinSelectedNote, 
    unpinSelectedNote, 
    archiveNote, 
    archiveSelectedNote, 
    editColor, 
    colorToSelectedNotes, 
    allNotes, 
    allPinnedNotes, 
    allArchiveNotes, 
    allBinNotes 
} from '../controllers/notes.controllers.js';
import labelRoute from './labels.routes.js'
import deleteRoute from './delete.routes.js'
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.use('/labels',labelRoute);
router.use('/delete',deleteRoute);

// Create a new note
router.post('/', addNote);

// Update an existing note
router.put('/:noteID', updateNote);

// Create a copy of a specific note
router.post('/copy/:noteID', createCopy);

// Create copies of all selected notes
router.post('/copy-selected', createSelectedNotesCopy); //mm

// Add or remove priority for a note
router.put('/priority/:noteID', addOrEditPriority);

// Remove priority from a note
router.put('/priority/remove/:noteID', deletePriority);

// Pin or unpin a specific note
router.put('/pin/:noteID', pinNote);

// Pin all selected notes
router.put('/pin-selected', pinSelectedNote);

// Unpin all selected notes
router.put('/unpin-selected', unpinSelectedNote);

// Archive or unarchive a note
router.put('/archive/:noteID', archiveNote);

// Archive all selected notes
router.put('/archive-selected', archiveSelectedNote);

// Change color of a specific note
router.put('/color/:noteID', editColor);

// Change color of all selected notes
router.put('/color-selected', colorToSelectedNotes);

// Get all notes
router.get('/all', allNotes);

// Get all pinned notes
router.get('/pinned', allPinnedNotes);

// Get all archived notes
router.get('/archived', allArchiveNotes);

// Get all deleted (bin) notes
router.get('/bin', allBinNotes);

export default router;

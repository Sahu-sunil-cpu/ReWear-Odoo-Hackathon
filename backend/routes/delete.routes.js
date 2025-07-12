import express from "express";
import { 
    addToBinOrRestore, 
    addOrRestoreSelectedNotes, 
    deleteForever, 
    deleteAllBinNotes, 
    deleteForeverSelectedNotes 
} from "../controllers/delete.controllers.js";

const router = express.Router();

// Move a note to bin or restore it
router.put("/bin", addToBinOrRestore);

// Move selected notes to bin or restore them
router.put("/bin/multiple", addOrRestoreSelectedNotes);

// Permanently delete a specific note
router.delete("/permanent",deleteForever);

// Permanently delete all notes in the bin
router.delete("/bin/all", deleteAllBinNotes);

// Permanently delete selected notes from the bin
router.delete("/bin/multiple", deleteForeverSelectedNotes);

export default router;

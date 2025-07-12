import { Notes } from "../models/notes.models.js";



export const addToBinOrRestore = async (req, res) => {
    try {
        const {noteID} = req.body;

        if (!noteID) {
            return res.status(400).json({ error: "Notes id is not provided" });
        }

        // const note = await Notes.findByIdAndUpdate(noteID,{isDeleted:true},{new:true});
        const note = await Notes.findById(noteID);
        
        if(!note){
            return res.status(404).json({error:"Notes not found"});
        }

        note.isDeleted = !note.isDeleted;
        await note.save();

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addToBin controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const addOrRestoreSelectedNotes = async (req, res) => {
    try {
        const {noteID} = req.body;
        const user = req.user;
        if (!noteID) {
            return res.status(400).json({ error: "Notes id is not provided" });
        }

        const selectedNotes = await Notes.find({userID:user._id,select:true});

        if(!selectedNotes){
            return res.status(400).json({error:"No notes selected"});
        }

       const deleteNotes =  selectedNotes.map(async(note)=>{
            // const note = await Notes.findByIdAndUpdate(noteID,{isDeleted:!note.isDeleted},{new:true});
            note.isDeleted = !note.isDeleted;
            await note.save();
            return note;
        })

        return res.status(200).json(deleteNotes);

    } catch (error) {
        console.log("Error in addToBin controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const deleteForever = async (req, res) => {
    try {
        const noteID = req.body;

        if (!noteID) {
            return res.status(400).json({ error: "Notes id is not provided" });
        }

        const note = await Notes.findByIdAndDelete(noteID,{new:true});
        if(!note){
            return res.status(404).json({ error: "Notes not found" });
        }

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addToBin controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const deleteAllBinNotes = async (req, res) => {
    try {

        const user = req.user;

        const notes = await Notes.deleteMany({userID:user._id,isDeleted:true});
        
        console.log("All deleted notes :",notes);
        return res.status(200).json(notes);

    } catch (error) {
        console.log("Error in addToBin controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteForeverSelectedNotes = async (req, res) => {
    try {
        const user = req.user;
        const deletedNotes = await Notes.deleteMany({userID:user._id,select:true,isDeleted:true});
        console.log("deleteForeverSelectedNotes : ",deletedNotes);
        return res.status(200).json(deletedNotes);
    } catch (error) {
        console.log("Error in addToBin controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

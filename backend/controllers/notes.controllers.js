import { Notes } from '../models/notes.models.js';
import validator from 'validator';


export const addNote = async (req, res) => {

    try {
        const { content, title } = req.body;

        const user = req.user;
        const note = new Notes({
            content: content || "",
            title: title || "",
            userID: user._id,
        });

        await note.save();

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateNote = async (req, res) => {

    try {
        const { noteID } = req.params;
        const { content, title } = req.body;

        if (!noteID) {
            return res.status(500).json({ error: "notes Id is not provided" });
        }

        const note = await Notes.findByIdAndUpdate(noteID, { content, title }, { new: true });

        if (!note) {
            return res.status(404).json({ error: "Notes have not found" });
        }
        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in updateNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const createCopy = async (req, res) => {
    try {
        const {noteID} = req.params;

        if (!noteID) {
            return res.status(400).json({ error: "Note id is not provided" });
        }

        const note = await Notes.findById(noteID);

        if (!note) {
            return res.status(404).json({ error: "Note has not found" });
        }

        const newNote = new Notes({
            title: note.title,
            content: note.content,
            userID: note.userID,
            labels: note.labels,
            color: note.color,
            list: note.list
        });
        await newNote.save();
        return res.status(200).json(newNote);

    } catch (error) {
        console.log("Error in createCopy controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const createSelectedNotesCopy = async (req, res) => {
    try {

        const user = req.user;
        const selectedNotes = await Notes.find({userID:user._id, select: true });

        if (!selectedNotes) {
            return res.status(400).json({ error: "No notes selected" });
        }

        const notesCopy = selectedNotes.map(async (note) => {

            const newNote = new Notes({
                title: note.title,
                content: note.content,
                userID: note.userID,
                labels: note.labels,
                color: note.color,
                list: note.list
            });
            await newNote.save();
            // await Notes.findByIdAndUpdate(note._id,{select:false});
            return newNote;
        })

        // const allNotes = await Notes.find({});

        return res.status(200).json(notesCopy);

    } catch (error) {
        console.log("Error in createSelectedNotesCopy controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const addOrEditPriority = async (req, res) => {
    try {
        const { noteID } = req.params;
        const {value} = req.body;

        if (!noteID) {
            return res.status(400).json({ error: "Note id is not provided" });
        }
        if(!validator.isNumeric(value)){
            return res.status(400).json({ error:"Numeric value is required" });
        }

        const note = await Notes.findByIdAndUpdate(noteID, { 'priority.value': value, 'priority.appear': true },{new:true});
        // const note = await Notes.findById(noteID);
        // note.priority.appear = !note

        if (!note) {
            return res.status(400).json({ error: "Note not found" });
        }

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addPriority controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//
export const deletePriority = async (req, res) => {
    try {
        const {noteID} = req.params;

        if (!noteID) {
            return res.status(400).json({ error: "Note id is not provided" });
        }

        const note = await Notes.findByIdAndUpdate(noteID, { 'priority.value': 1, 'priority.appear': false },{new:true});

        if (!note) {
            return res.status(400).json({ error: "Note not found" });
        }

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addPriority controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const pinNote = async (req, res) => {
    try {

        const {noteID} = req.params;

        if (!noteID) {
            return res.status(400).json('Note id is not provided');
        }
        const note = await Notes.findById(noteID);
        if (!note) {
            return res.status(404).json({ error: "Notes not found" });
        }

        note.isPinned = !note.isPinned;
        note.isArchived = false;
        await note.save();

        return res.status(200).json(note);
    } catch (error) {
        console.log("Error in pinNote controller : ", error);
        return res.status(500).json('Internal server error');
    }
}

export const pinSelectedNote = async (req, res) => {
    try {
        const userID = req.user._id;
        const selectedNotes = await Notes.find({userID, select: true });

        if (!selectedNotes) {
            return res.status(400).json({ error: "No notes selected" });
        }

        const pinnedNotes = selectedNotes.map(async (note) => {
            note.isPinned = true;
            note.isArchived = true;
            await note.save();
            return note;
        })
        console.log("pinSelectedNote : ", pinnedNotes);
        return res.status(200).json(pinnedNotes);

    } catch (error) {
        console.log("Error in pinSelectedNote controller : ", error);
        return res.status(500).json('Internal server error');
    }
}
// not in archive
export const unpinSelectedNote = async (req, res) => {
    try {
        const userID = req.user._id;
        const selectedNotes = await Notes.find({userID, select: true });

        if (!selectedNotes) {
            return res.status(400).json({ error: "No notes selected" });
        }

        const pinnedNotes = selectedNotes.map(async (note) => {
            return await Notes.findByIdAndUpdate(note._id, { isPinned: false, isArchived: false }, { new: true });
        })
        console.log("pinSelectedNote : ", pinnedNotes);
        return res.status(200).json(pinnedNotes);

    } catch (error) {
        console.log("Error in pinSelectedNote controller : ", error);
        return res.status(500).json('Internal server error');
    }
}


export const archiveNote = async (req, res) => {
    try {

        const { noteID } = req.body;

        if (!noteID) {
            return res.status(400).json('Note id is not provided');
        }
        const note = await Notes.findById(noteID);

        if (!note) {
            return res.status(404).json({ error: "No notes found" });
        }

        note.isPinned = false;
        note.isArchived = !note.isArchived;
        await note.save();

        return res.status(200).json(note);
    } catch (error) {
        console.log("Error in pinNote controller : ", error);
        return res.status(500).json('Internal server error');
    }
}
export const archiveSelectedNote = async (req, res) => {
    try {
        const userID = req.user._id;
        const selectedNotes = await Notes.find({userID, select: true });
        if (!selectedNotes) {
            return res.status(400).json({ error: "No notes selected" });
        }

        const pinnedNotes = selectedNotes.map(async (note) => {
            // return await Notes.findByIdAndUpdate(note._id,{isArchived:true,isPinned:true},{new:true});
            note.isArchived = !note.isArchived;
            note.isPinned = false;
            await note.save();
        })
        console.log("archiveSelectedNote : ", pinnedNotes);
        return res.status(200).json(pinnedNotes);

    } catch (error) {
        console.log("Error in pinSelectedNote controller : ", error);
        return res.status(500).json('Internal server error');
    }
}

//color

export const editColor = async(req,res)=>{
    try {

        const {noteID} = req.params;
        const {color} = req.body;

        if(!noteID){
            return res.status(400).json({error:"Note id is not provided"});
        }

        if(!color){
            return res.status(400).json({error:"Color not choosen"});
        }

        const note = await Notes.findByIdAndUpdate(noteID,{color:color},{new:true});

        if(!note){
            return res.status(404).json({error:"Note not found"});
        }

        return res.status(200).json(note);
        
    } catch (error) {
        console.log("Error in editColor controller :",error);
        return res.status(500).json({error:"Internal server error"});
    }
}

export const colorToSelectedNotes = async(req,res)=>{
    try {
        const userID = req.user._id;
        const {color} = req.body;

        if(!color){
            return res.status(400).json({error:"Color not choosen"});
        }
        const selectedNotes = await Notes.find({userID,select:true});
        if(!selectedNotes){
            return res.status(400).json({error:"No notes selected"});
        }

        const coloredNotes = selectedNotes.map(async(note)=>{
            // return await Notes.findByIdAndUpdate(note._id,{color:color},{new:true});
            note.color = color;
            await note.save();
            return note;
        })

        // const allNotes = await Notes.find({});

        return res.status(200).json(coloredNotes);
        
    } catch (error) {
        console.log("Error in setColor controller :",error);
        return res.status(500).json({error:"Internal server error"});
    }
}

// get all notes
// get all pinned notes
//get all archive notes
// get all bin notes

// export const allNotes = async (req, res) => {
//     try {
//         const userID = req.user._id;
//         const {type} = req.params;
//         let typeArr = ["isPinned","isArchive","isDeleted"];
//         let notes;

//         if(!typeArr.includes(type.toString())){
//             return res.status().json("Query type din't match");
//         }else{

//             notes = await Notes.find({userID}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
//         }

//          notes = await Notes.find({userID,type:true}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
       
//          return res.status(200).json(notes);

//     } catch (error) {
//         console.log("Error in createLabel controller : ", error);
//         return res.status(500).json({ error: "Internal server error" })
//     }
// }

export const allNotes = async (req, res) => {
    try {
        const userID = req.user._id;
        const notes = await Notes.find({userID}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
         return res.status(200).json(notes);
    } catch (error) {
        console.log("Error in allPinnedNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}
export const allPinnedNotes = async (req, res) => {
    try {
        const userID = req.user._id;
        const notes = await Notes.find({userID,isPinned:true}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
         return res.status(200).json(notes);
    } catch (error) {
        console.log("Error in allPinnedNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

export const allArchiveNotes = async (req, res) => {
    try {
        const userID = req.user._id;
        const notes = await Notes.find({userID,isArchived:true}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
        return res.status(200).json(notes);
    } catch (error) {
        console.log("Error in allArchiveNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

export const allBinNotes = async (req, res) => {
    try {
        const userID = req.user._id;
        const notes = await Notes.find({userID,isDeleted:true}).populate({path:"labels"}).populate({path:"userID",select:['-password']});
        return res.status(200).json(notes);
    } catch (error) {
        console.log("Error in allBinNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

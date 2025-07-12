import { Label } from "../models/labels.models.js";
import { Notes } from "../models/notes.models.js";

export const createAndAdd = async (req, res) => {
    try {
        const user = req.user;
        const { name, noteID } = req.body;

        if (!name || !noteID) {
            return res.status(400).json({ error: "Label name not provided" });
        }
        if (!noteID) {
            return res.status(400).json({ error: "Note id is not provided" });
        }

        const labelExist = await Label.find({ name: name, userID: user._id });
        if (labelExist) {
            return res.status(400).json({ error: "Label already exist" });
        }

        const newLabel = new Label({
            name: name,
            userID: user._id
        });
        await newLabel.save();

        // const note = await Notes.findById(noteID);
        // if(!note){
        //     return res.status(404).json({error:"Notes not found"});
        // }
        // if(note.labels.includes())

        const notes = await Notes.findOneAndUpdate({ userID: user._id, _id: noteID }, { labels: { $push: newLabel._id } });

        console.log("createAndAdd :", notes);
        return res.status(200).json(notes)
    } catch (error) {
        console.log('Error in createAndAdd labels controllers : ', error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const createLabel = async (req, res) => {
    try {

        const user = req.user;
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Lavel name is not provided" });
        }

        const labelExist = await Label.find({ name: name, userID: user._id });
        if (labelExist) {
            return res.status(400).json({ error: "Label already exist" });
        }

        const newLabel = new Label({
            name: name,
            userID: user._id
        });
        await newLabel.save();

        return res.status(200).json(newLabel);

    } catch (error) {
        console.log("Error in createLabel controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

export const getAllLabelNotes = async (req, res) => {
    try {
        const user = req.user;
        const { labelID } = req.params; // Extract labelID correctly

        if (!labelID) {
            return res.status(400).json({ error: "labelID not provided" });
        }

        // Fetch all notes where 'labels' array contains the given labelID
        const allNotes = await Notes.find({
            userID: user._id,
            labels: labelID // No need for $in since we want exact match inside array
        }).populate({path:'labels'}).populate({path:'userID',select:['-password']});

        return res.status(200).json(allNotes); // Return the fetched notes

    } catch (error) {
        console.error("Error in getAllNotes label controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


export const deleteLabel = async (req, res) => {
    try {
        const { user, params: { labelID } } = req;

        if (!labelID) {
            return res.status(400).json({ error: "Label ID is required" });
        }

        const notes = await Notes.find({ userID: user._id });

        if(notes.length === 0){
            return res.status(400).json({error:"No notes has intented label"});
        }

        const modifiedNotes = await Promise.all(notes.map(async (note) => {
            if (note.labels.includes(labelID)) {
                note.labels = note.labels.filter(label => label !== labelID);
                await note.save();
            }
            return note;
        }));

        console.log("Deleted label, modified notes: ", modifiedNotes);
        return res.status(200).json(modifiedNotes);

    } catch (error) {
        console.error("Error in deleteLabel controller: ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// export const deleteIndividual = async (req, res) => {
//     try {

//         const user = req.user;
//         const { noteID, labelID } = req.body;
//         if (!noteID || !labelID) {
//             return res.status().json({ error: "Note or label id has not been provided" });
//         }

//         const note = await Notes.find({ userID: user._id, _id: noteID });
//         note.labels = note.labels.filter((id) => id !== labelID);
//         await note.save();

//         return res.status(200).json(note);

//     } catch (error) {
//         console.log("Error in deleteIndividual controller : ", error);
//         return res.status(500).json({ error: "Internal server error" })
//     }
// }

export const addToMultipleNotes = async (req, res) => {
    try {

        const user = req.user;
        const { labelID } = req.params;
        const notes = await Notes.find({ userID: user._id, select: true });
        if (notes.length !== 0) {
            return res.status(400).json({ error: "No notes selected" });
        }

        const modifiedNote = notes.map(async (note) => {
            // const existLabel = note.labels.includes(existLabel);
            if (!note.labels.includes(labelID)) {
                note.labels.push(labelID);
            }
            await note.save();
            return note;
        })

        console.log("Label added to selected notes :", modifiedNote);
        return res.status(200).json(modifiedNote);

    } catch (error) {
        console.log("Error in addToMultipleNotes controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}

export const addOrDeleteIndividual = async (req, res) => {
    try {
        const user = req.user;
        const { noteID, labelID } = req.body;

        if (!noteID || !labelID) {
            return res.status().json({ error: "Note or label id has not been provided" });
        }

        const note = await Notes.findOne({ userID: user._id, _id: noteID });

        if(!note.labels.includes(labelID)){
            note.labels.push(labelID);
        }else{
            note.labels = note.labels.filter((id) => id !== labelID);
        }
        await note.save();

        return res.status(200).json(note);

    } catch (error) {
        console.log("Error in addOrDeleteIndividual controller : ", error);
        return res.status(500).json({ error: "Internal server error" })
    }
}












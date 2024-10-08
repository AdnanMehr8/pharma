// const express = require("express");
// const router = express.Router();
// const Batch = require("../models/Batch");

// // Create a new batch record
// router.post("/record", async (req, res) => {
//   console.log("Received data structure:", JSON.stringify(req.body, null, 2));
//   // const { weighingRecordRaw, weighingRecordCoating } = req.body;

//   // // Validate that at least 10 entries exist (optional)
//   // if (weighingRecordRaw.length < 10 || weighingRecordCoating.length < 10) {
//   //   return res.status(400).json({ message: 'Both weighingRecordRaw and weighingRecordCoating must contain at least 10 entries.' });
//   // }
//   try {
//     const batch = new Batch(req.body);
//     await batch.save();
//     console.log("Saved data:", batch);
//     res.status(201).json(batch);
//     console.log(batch);
//   } catch (error) {
//     console.error("Error saving batch:", error.message);
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all batch records
// router.get("/records", async (req, res) => {
//   try {
//     const batches = await Batch.find();
//     res.json(batches);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a specific batch record
// router.get("/record/:id", async (req, res) => {
//   try {
//     const batch = await Batch.findById(req.params.id);
//     if (!batch) return res.status(404).json({ message: "Batch not found" });
//     res.json(batch);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update a batch record
// router.patch("/record/:id", async (req, res) => {
//   try {
//     const { id } = req.params; // This should capture the ID correctly
//     console.log("Request ID:", id);

//     const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!batch) return res.status(404).json({ message: "Batch not found" });
//     res.json(batch);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a batch record
// router.delete("/record/:id", async (req, res) => {
//   try {
//     const batch = await Batch.findByIdAndDelete(req.params.id);
//     if (!batch) return res.status(404).json({ message: "Batch not found" });
//     res.json({ message: "Batch deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Batch = require("../models/Batch");
const Mixing = require("../models/Mixing"); 
const Compression = require("../models/Compression");
const Coating = require("../models/Coating"); 



// Create a new batch record
router.post("/record", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batch = new Batch(req.body);
    await batch.save();
    console.log("Saved data:", batch);
    res.status(201).json(batch);
  } catch (error) {
    console.error("Error saving batch:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batch records
router.get("/records", async (req, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batch record
router.get("/record/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) return res.status(404).json({ message: "Batch not found" });
    res.json(batch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batch record
router.patch("/record/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batch) return res.status(404).json({ message: "Batch not found" });
    res.json(batch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batch record
router.delete("/record/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);
    if (!batch) return res.status(404).json({ message: "Batch not found" });
    res.json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new mixing record
router.post("/mixing", async (req, res) => {
  console.log("Received mixing data structure:", JSON.stringify(req.body, null, 2));
  try {
    const mixing = new Mixing(req.body);
    await mixing.save();
    console.log("Saved mixing data:", mixing);
    res.status(201).json(mixing);
  } catch (error) {
    console.error("Error saving mixing data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all mixing records
router.get("/mixings", async (req, res) => {
  try {
    const mixings = await Mixing.find().populate('performedBy checkedBy authorizedBy');
    res.json(mixings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific mixing record
router.get("/mixing/:id", async (req, res) => {
  try {
    const mixing = await Mixing.findById(req.params.id).populate('performedBy checkedBy authorizedBy');
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json(mixing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a mixing record
router.patch("/mixing/:id", async (req, res) => {
  try {
    const mixing = await Mixing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json(mixing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a mixing record
router.delete("/mixing/:id", async (req, res) => {
  try {
    const mixing = await Mixing.findByIdAndDelete(req.params.id);
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json({ message: "Mixing record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new compression record
router.post("/compression", async (req, res) => {
  console.log("Received compression data structure:", JSON.stringify(req.body, null, 2));
  try {
    const compression = new Compression(req.body);
    await compression.save();
    console.log("Saved compression data:", compression);
    res.status(201).json(compression);
  } catch (error) {
    console.error("Error saving compression data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all compression records
router.get("/compressions", async (req, res) => {
  try {
    const compressions = await Compression.find().populate('performedBy checkedBy authorizedBy');
    res.json(compressions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific compression record
router.get("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findById(req.params.id).populate('performedBy checkedBy authorizedBy');
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json(compression);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a compression record
router.patch("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json(compression);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a compression record
router.delete("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findByIdAndDelete(req.params.id);
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json({ message: "compression record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new coating record
router.post("/coating", async (req, res) => {
  console.log("Received coating data structure:", JSON.stringify(req.body, null, 2));
  try {
    const coating = new Coating(req.body);
    await coating.save();
    console.log("Saved coating data:", coating);
    res.status(201).json(coating);
  } catch (error) {
    console.error("Error saving coating data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all coating records
router.get("/coatings", async (req, res) => {
  try {
    const coatings = await Coating.find().populate('performedBy checkedBy authorizedBy');
    res.json(coatings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific coating record
router.get("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findById(req.params.id).populate('performedBy checkedBy authorizedBy');
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json(coating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a coating record
router.patch("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json(coating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a coating record
router.delete("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findByIdAndDelete(req.params.id);
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json({ message: "coating record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

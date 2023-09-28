
const Visitor = require("../model/Visiter");

// Function to retrieve and return the visitor count
exports.getVisitorCount = async (req, res) => {
  try {
    const countData = await Visitor.findOne();
    res.json({ count: countData.count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
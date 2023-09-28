
const Visit = require("../model/Visiter");

// Function to retrieve and return the visitor count
exports.increment = async (req, res) => {
    try {
        await Visit.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true });
        res.status(200).json({ message: 'Visit count updated successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};



exports.getCount = async (req, res) => {
  try {
    const visit = await Visit.findOne({});
    const count = visit ? visit.count : 0;
    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

}
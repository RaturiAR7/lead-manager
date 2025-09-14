import Lead from "../models/leadModel.js";

///Add Lead
export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

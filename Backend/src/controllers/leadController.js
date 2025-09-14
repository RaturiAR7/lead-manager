import Lead from "../models/leadModel.js";

///Create Lead
export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json(error);
  }
};
////Get Leads List
export const getLeadsList = async (req, res) => {
  try {
    const { email } = req.body;
    const leadsList = await Lead.find({
      email,
    });
    res.status(200).json(leadsList);
  } catch (error) {
    res.status(500).json(error);
  }
};

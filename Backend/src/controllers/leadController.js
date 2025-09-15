import Lead from "../models/leadModel.js";
import { leadSchema } from "../lib/validation.js";

///Create Lead
export const createLead = async (req, res) => {
  try {
    // Validate request body
    const isValid = leadSchema.safeParse(req.body); // throws error if invalid
    if (!isValid.success) {
      res.status(400).json({
        message: isValid.error._zod.def[0].message,
      });
      return;
    }
    const lead = await Lead.create(isValid.data);
    res.status(201).json(lead);
  } catch (error) {
    return res.status(400).json(error);
  }
};
////Get Leads List
export const getLeadsList = async (req, res) => {
  try {
    const leadsList = await Lead.find();
    res.status(200).json(leadsList);
  } catch (error) {
    res.status(500).json(error);
  }
};
////Update Lead
export const updateLead = async (req, res) => {
  try {
    const id = req.params?.id;
    const lead = await Lead.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json(error);
  }
};

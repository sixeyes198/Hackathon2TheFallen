import {
  allFallens,
  searchForFallen,
  editFallen,
  enterFallen,
} from "../models/DataModels.js";

export const _allFallens = async (req, res) => {
  try {
    const response = await allFallens();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ messege: "cant find users" });
  }
};

export const _searchForFallen = async (req, res) => {
  try {
    const response = await searchForFallen(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ messege: "Cant find your search" });
  }
};

export const _editFallen = async (req, res) => {
  const { first_name, last_name, age, content } = req.body;
  try {
    const response = await editFallen(first_name, last_name, age, content);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ messege: "cant edit this information" });
  }
};

export const _enterFallen = async (req, res) => {
  const { first_name, last_name, age, content } = req.body;
  try {
    const response = await enterFallen(first_name, last_name, age, content);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ messege: "Cant create new content" });
  }
};

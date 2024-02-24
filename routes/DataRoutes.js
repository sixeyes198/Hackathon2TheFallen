import express from "express";

import {
  _allFallens,
  _editFallen,
  _enterFallen,
  _searchForFallen,
} from "../contollers/dataControllers.js";

const router = express.Router();

router.get("/fallen", _allFallens);
router.put("/fallen/:id", _editFallen);
router.get("/fallen/:id", _searchForFallen);
router.post("/fallen", _enterFallen);

export default router;

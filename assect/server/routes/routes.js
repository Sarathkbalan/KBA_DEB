import { Router } from "express";
const router = Router();
import { find, findOne, create, findOneAndUpdate, findOneAndDelete } from "../models/courses";

router.get("/courses", async (req, res) => {
  const details = await find({});
  res.json(details);
});

router.get("/courses/:id", async (req, res) => {
  const courseId = req.params.id;
  const details = await findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});

router.post("/courses", async (req, res) => {
  try {
    const data = req.body;
    const result = await create(data);
    res.status(201).json("Added course successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("error while adding data");
  }
});

router.put("/courses/:id", async (req, res) => {
  const data = req.body;
  const courseId = req.params.id;
  try {
    const result = await findOneAndUpdate(
      { courseId: courseId },
      data,
    );
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("Course updated successfully");
  } catch (error) {
    res.status(500).send("error updating data");
  }
});

router.delete("/courses/:id", async (req, res) => {
  const courseId = req.params.id;
  try {
    const result = await findOneAndDelete({ courseId: courseId });
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("Course deleted successfully");
  } catch (error) {
    res.status(500).send("error deleting data");
  }
});

export default router;

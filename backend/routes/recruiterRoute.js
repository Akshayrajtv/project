import express from "express";

import {
    registerRecruiterController,
    loginRecruiterController,
    changePasswordStudentController,
    updateRecruitRequest,
    updateProfileRecruiterController,
    getProfileRecruiterController,
    getAllRecruiters,
    matchRequirements,
    getCompaniesWithMatchedStudents,
    getCompanyWithMatchedStudents,
    getStudentById,
} from "../controllers/recruiterController.js";

const router = express.Router();

router.post("/recruiterRegister", registerRecruiterController);
router.post("/recruiterLogin", loginRecruiterController);
router.get("/recruiterProfile/:id", getProfileRecruiterController);
router.put("/recruiterProfile/:id", updateProfileRecruiterController);
router.put("/recruiterRequest/:id", updateRecruitRequest);
// router.post("/students/:studentId/notifications",requestController)
router.get("/getall", getAllRecruiters);
router.post("/recruitermatch/:id", matchRequirements);
router.get("/companies", getCompaniesWithMatchedStudents);
router.get("/companies/:id", getCompanyWithMatchedStudents);
router.get("/students/:id", getStudentById);
router.put("/recruiterPassword/:id", changePasswordStudentController);
export default router;

import students from "../models/studentModel.js";

export const registerStudentController = async (req, res,next) => {
    try {
        console.log("hyy")
        const { studentCollegeID, cgpa } = req.body;
        console.log(studentCollegeID, cgpa)
        // Check if the student with the provided student ID already exists
        const existingStudent = await students.findOne({ studentCollegeID });
        if (existingStudent) {
            return res.status(409).json({ error: "Student already exists" });
        }

        // Create a new student instance
        const student = new students({
            username:"",
            password:"",
            email:"",
            studentCollegeID:req.body.studentCollegeID,
            phone:"",
            address:"",
            cgpa:req.body.cgpa,
            skills:[""],
            department:"",
            backlogs:0,
            profilePicture:"",
            cv:"",
            isAdmin:false
        });

        // Save the student to the database
        await student.save();

        res.status(201).json({ message: "Student registered successfully" });
    } catch (error) {
        next(error); 
        // res.status(500).json({ error: "An error occurred" });
    }
};

export const loginStudentController = async (req, res) => {
    try {
        const { studentCollegeID, password } = req.body;

        // Check if the student with the provided student ID exists
        const student = await students.findOne({ studentCollegeID });
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        // Check if the provided password is correct
        if (password !== student.password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful", student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export const getProfileStudentController = async (req, res) => {
    try {
        const studentID  = req.params.id;

        // Find the student with the provided student ID
        const student = await students.findById(studentID);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json( {student} );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export const updateProfileStudentController = async (req, res) => {
    try {
        const  studentID  = req.params.id;
        const { username, email, phone, address } = req.body;

        // Find the student with the provided student ID
        const student = await students.findById(studentID);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        // Update the student profile
        student.username = username;
        student.email = email;
        student.phone = phone;
        student.address = address;

        // Save the updated student profile
        await student.save();

        res.status(200).json({
            message: "Profile updated successfully",
            student,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export const uploadExcelStudentController = async (req, res) => {
    try {
        // Process the uploaded Excel file and register students
        // ...

        res.status(200).json({
            message: "Registration from Excel file completed",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export const changePasswordStudentController = async (req, res,next) => {
    try {
        const  studentID  = req.params.id;
        const { currentPassword, newPassword } = req.body;

        // Find the student with the provided student ID
        const student = await students.findById(studentID);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        // Check if the current password is correct
        if (currentPassword !== student.password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Update the password
        student.password = newPassword;

        // Save the updated password
        await student.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        next(err);
        // res.status(500).json({ error: "An error occurred" });
    }
};

export const addProfileDetailsStudentController = async (req, res) => {
    try {
        const  studentID  = req.params.id;
        const { address } = req.body;

        // Find the student with the provided student ID
        const student = await students.findById(studentID);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        // Update the student profile with additional details
        student.address = address;

        // Save the updated student profile
        await student.save();

        res.status(200).json({
            message: "Profile details added successfully",
            student,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

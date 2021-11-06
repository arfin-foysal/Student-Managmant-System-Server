const upload = require("../Helpers/imageUplode");
const student = require("../Schemas/StudentSchema");

// this is student info add function start


const addStudent = async(req, res) => {
  const {
    name,
    studentId,
    email,
    number,
    session,
    department,
    religion,
    dob,
    Gender,
  } = req.body;

  try {
    const studentPush = await new student({
      name,
      studentId,
      email,
      number,
      session,
      department,
      religion,
      images:req.file.images,
      dob,
      Gender,
    });
    studentPush.save();
    res.send("Informaton added successfully");
  } catch (error) {
    res.send("Something wrong");
  }
};

// this is student info add function end

// this is student all info get function start

const allStudentGet = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.json(allStudents);
  } catch (error) {
    res.send("Requst Something wrong");
  }
};

// this is student all info get function send

// this is student singal info get function start

const singalStudentInfo = async (req, res) => {
    const id=req.params.id
  try {
    studentInfo = await student.findById(id);
    res.json(studentInfo);
  } catch (error) {
    res.send("Requst Something wrong");
  }
};

// this is student singal info get function end

// this is student singal info delete function start

const deleteStudent = async (req, res) => {
    const id=req.params.id
  try {
    await student.findOneAndDelete(id);
    res.send("Student Information Delete successfully ");
  } catch (error) {
    res.send("Requst Something wrong");
  }
};

// this is student singal info delete function end

// this is student singal info edit function start

const editStudentInfo = async (req, res) => {
  const {
    name,
    studentId,
    email,
    number,
    session,
    department,
    religion,
    images,
    dob,
    Gender,
  } = req.body;
    try {
        const id=req.params.id
    const UpdateInfo = await student.findOneAndUpdate(id ,
      {
        $set: {
          name,
          studentId,
          email,
          number,
          session,
          department,
          religion,
          images,
          dob,
          Gender,
        },
      },
      { new: true }
    );
    res.json(UpdateInfo);
  } catch (error) {
    res.send("Requst Something wrong");
  }
};

// this is student singal info delete function end

module.exports = {
  addStudent,
  allStudentGet,
  singalStudentInfo,
  deleteStudent,
  editStudentInfo,
};

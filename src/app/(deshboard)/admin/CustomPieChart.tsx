'use client';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import toast from "react-hot-toast";

const CustomPieChart: React.FC = () => {
  const [data, setData] = useState([
      { id: 1, value: 10, label: "Contact" },
      { id: 2, value: 10, label: "Career" },
      { id: 3, value: 10, label: "Admission" },
      { id: 4, value: 10, label: "Employer" },
      { id: 5, value: 10, label: "Exam" },
      { id: 6, value: 10, label: "University" },
      { id: 7, value: 10, label: "Popup" },
      { id: 8, value: 10, label: "Form" },
    ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [
            axios.get("/api/contact"),
            axios.get("/api/admission"),
            axios.get("/api/exam"),
            axios.get("/api/career"),
            axios.get("/api/employer"),
            axios.get("/api/university"),
            axios.get("/api/popup"),
            axios.get("/api/form")
        ];
        const [contact, admission, exam, career, employer, university, popup, form]  = await Promise.all(promises);

        const filterLast24Hours = (data: any) => {
          const now = new Date();
          const midnightIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
          midnightIST.setHours(0, 0, 0, 0);
          return data.filter((item: any) => {
            const itemDateIST = new Date(new Date(item.createdAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            return itemDateIST >= midnightIST;
          });
        };
        

        const filteredContact = filterLast24Hours(contact.data.data);
        const filteredCareer = filterLast24Hours(career.data.data);
        const filteredAdmission = filterLast24Hours(admission.data.data);
        const filteredEmployer = filterLast24Hours(employer.data.data);
        const filteredExam = filterLast24Hours(exam.data.data);
        const filteredUniversity = filterLast24Hours(university.data.data);
        const filteredPopup = filterLast24Hours(popup.data.data);
        const filteredForm = filterLast24Hours(form.data.data);

        setData([
          { id: 1, value: filteredContact.length, label: "Contact" },
          { id: 2, value: filteredCareer.length, label: "Career" },
          { id: 3, value: filteredAdmission.length, label: "Admission" },
          { id: 4, value: filteredEmployer.length, label: "Employer" },
          { id: 5, value: filteredExam.length, label: "Exam" },
          { id: 6, value: filteredUniversity.length, label: "University" },
          { id: 7, value: filteredPopup.length, label: "Popup" },
          { id: 8, value: filteredForm.length, label: "Form" }
        ]);
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={300}
    />
  );
};

export default CustomPieChart;

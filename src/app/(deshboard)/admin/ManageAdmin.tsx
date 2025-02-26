'use client'
import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";



function PieChartCustom() {
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
        const [contact, admission, exam, career, employer, university, popup, form] = await Promise.all(promises);
        setData([
          { id: 1, value: contact.data.data.length, label: "Contact" },
          { id: 2, value: career.data.data.length, label: "Career" },
          { id: 3, value: admission.data.data.length, label: "Admission" },
          { id: 4, value: employer.data.data.length, label: "Employer" },
          { id: 5, value: exam.data.data.length, label: "Exam" },
          { id: 6, value: university.data.data.length, label: "University" },
          { id: 7, value: popup.data.data.length, label: "Popup" },
          { id: 8, value: form.data.data.length, label: "Form" }
        ]);
      } catch (error: any) {

        toast.error(error);
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
      height={300} />
  );
}

export default PieChartCustom;

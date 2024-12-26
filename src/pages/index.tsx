import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

const IndexPage = () => {
  const [names, setNames] = useState({ person1: "", person2: "" });
  const [values, setValues] = useState([
    { name: "Trust", person1: 50, person2: 50 },
    { name: "Communication", person1: 50, person2: 50 },
    { name: "Independence", person1: 50, person2: 50 },
    { name: "Empathy", person1: 50, person2: 50 },
    { name: "Growth", person1: 50, person2: 50 },
  ]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNames({ ...names, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (
    index: number,
    person: "person1" | "person2",
    value: number
  ) => {
    const updatedValues = [...values];
    updatedValues[index][person] = value;
    setValues(updatedValues);
  };

  const radarData = {
    labels: values.map((v) => v.name),
    datasets: [
      {
        label: names.person1 || "Person 1",
        data: values.map((v) => v.person1),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: names.person2 || "Person 2",
        data: values.map((v) => v.person2),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Value Gap Visualizer</h1>

      <div style={{ marginBottom: "2rem" }}>
        <label>
          Name 1:
          <input
            type="text"
            name="person1"
            value={names.person1}
            onChange={handleNameChange}
            style={{ marginLeft: "1rem", marginRight: "2rem" }}
          />
        </label>
        <label>
          Name 2:
          <input
            type="text"
            name="person2"
            value={names.person2}
            onChange={handleNameChange}
            style={{ marginLeft: "1rem" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        {values.map((value, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <h3>{value.name}</h3>
            <label>
              {names.person1 || "Person 1"}:
              <input
                type="range"
                min="0"
                max="100"
                value={value.person1}
                onChange={(e) =>
                  handleSliderChange(index, "person1", Number(e.target.value))
                }
                style={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              {value.person1}
            </label>
            <label>
              {names.person2 || "Person 2"}:
              <input
                type="range"
                min="0"
                max="100"
                value={value.person2}
                onChange={(e) =>
                  handleSliderChange(index, "person2", Number(e.target.value))
                }
                style={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              {value.person2}
            </label>
          </div>
        ))}
      </div>

      <div>
        <Radar data={radarData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default IndexPage;

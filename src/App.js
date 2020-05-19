import React, { useState } from "react";
import { CheckBox, Divider, Input, SelectDropdown } from "react-ian-form-kit";
import { Card, Container } from "./styles";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob] = useState({ label: "Select...", value: 0 });
  const jobOptions = [
    { label: "Front-End", value: 1 },
    { label: "Back-End", value: 2 },
    { label: "Analista de Negócios", value: 3 },
    { label: "Full-Stack", value: 4 },
  ];
  const skillList = [
    { id: 1, label: "NodeJs" },
    { id: 2, label: "Angular" },
    { id: 3, label: "ReactJS" },
    { id: 4, label: "React-Native" },
    { id: 5, label: "Ionic" },
    { id: 6, label: "Flutter" },
    { id: 7, label: "PHP" },
    { id: 8, label: "Wordpress" },
  ];
  const [skills, setSkills] = useState([skillList[1].id]);

  function selectJob(item) {
    setJob(item);
  }

  function toggleSkill(id) {
    setSkills(
      skills.includes(id)
        ? skills.filter((option) => option !== id)
        : [...skills, id]
    );
  }
  return (
    <Container>
      <Card>
        <h2>USING A UI FORM KIT</h2>
        <form>
          <Divider />
          <h3>Personal informations</h3>
          <Input
            type="text"
            name="Name"
            placeholder="Type your name"
            value={name}
            setValue={setName}
            textColor="#fafafa"
            color="#03a9f4"
            floatingLabel={true}
          />
          <Input
            type="email"
            name="E-mail"
            placeholder="Type your e-mail"
            value={email}
            setValue={setEmail}
            textColor="#fafafa"
            color="#03a9f4"
            floatingLabel={true}
          />
          <Input
            type="password"
            name="Password"
            placeholder="Type your password"
            value={password}
            setValue={setPassword}
            textColor="#fafafa"
            color="#03a9f4"
            floatingLabel={true}
          />
          <Divider />
          <h3>Professional informations</h3>
          <div style={{ width: "98%" }}>
            <SelectDropdown
              name="Job"
              value={job.label}
              options={jobOptions}
              onChange={selectJob}
              borderColor="#03a9f4"
              floatingLabel={true}
            />
          </div>
          {skillList.map((item) => (
            <CheckBox
              name="checkbox"
              key={item.id}
              value={item.label}
              label={item.label}
              checked={skills.includes(item.id)}
              onChange={() => toggleSkill(item.id)}
              color="#03a9f4"
            />
          ))}
        </form>
      </Card>
    </Container>
  );
}

export default App;

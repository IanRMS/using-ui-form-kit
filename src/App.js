import React, { useState } from "react";
import {
  Button,
  CheckBox,
  Divider,
  Input,
  Modal,
  Radio,
  SelectDropdown,
  Switch,
  SwitchContainer,
  SwitchInfo,
} from "react-ian-form-kit";
import { Card, Container, FlexContainer, InputContainer } from "./styles";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState({ label: "Select...", value: 0 });
  const [employee, setEmployee] = useState(false);
  const jobOptions = [
    { label: "Front-End", value: 1 },
    { label: "Back-End", value: 2 },
    { label: "Analista de Negócios", value: 3 },
    { label: "Full-Stack", value: 4 },
    { label: "Estagiário", value: 5 },
  ];
  const skillList = [
    { id: 2, label: "Angular" },
    { id: 3, label: "ReactJS" },
    { id: 4, label: "React-Native" },
    { id: 5, label: "Ionic" },
    { id: 6, label: "Flutter" },
  ];
  const [skills, setSkills] = useState([skillList[0].id]);
  const xpOptions = [
    { id: 1, value: "1 year or less" },
    { id: 2, value: "1 year - 2 years" },
    { id: 3, value: "2 year - 4 years" },
    { id: 4, value: "4 year or more" },
  ];
  const [xpTime, setTime] = useState(xpOptions[0].id);

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(true);
    }, 3000);
  }
  return (
    <Container>
      <Card>
        <h2>USING A UI FORM KIT</h2>
        <form onSubmit={handleSubmit}>
          <Divider />
          <h3>Personal informations</h3>
          <FlexContainer>
            <InputContainer>
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
            </InputContainer>
            <InputContainer>
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
            </InputContainer>
          </FlexContainer>
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
          <div style={{ width: "100%", maxWidth: 728, minWidth: 290 }}>
            <SelectDropdown
              name="Job"
              value={job.label}
              options={jobOptions}
              onChange={selectJob}
              borderColor="#03a9f4"
              floatingLabel={true}
            />
          </div>
          <div style={{ width: "100%" }}>
            <h4>- Select your skills</h4>
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
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "45%" }}>
              <h4>- Currently employed?</h4>
              <SwitchContainer>
                <Switch
                  name="switch1"
                  value={employee}
                  checked={employee}
                  onChange={() => setEmployee(!employee)}
                  color="#03a9f4"
                />
                <SwitchInfo color="#fafafa">
                  {employee ? "Yes" : "No"}
                </SwitchInfo>
              </SwitchContainer>
            </div>
            <div style={{ width: "45%" }}>
              <h4>- Experience in job</h4>
              {xpOptions.map((item) => (
                <Radio
                  name="radio"
                  key={item.id}
                  label={item.value}
                  value={item.value}
                  checked={xpTime === item.id}
                  onChange={() => setTime(Number(item.id))}
                  color="#03a9f4"
                />
              ))}
            </div>
          </div>
          <Button
            fullSize={true}
            onLoading={loading}
            loadingLabel="Carregando abestado..."
            backgroundColor="#03a9f4"
            type="submit"
          >
            Finish
          </Button>
        </form>
      </Card>
      <Modal
        title="Modal Title"
        open={open}
        setOpen={setOpen}
        closeOutsideClick={true}
        message="A mensagem do bagulho vai aqui"
      >
        <Button
          backgroundColor="#ff8f00"
          fullSize={true}
          onClick={() => setOpen(false)}
          color="#424242"
        >
          Close modal
        </Button>
      </Modal>
    </Container>
  );
}

export default App;

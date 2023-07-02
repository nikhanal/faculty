"use client";

import Card from "../../components/Card";
import img1 from "../../../public/img.jpg";
import { styled } from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 10%;
  padding-bottom: 0.3em;
  color: #333333;
  border-bottom: 5px solid #7177ff;
`;

export const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 2em 0;
`;
export default function Home() {
  const facultyMembers = [
    {
      id: 1,
      Name: "Er. Shanta Maharjan",
      Designation: "Associate Professor",
      Responsibility: "Head, EMIS Unit",
      Image: img1,
    },
    {
      id: 2,
      Name: "Ms. Dhana Maya Thapa",
      Designation: "Assistant Professor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 3,
      Name: "Er. Janardan Bhatta",
      Designation: "Assistant Professor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 4,
      Name: "Er. Binod Sapkota",
      Designation: "Assistant Professor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 5,
      Name: "Er. Kiran Chandra Dahal",
      Designation: "Assistant Professor",
      Responsibility: "Head of the Department",
      Image: img1,
    },
    {
      id: 6,
      Name: "Er. Rama Bastola",
      Designation: "Assistant Professor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 7,
      Name: "Er. Shikhar Bhattarai",
      Designation: "Assistant Professor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 8,
      Name: "Er. Pradip Prasad Sah",
      Designation: "Assistant Professor",
      Responsibility: "Deputy Head of the Department",
      Image: img1,
    },
    {
      id: 9,
      Name: "Er. Dinesh Baniya Kshatri",
      Designation: "Assistant Professor",
      Responsibility: "M.Sc. Program Coordinator",
      Image: img1,
    },
    {
      id: 10,
      Name: "Er. Umesh Kanta Ghimire",
      Designation: "Teaching Assistant",
      Responsibility: "Deputy Head of the Department",
      Image: img1,
    },
    {
      id: 11,
      Name: "Er. Ganesh Kumal",
      Designation: "Assistant Instructor",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 12,
      Name: "Mr. Subodh Kumar Ravi",
      Designation: "Assistant Instructor",
      Responsibility: null,
      Image: img1,
    },
  ];
  return (
    <Wrapper>
      <Title>Faculty</Title>

      <CardsContainer>
        {facultyMembers.map((member) => {
          return <Card detail={member} />;
        })}
      </CardsContainer>
    </Wrapper>
  );
}

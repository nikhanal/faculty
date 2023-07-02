"use client";

import Card from "../../components/Card";
import img1 from "../../../public/img.jpg";
import { Wrapper, Title, CardsContainer } from "../faculty/page";

export default function Home() {
  const StaffMembers = [
    {
      id: 1,
      Name: "Mr. Nabin Lamichhane",
      Designation: "Technical Assistant",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 2,
      Name: "Ms. Kabira Khadka",
      Designation: "Lab Technician Electronics",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 3,
      Name: "Mr. Tika Ram Maharjan",
      Designation: "Office Helper",
      Responsibility: null,
      Image: img1,
    },
    {
      id: 4,
      Name: "Mr. Minod Pode",
      Designation: "Office Helper",
      Responsibility: null,
      Image: img1,
    },
  ];

  return (
    <Wrapper>
      <Title>Staff</Title>
      <CardsContainer>
        {StaffMembers.map((member) => {
          return <Card detail={member} />;
        })}
      </CardsContainer>
    </Wrapper>
  );
}

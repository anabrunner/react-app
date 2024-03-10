import { Container } from "@mantine/core";
import LandingInfo from "../../components/misc/LandingInfo";

const Landing = () => {
  return (
    <>
      <Container>
        <h1>Welcome to Photo Cloud</h1>
        <h2>The website for photographers to upload and share their work with other photographers</h2>
      </Container>
      <Container>
        <LandingInfo 
          title={"Share"} 
          imgName={"shareExample.png"} 
          text={"Post your photos and share your work"}
        />
        <LandingInfo
          title={"Organize"}
          imgName={"postExample.png"}
          text={"Customise your folders and organize your work by categories of your choice."}
        />
        <LandingInfo
          title={"Connect"}
          imgName={"categoryExample.png"}
          text={"Meet other photographers and share your passion"}
        />
      </Container>
    </>
  );
};

export default Landing;

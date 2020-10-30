import React from "react";
import { Box, Heading, Image, Text } from "grommet";
import Profile from "../../../assets/images/professional-profile.jpg";

class Home extends React.Component {
  render() {
    return (
      <Box elevation="medium" round="medium" className="page">
        {/* About Me */}
        <Box direction="row" justify="between">
          <Box direction="row" width="100%">
            <Image className="profile" src={Profile} alt="profile-image" />
            <Box pad="16px" align="start" justify="center">
              <Heading level={5}>Hafiz Muhammad Farooq</Heading>
              <Heading level={6} color="gray">
                Senior Software Engineer
              </Heading>
            </Box>
          </Box>
          <Box pad="16px" align="end" width="100%">
            <Heading level={6} color="gray">
              +92-313-404-4978
            </Heading>
            <Heading level={6} color="gray">
              farooq@we-over-i.com
            </Heading>
          </Box>
        </Box>

        <Box direction="row" justify="between" margin={{ top: "32px" }}>
          <Box align="start" width="100%">
            {/* Education */}
            <Box datatype="education">
              <Heading level={5}>Education</Heading>
              <Box datatype="graduation" margin={{ top: "8px" }}>
                <Heading level={6} color="primary">
                  Punjab University College of Information Technology (PUCIT)
                </Heading>
                <Heading level={6}>
                  BS Software Engineering <br />
                  <strong>CGPA: 3.72 (82%)</strong>
                </Heading>
                <Text color="gray" size="small">
                  August, 2017
                </Text>
              </Box>
              <Box datatype="intermediate" margin={{ top: "8px" }}>
                <Heading level={6} color="primary">
                  Government Islamia College Civil Lines Lahore
                </Heading>
                <Heading level={6}>
                  F.SC Pre-Engineering <br />
                  <strong>Grade: A+ (83%)</strong>
                </Heading>
                <Text color="gray" size="small">
                  August, 2013
                </Text>
              </Box>
            </Box>

            {/* Specialist */}
            <Box datatype="skills" margin={{ top: "32px" }}>
              <Heading level={5}>Specialist</Heading>
              <Box datatype="specialist">
                <Text color="gray" size="small">
                  Cloud and SaaS products. Cloud Computing, Enterprises
                  Applications, Portfolios, Admin Portals, Remote and Outsourced
                  Development.
                </Text>
              </Box>
            </Box>

            {/* Skills */}
            <Box datatype="skills" margin={{ top: "32px" }}>
              <Heading level={5}>Skills</Heading>
              <Box datatype="skill-set" margin={{ top: "8px" }}>
                <Heading level={6} color="primary">
                  Languages, Tools, Technologies and Frameworks
                </Heading>
                <Text color="gray" size="small">
                  ✓ PHP ✓ JavaScript ✓ Python ✓ C++ ✓ Java ✓ Typescript ✓ NodeJs
                  ✓ Google Maps API ✓ Reactjs ✓ Angularjs ✓ Angular8 ✓ RxJs ✓
                  Redux ✓ Redux-sagas ✓ Material UI ✓ Grommet ✓ Vuetify ✓ ES6 ✓
                  VueJs ✓ NuxtJs ✓ Django REST framework ✓ Dotnet Entity
                  Framework ✓ Laravel 5 ✓ Codeigniter
                </Text>
              </Box>
            </Box>
            {/* Softwares */}
            <Box datatype="softwares" margin={{ top: "24px" }}>
              <Heading level={5}>Softwares</Heading>
              <Box datatype="softwares" margin={{ top: "8px" }}>
                <Text size="small" color="gray">
                  Visual Studio Code, Atom, Sublime, Android Studio, Selenium,
                  JMeter
                </Text>
              </Box>
            </Box>
          </Box>
          <Box align="start" width="100%" style={{ paddingLeft: "16px" }}>
            {/*Experience  */}
            <Box datatype="experience">
              <Heading level={3}>Experience</Heading>
              <Text
                size="small"
                color="gray"
                textAlign="start"
                style={{
                  fontWeight: "800",
                  marginBottom: "8px",
                }}
              >
                I am currently working for
                <strong style={{ color: "#007fff" }}> We > I </strong> as a
                Principal Software Engineer and We > I had enabled me to work
                directly with international startups. Details of the startups
                are mentioned below.
              </Text>
              <Box datatype="monadd" margin={{ top: "8px" }}>
                <Heading level={6} color="primary">
                  Monadd
                  <Text
                    size="small"
                    style={{ fontWeight: "800", margin: "0 8px" }}
                    color="black"
                  >
                    -
                  </Text>
                  <Text
                    size="small"
                    style={{ fontWeight: "800" }}
                    color="black"
                  >
                    Frontend Engineer
                  </Text>
                </Heading>
                <Text size="small" color="gray">
                  May, 2020 - present
                </Text>
                <Heading level={6} color="primary" margin={{ top: "12px" }}>
                  “Monadd allows you to notify or cancel your utility providers,
                  local council, gym, subscription services and more in less
                  than 5 minutes.”
                </Heading>
                <Box direction="row">
                  <Text className="colorDot" style={{ width: "32px" }} />
                  <Text color="black" size="small">
                    Working with UI/UX designers team and startup founder to
                    help in design the seamless users journeys, users onboarding
                    flow, users dashboard, and returning users journey.
                  </Text>
                </Box>
                <Box direction="row">
                  <Text className="colorDot" style={{ width: "26px" }} />
                  <Text color="black" size="small">
                    Working with senior Backend Engineer to communicate Frontend
                    of the application with Backend by translating Backend APIs
                    into code.
                  </Text>
                </Box>
              </Box>

              <Box datatype="demnok" margin={{ top: "16px" }}>
                <Heading level={6} color="primary">
                  Doctory
                  <Text
                    size="small"
                    style={{ fontWeight: "800", margin: "0 8px" }}
                    color="black"
                  >
                    -
                  </Text>
                  <Text
                    size="small"
                    style={{ fontWeight: "800" }}
                    color="black"
                  >
                    Fullstack Engineer
                  </Text>
                </Heading>
                <Text size="small" color="gray">
                  Apr, 2020 – present
                </Text>
                <Heading
                  level={6}
                  width="100%"
                  color="primary"
                  margin={{ top: "12px" }}
                >
                  “Providing access to quality healthcare for the underserved.”
                </Heading>
                <Box direction="row" justify="between" margin={{ top: "8px" }}>
                  <Text className="colorDot" style={{ width: "25%" }} />
                  <Text color="black" size="small">
                    Working directly with the startup founder, building
                    Doctory’s web app on Laravel (PHP) with the goal of making
                    it as easy as possible for users to find relevant Doctors.
                    For this purpose, we’ve also used custom search algorithms
                    which allow users to search for Doctors through names,
                    specializations and even generic health terms (like stomach
                    ache). We’ve also implemented a fuzzy search algorithm to
                    cater for difficult specialization names in case a user gets
                    the spelling wrong. Doctory is hosted on AWS and uses
                    several services including DynamoDB, S3, Cloudfront and
                    Lambda, all managed by us.
                  </Text>
                </Box>
              </Box>

              <Box datatype="airlift" margin={{ top: "16px" }}>
                <Heading level={6} color="primary">
                  Airlift
                  <Text
                    size="small"
                    style={{ fontWeight: "800", margin: "0 8px" }}
                    color="black"
                  >
                    -
                  </Text>
                  <Text
                    size="small"
                    style={{ fontWeight: "800" }}
                    color="black"
                  >
                    Backend Engineer
                  </Text>
                </Heading>
                <Text size="small" color="gray">
                  Dec, 2019 - Feb, 2020
                </Text>
                <Heading
                  level={6}
                  width="100%"
                  color="primary"
                  margin={{ top: "12px" }}
                >
                  “An app-based decentralized urban mass transit startup”
                </Heading>
                <Box direction="row" justify="between" margin={{ top: "8px" }}>
                  <Text className="colorDot" style={{ width: "40px" }} />
                  <Text color="black" size="small">
                    Worked with Android Engineer to build a responsive Admin
                    Portal for Airlift PTS (Pilot Training Software). - Graph
                    Analytics, - Pilots Course progress, - Training check-ins, -
                    Test Scoring, Results Monitoring.
                  </Text>
                </Box>
                <Box direction="row" justify="between" margin={{ top: "8px" }}>
                  <Text className="colorDot" style={{ width: "54px" }} />
                  <Text color="black" size="small">
                    When I was working with the airlift team, they were facing a
                    challenge which comes; when the pilot onboard passengers
                    into the bus. Then I built a seamless solution in
                    cross-platform mobile apps for onboarding their passengers
                    on airlift buses using P2P connections technique.
                  </Text>
                </Box>
              </Box>
              <Box datatype="demnok" margin={{ top: "16px" }}>
                <Heading level={6} color="primary">
                  Demnok Restoration
                  <Text
                    size="small"
                    style={{ fontWeight: "800", margin: "0 8px" }}
                    color="black"
                  >
                    -
                  </Text>
                  <Text
                    size="small"
                    style={{ fontWeight: "800" }}
                    color="black"
                  >
                    Fullstack Engineer
                  </Text>
                </Heading>
                <Text size="small" color="gray">
                  Feb, 2019 – June, 2019
                </Text>
                <Heading
                  level={6}
                  width="100%"
                  color="primary"
                  margin={{ top: "12px" }}
                >
                  “Your go-to place for car care.”
                </Heading>
                <Box direction="row" justify="between" margin={{ top: "8px" }}>
                  <Text className="colorDot" style={{ width: "44px" }} />
                  <Text color="black" size="small">
                    I built a super customized POS and Inventory Management
                    System for Demnok on ElectronJS with the ability to work
                    offline as well as online by automatically syncing its data
                    to a cloud database (hosted on AWS) whenever it connected to
                    the internet.
                  </Text>
                </Box>
                <Box direction="row" justify="between" margin={{ top: "8px" }}>
                  <Text className="colorDot" style={{ width: "40px" }} />
                  <Text color="black" size="small">
                    Demnok had a lot of different modules used by a variety of
                    different departments so i did an extensive research with
                    Demnok’s employees to figure out how to create the most
                    intuitive user interface for each user segment.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Home;

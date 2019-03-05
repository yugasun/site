import React from 'react'
import { Flex } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import { TeamMemberImageCard } from 'src/fragments'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import austin from 'src/assets/images/team/austin.png'
import nick from 'src/assets/images/team/nick.png'
import ganesh from 'src/assets/images/team/ganesh.png'
import bill from 'src/assets/images/team/bill.png'
import philip from 'src/assets/images/team/philip.png'
import eslam from 'src/assets/images/team/eslam.png'
import alex from 'src/assets/images/team/alex.png'
import jeremy from 'src/assets/images/team/jeremy.png'
import steve from 'src/assets/images/team/steve.png'
import sebastian from 'src/assets/images/team/sebastian.png'
import andrea from 'src/assets/images/team/andrea.png'
import andre from 'src/assets/images/team/andre.png'
import eric from 'src/assets/images/team/eric.png'
import daniel from 'src/assets/images/team/daniel.png'
import maciej from 'src/assets/images/team/maciej-skierkowski.jpg'
import kristin from 'src/assets/images/team/kristin.jpg'
import verne from 'src/assets/images/team/verne.jpg'

const getLastName = name => name.split(' ').pop()

const leaders = [
  { image: austin, name: 'Austen Collins', position: 'Founder & CEO' },
  { image: nick, name: 'Nick Gottlieb', position: 'VP of Growth' },
  {
    image: ganesh,
    name: 'Ganesh Radhakrishnan',
    position: 'VP of Engineering',
  },
  { image: bill, name: 'Bill Fine', position: 'VP of Product' },
  {
    image: maciej,
    name: 'Maciej Skierkowski',
    position: 'Director of Product Management',
  },
  {
    image: verne,
    name: 'Verne Lindner',
    position: 'Director of UX/UI',
  },
]

const teamMembers = [
  { image: philip, name: 'Philipp Müns', position: 'Framework Core Developer' },
  { image: eslam, name: 'Eslam Hefnawy', position: 'Framework Core Developer' },
  { image: alex, name: 'Alex DeBrie', position: 'Lead Pythonista' },
  { image: jeremy, name: 'Jeremy Coffield', position: 'Platform Architect' },
  {
    image: steve,
    name: 'Steve Westergaard',
    position: 'Senior Full Stack Engineer',
  },
  { image: sebastian, name: 'Sebastian Borza', position: 'Software engineer' },

  {
    image: kristin,
    name: 'Kristin Roche',
    position: 'HR Coordinator/Recruitment Coordinator',
  },
  {
    image: andrea,
    name: 'Andrea Passwater',
    position: 'Lead Content Strategist',
  },
  { image: andre, name: 'André Pires', position: 'Lead Growth Designer' },
  { image: eric, name: 'Eric Scher', position: 'Enterprise Account Executive' },
  { image: daniel, name: 'Daniel Schep', position: 'Software Engineer' },
].sort((object1, object2) =>
  getLastName(object1.name).localeCompare(getLastName(object2.name))
)

const OurTeam = () => (
  <AppContainer>
    <Flex flexDirection='column'>
      <Flex justifyContent='center' mt={[3, 3, 5, 6]} mb={[0, 0, 1, 2]}>
        <TitleWithIcon>Our Team</TitleWithIcon>
      </Flex>
      <Flex flexWrap='wrap' justifyContent='center'>
        {[...leaders, ...teamMembers].map(({ image, name, position }) => (
          <TeamMemberImageCard
            key={name}
            image={image}
            name={name}
            position={position}
          />
        ))}
      </Flex>
    </Flex>
  </AppContainer>
)

export default OurTeam

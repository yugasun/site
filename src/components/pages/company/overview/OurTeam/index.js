import React from 'react'
import { Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { Heading } from 'src/fragments/DesignSystem'
import { TeamMemberImageCard } from 'src/fragments'
import austin from 'src/assets/images/team/austin.png'
import nick from 'src/assets/images/team/nick.png'
import ganesh from 'src/assets/images/team/ganesh.png'
import bill from 'src/assets/images/team/bill.jpg'
import philipp from 'src/assets/images/team/philipp.jpg'
import gareth from 'src/assets/images/team/gareth.jpg'
import eslam from 'src/assets/images/team/eslam.jpg'
import alex from 'src/assets/images/team/alex.jpg'
import jeremy from 'src/assets/images/team/jeremy.jpg'
import steve from 'src/assets/images/team/steve.jpg'
import maciej from 'src/assets/images/team/maciej.jpg'
import kristin from 'src/assets/images/team/kristin.jpg'
import verne from 'src/assets/images/team/verne.jpg'
import aj from 'src/assets/images/team/aj.jpg'
import chris from 'src/assets/images/team/chris.jpg'
import mariusz from 'src/assets/images/team/mariusz.png'
import sandesh from 'src/assets/images/team/sandesh.jpg'
import rowell from 'src/assets/images/team/rowell.jpg'
import pravin from 'src/assets/images/team/pravin.jpg'
import mike from 'src/assets/images/team/mike.png'
import fernando from 'src/assets/images/team/fernando.png'

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
  { image: philipp, name: 'Philipp Müns', position: 'Framework Core Developer' },
  { image: eslam, name: 'Eslam Hefnawy', position: 'Senior Software Engineer' },
  { image: alex, name: 'Alex DeBrie', position: 'Engineering Manager' },
  { image: jeremy, name: 'Jeremy Coffield', position: 'Platform Architect' },
  {
    image: steve,
    name: 'Steve Westergaard',
    position: 'Senior Full Stack Engineer',
  },
  {
    image: kristin,
    name: 'Kristin Roche',
    position: 'People Operations Manager',
  },
  { image: gareth, name: 'Gareth McCumskey', position: 'Solutions Architect' },
  { image: aj, name: 'AJ Stuyvenberg', position: 'Senior Platform Engineer' },
  {
    image: chris,
    name: 'Chris McLeod',
    position: 'Senior Full Stack Engineer',
  },
  {
    image: mariusz,
    name: 'Mariusz Nowak',
    position: 'Senior Software Engineer, Open Source Tools',
  },
  {
    image: sandesh,
    name: 'Sandesh Devaraju',
    position: 'Senior Software Engineer',
  },
  {
    image: rowell,
    name: 'Rowell Belen',
    position: 'Senior Platform Engineer',
  },
  {
    image: pravin,
    name: 'Pravin Daryani',
    position: 'Senior Growth Engineer',
  },
  {
    image: mike,
    name: 'Mike Hujet',
    position: 'Enterprise Account Executive',
  },
  {
    image: fernando,
    name: 'Fernando Medina Corey',
    position: 'Solutions Architect',
  }
].sort((object1, object2) =>
  getLastName(object1.name).localeCompare(getLastName(object2.name))
)

const OurTeam = () => (
  <AppContainer>
    <Flex flexDirection='column'>
      <Flex justifyContent='center' mt={[3, 3, 5, 6]} mb={[0, 0, 1, 2]}>
        <Heading.h2>Our Team</Heading.h2>
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

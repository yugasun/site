import React from 'react'
import { Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import AutoScrollList from './AutoScrollList'

const renderContents = contents => (
  <React.Fragment>
    {contents.map((content, index) => (
      <P key={index} m={0}>
        {content}
      </P>
    ))}
  </React.Fragment>
)

const comparisonData = [
  {
    title: 'Serverless Code of Conduct',
    body: renderContents([
      'All attendees, speakers, sponsors, and volunteers at all Serverless events are required to agree with the following code of conduct. Local organizers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.',
    ]),
  },
  {
    title: 'Need Help?',
    body: renderContents([
      'Feel free to reach out to Serverless staff with any issues as well at community@serverless.com.  Further contacts for local facilities and authorities are in the section Contacts at the end of this document.',
    ]),
  },
  {
    title: 'The Quick Version',
    body: renderContents([
      'All Serverless events, whether organized, promoted, or sponsored by Serverless, are dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Any and all staff, local organizers, speakers and attendees violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the Serverless.',
    ]),
  },
  {
    title: 'The Less Quick Version',
    body: renderContents([
      <React.Fragment key='lessQuickVersion'>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability,physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
        <br />
        <br />
        Users asked to stop any harassing behavior are expected to comply
        immediately.
        <br />
        <br />
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualized images, activities, or other
        material. Booth staff (including volunteers) should not use sexualized
        clothing, uniforms, costumes, or otherwise create a sexualized
        environment.
        <br />
        <br />
        If a participant engages in harassing behavior, the conference
        organizers may take any action they deem appropriate, including warning
        the offender or expulsion from the conference with no refund.
        <br />
        <br />
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact the local organizer.
        <br />
        <br />
        You can report any issues or violations anonymously at
        community@serverless.com.
        <br />
        <br />
        We can't follow up an anonymous report with you directly, but we will
        fully investigate it and take whatever action is necessary to prevent a
        recurrence.
        <br />
        <br />
        Your local organizer will be happy to help users contact venue security
        or local law enforcement, provide escorts, or otherwise assist those
        experiencing harassment to feel safe for the duration of the event. We
        value your attendance.
        <br />
        <br />
        We expect participants to follow these rules at all events.
      </React.Fragment>,
    ]),
  },
  {
    title: 'Additional Contacts',
    body: renderContents([
      <React.Fragment key='lessQuickVersion'>
        Email address for organizers:
        <br />
        Phone number for conference organizers:
        <br />
        Phone number venue:
        <br />
        Local law enforcement: 911 or
        <br />
        Local sexual assault hotline:
        <br />
        Local emergency and non-emergency medical: 911 or
        <br />
        Local Cab Company:
      </React.Fragment>,
    ]),
  },
]

const ComparisonsScrollList = () => (
  <Box width={1} mt={[5]} pb={[0, 0, 0, 0, 1]}>
    <AutoScrollList listData={comparisonData} />
  </Box>
)

export default ComparisonsScrollList

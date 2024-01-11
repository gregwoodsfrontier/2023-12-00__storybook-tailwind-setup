import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RsvpPage = () => {
  return (
    <>
      <Metadata title="RSVP" />

      <h1>RsvpPage</h1>
      <p>
        Find me in <code>./web/src/pages/RsvpPage/RsvpPage.tsx</code>
      </p>
      <p>
        My default route is named <code>rsvp</code>, link to me with `
        <Link to={routes.rsvp()}>Rsvp</Link>`
      </p>
    </>
  )
}

export default RsvpPage

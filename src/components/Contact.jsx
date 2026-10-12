import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Section from './Section'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" intro="Open to conversations about backend roles and interesting projects. Email is the fastest way to reach me." className="bg-deep/40">
      <a
        href={`mailto:${profile.email}`}
        className="break-all font-display text-3xl font-bold text-snow underline decoration-rhodo decoration-4 underline-offset-8 transition hover:text-rhodo sm:text-5xl"
      >
        {profile.email}
      </a>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li className="flex items-center gap-3"><FiPhone className="text-glacier" aria-hidden="true" /> {profile.phone}</li>
        <li className="flex items-center gap-3"><FiMapPin className="text-glacier" aria-hidden="true" /> {profile.location}</li>
        <li><a className="flex items-center gap-3 hover:text-snow" href={profile.github} target="_blank" rel="noreferrer"><FiGithub className="text-glacier" aria-hidden="true" /> GitHub</a></li>
        {profile.linkedin && (
          <li><a className="flex items-center gap-3 hover:text-snow" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin className="text-glacier" aria-hidden="true" /> LinkedIn</a></li>
        )}
        <li><a className="flex items-center gap-3 hover:text-snow" href={`mailto:${profile.email}`}><FiMail className="text-glacier" aria-hidden="true" /> Send a message</a></li>
      </ul>
    </Section>
  )
}

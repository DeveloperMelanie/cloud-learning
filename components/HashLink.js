import { Link } from 'react-scroll'

export default function HashLink({ to, children, ...props }) {
    return (
        <Link
            href={`#${to}`}
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            {...props}
        >
            {children}
        </Link>
    )
}

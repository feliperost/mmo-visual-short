import Link from 'next/link';

export default function Sidebar() {
    return (
        <>
        <div>
        <Link href={`/`}>Game Logo</Link>

            <Link href={`/about`}>My Account</Link>
            <Link href={`/download`}>Download</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/community`}>Community</Link>
            <Link href={`/news`}>News</Link>
            <Link href={`/events`}>Event Schedule</Link>
            <Link href={`/support`}>Support</Link>

        </div>
    </>
)
    

  }
import Link from 'next/link';

export default function Sidebar() {
    const sidebarItems = [
        {
            title: 'My Account',
            link: '/account'
        },
        {
            title: 'Download',
            link: '/download'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Community',
            link: '/community'
        },
        {
            title: 'News',
            link: '/news'
        },
        {
            title: 'Event Schedule',
            link: '/events'
        },
        {
            title: 'Support',
            link: '/support'
        },
    ]
    return (
        <>
        <div className='@apply w-[200px] bg-[#3a3a3a] flex flex-col items-center p-2.5'>
            <div className='@apply w-[150px]'>
                <Link href={`/`}>Game Logo</Link>
            </div>
            
            <ul className='@apply list-none w-full p-0'>
                {sidebarItems.map((item, index)=>(
                    <li className='@apply mx-0 my-2.5' key={index}>
                        <Link className='@apply text-white no-underline block text-center border bg-[#444] p-[5px] border-solid border-[#555] hover:bg-[#666]' href={item.link}>{item.title}</Link>
                    </li>
                    ))}
            </ul>
        </div>
    </>
)  
}
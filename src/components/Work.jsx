import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Qui assumenda harum maiores quisquam ut accusantium. Sapiente inventore dignissimos quae ipsum saepe. Eos laudantium numquam sint quia consectetur quo et.'
    },
    {
        year: 2021,
        title: 'NodeJS Developer',
        duration: '1 Years',
        details: 'Qui assumenda harum maiores quisquam ut accusantium. Sapiente inventore dignissimos quae ipsum saepe. Eos laudantium numquam sint quia consectetur quo et.'
    },
    {
        year: 2022,
        title: 'UI/UX Designer',
        duration: '2 Years',
        details: 'Qui assumenda harum maiores quisquam ut accusantium. Sapiente inventore dignissimos quae ipsum saepe. Eos laudantium numquam sint quia consectetur quo et.'
    },
    {
        year: 2023,
        title: 'React Developer',
        duration: '3 Years',
        details: 'Qui assumenda harum maiores quisquam ut accusantium. Sapiente inventore dignissimos quae ipsum saepe. Eos laudantium numquam sint quia consectetur quo et.'
    }
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details} 
                />
            ))}
        </div>
    );
}
 
export default Work;
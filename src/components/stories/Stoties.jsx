import React from 'react';
import stories from '.';
import Story from './Story';

const Stoties = () => {

    // const [stories, setStories] = useState([]);

    // useEffect(() => {
    //     const suggestions = [...Array(4)].map((_, i) => ({
    //         avatar: faker.image.avatar(),
    //         userName: faker.internet.userName(),
    //         photo: faker.phone.imei,
    //         id: i
    //     }));

    //     setStories(suggestions)
    // }, [])
    

    return (
        <div className='storis'>
            {
                stories.map((profile) => {
                   return <Story key={profile.id} avatar={profile.img} userName={profile.name} />
                })
            }
        </div>
    )
}

export default Stoties
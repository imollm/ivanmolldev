import React, { useCallback } from 'react'
import { profile } from '../../assets/json/profile.json'
import { ProfileInfo, ProfileSoftSkills, ProfileHardSkills } from 'src/models/IProfile'
import HardSkillsIcons from '@profile/HardSkillsIcons'

const Profile: React.FC = () => {
    const title: string = '{ "name": "Ivan Moll" }'
    const subtitle: string = 'Software Engineer'
    const myProfile: ProfileInfo = profile.mySelf
    const myHardSkills: ProfileHardSkills = profile.hardSkills
    const mySoftSkills: ProfileSoftSkills = profile.softSkills

    const handleOnCompleted = useCallback(
        (iconName) => console.log(`${iconName} successfully loaded`),
        []
    );

    const handleIconError = useCallback((err) => console.error(err.message), []);

    return (
        <section className='flex flex-col items-center w-full pb-10'>
            <div className='w-[50%]'>
                <div className='text-center text-zinc-700 py-10'>
                    <h1 className='text-5xl font-bold'>
                        {title}
                    </h1>
                    <h4 className='text-3xl mt-5'>
                        {subtitle}
                    </h4>
                </div>
                <div className='grid grid-cols-2 gap-4 pt-20'>
                    <div className='bg-white rounded col-span-2 p-8'>
                        <div className='flex flex-col text-2xl'>
                            {myProfile.title}
                            <div className='text-gray-400 text-sm italic'>
                                {myProfile.subtitle}
                            </div>
                        </div>
                        <p className='my-5'>
                            {myProfile.content}
                        </p>
                        <p className=''>
                            {myProfile.footer}
                        </p>
                    </div>
                    <div className='bg-white rounded p-8'>
                        <div className='flex flex-col text-2xl'>
                            {mySoftSkills.title}
                            {
                                mySoftSkills.subtitle ?
                                    `<div className='text-gray-400 text-sm italic'>${mySoftSkills.subtitle}</div>`
                                    : ''
                            }
                        </div>
                        <div className=''>
                            <ul className='list-disc'>
                                {
                                    mySoftSkills.content.map((item, index) => {
                                        return (
                                            <li key={index} className='pl-3 pt-3'>
                                                <span className='font-bold italic'>{item.value}:</span>
                                                <span className='font-normal'> {item.description}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='bg-white rounded p-8'>
                        <div className='flex flex-col text-2xl'>
                            {myHardSkills.title}
                            {
                                myHardSkills.subtitle ?
                                    `<div className='text-gray-400 text-sm italic'>${myHardSkills.subtitle}</div>`
                                    : ''
                            }
                        </div>
                        <div className=''>
                            <HardSkillsIcons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
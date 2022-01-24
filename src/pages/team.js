import React from 'react';
import { Tab } from '@headlessui/react';
import {teamDetails} from '../assets/teamDetails.json';

export default function Team() {
    let data = teamDetails.reverse();
   
    return (
    <div className="w-ful h-90v px-2">
        <h1 className='text-3xl font-semibold p-3 md:pl-9 m-3 text-center md:text-left'>The Team</h1>
        <Tab.Group>
            <Tab.List className="flex max-w-3xl overflow-auto p-1 mx-auto bg-gray rounded-xl">
                {data.map((d) => (
                    <Tab
                        key={d.year}
                        className={({ selected }) =>
                        'w-full px-5 py-2.5 text-sm leading-5 font-medium text-white rounded-lg ' + 
                        (selected
                            ? 'bg-white shadow text-gray'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'                
                        )
                        }
                    >
                        {d.year}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-2 max-w-xs mx-auto text-center max-h-70v overflow-auto border-2 border-gray bg-gray text-white rounded-lg">
                {data.map((d) => (
                    <Tab.Panel key={d.year}>
                        <ul>
                            {d.team.map((p) => (
                                <li key={p.name} className="relative p-2 rounded-md hover:underline">
                                    <h3 className="text-sm font-medium leading-5">
                                        {p.name}
                                    </h3>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-md"/>
                                </li>
                            ))}
                        </ul>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    </div>
    );
}


import React, { useState } from 'react';
import Image from 'next/image'
import logo_IMA from "../public/logo_IMA.png"
import { Tab } from '@headlessui/react'
import PrevisionComponent from '../components/prevision'
import Mapbox from '../components/mapbox';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const clientBoard = () => {

    return (<>
        <div className=" w-full px-5 md:px-20 pb-10">


            <div className="relative z-10 flex items-end justify-between pt-4 lg:pt-20 pb-6 border-b border-gray-200">
                <div className='w-full flex items-end '>
                    <div className='hidden md:block'>
                        <Image
                            src="/logo_IMA.png"
                            alt="Logo IMA"
                            width={250}
                            height={70}

                        />
                    </div>


                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Bonjour !</h1>
                        <h1 className="text-xl font-medium tracking-tight text-gray-900">Bienvenue sur votre plateforme PréCollab, un outil IMA / IMH.</h1>

                    </div>
                </div>
            </div>

            <Tab.Group >
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 md:w-1/2 w-full mt-5">
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        Temps réel
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        En prévision
                    </Tab>


                </Tab.List>
                <Tab.Panels className="border-4 border-dashed border-gray-200 p-4 rounded-lg  mt-6 ">


                    <Tab.Panel>
                        <Mapbox />
                    </Tab.Panel>




                    <Tab.Panel>
                        <PrevisionComponent />


                    </Tab.Panel>



                </Tab.Panels>
            </Tab.Group>





        </div>
    </>)
};

export default clientBoard;
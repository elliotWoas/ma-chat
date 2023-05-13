import {ChatBubbleOvalLeftEllipsisIcon, Cog8ToothIcon, PhoneIcon, PlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import React from 'react';
import {Outlet} from 'react-router-dom'


const Container = () => {
    return (
            <div className="h-screen w-screen relative bg-gray-900 overflow-hidden">
                <Outlet/>
                <nav className="bg-gray-800 absolute bottom-0 block w-full">
                    <div className="flex justify-between">
                        <div className="flex justify-around w-full">
                            <div className="flex flex-col justify-center items-center text-white">
                                <UsersIcon className="h-8 w-8"/>
                                <p>contacts</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-white">
                                <PhoneIcon className="h-8 w-8"/>
                                <p>calls</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col justify-center items-center bg-purple-600 rounded-full px-2 py-2 -translate-y-10">
                                <PlusIcon className="h-12 w-12"/>
                            </div>
                        </div>

                        <div className="flex justify-around w-full">
                            <div className="flex flex-col justify-center items-center text-white">
                                <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-white"/>
                                <p>chat</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-white">
                                <Cog8ToothIcon className="h-8 w-8 text-white"/>
                                <p>settings</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    );
};

export default Container;
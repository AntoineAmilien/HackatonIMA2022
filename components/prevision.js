import React, { useState } from 'react';

const prevision = () => {

    const [validDateInput, setValidDateInput] = useState(false);
    const [validDate, setvalidDate] = useState(false);

    return (
        <>

            <div className='flex row space-x-5 items-end'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Quelle date voulez vous provisionner ?</span>
                    </label>
                    <input type="date" min="2022-06-26" max="2022-09-26" onChange={(date) => setValidDateInput(date.target.value)} class="input input-bordered w-full max-w-xs" />
                </div>
                <button class="btn btn-outline btn-primary btn" onClick={() => { console.log(validDate); setvalidDate(validDateInput) }}>provisionner</button>
            </div>

            {validDate ? <>            <div className='w-full flex justify-center mt-8'>
                <div class="stats ">

                    <div class="stat">
                        <div class="stat-title">Collaborateurs nécessaires</div>
                        <div class="title-font font-medium sm:text-4xl text-3xl text-gray-900">124</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Collaborateurs prévus</div>
                        <div class="title-font font-medium sm:text-4xl text-3xl text-gray-900">112</div>
                    </div>

                </div>
            </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                                <p class="leading-relaxed">Nombre de sinistres</p>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                                <p class="leading-relaxed">Nombre de departements impactés</p>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                                <p class="leading-relaxed">Personnes morales</p>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                                <p class="leading-relaxed">Entreprises</p>
                            </div>
                        </div>
                    </div>
                </section></> : <></>

            }





        </>
    );
};

export default prevision;
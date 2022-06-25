import React, { useState } from 'react';
import jsonDatePicker from "../public/jsonDatePicker.json"

const Prevision = () => {


    const [validDateInput, setValidDateInput] = useState(false);

    const [objAfficher, setObjAfficher] = useState(false);



    const submit = () => {

        const dateMaintenant = new Date()
        const dateSelect = new Date(validDateInput)

        if (validDateInput) {

            if (dateSelect < dateMaintenant) {
                alert("Merci de selectionner une date posterieur à la date du jour.")
                return;
            }

            var result = jsonDatePicker.filter(obj => {
                return obj.date === validDateInput
            })

            setObjAfficher(result[0])
        }


    }

    return (
        <>

            <div className='flex row space-x-5 items-end'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quelle date voulez vous provisionner ?</span>
                    </label>
                    <input type="date" min="2022-06-26" max="2022-09-26" onChange={(date) => setValidDateInput(date.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn btn-outline btn-primary btn" onClick={() => submit()}>provisionner</button>
            </div>

            {objAfficher ? <>            <div className='w-full flex justify-center mt-8'>
                <div className="stats ">

                    <div className="stat">
                        <div className="stat-title">Collaborateurs nécessaires</div>
                        <div className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbCollaborateursNecessaires}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Collaborateurs prévus</div>
                        <div className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbCollaborateursPrevus}</div>
                    </div>

                </div>
            </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbSinistresPrevus}</h2>
                                <p className="leading-relaxed">Nombre de sinistres</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbDepartementsImpactes}</h2>
                                <p className="leading-relaxed">Nombre de departements impactés</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbParticuliers}</h2>
                                <p className="leading-relaxed">Personnes morales</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{objAfficher.nbProfessionnels}</h2>
                                <p className="leading-relaxed">Entreprises</p>
                            </div>
                        </div>
                    </div>
                </section></> : <></>

            }





        </>
    );
};

export default Prevision;
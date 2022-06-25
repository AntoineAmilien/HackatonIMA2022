import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => router.push('/clientBoard');
    console.log(errors);

  return (
    <div>
      <Head>
        <title>IMH - PréColab</title>
        <meta name="description" content="Outil IMH d'aide a la planification et a la gestion de sisnistre en fonction des previsions météos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: "url(https://pompe-a-chaleur-france.fr/wp-content/uploads/2021/04/operateur2-2500x1667-1.jpeg)"}}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 class="text-7xl font-bold text-white">PréColab</h2>
                            
                            <p class="max-w-xl mt-3 text-gray-300">Un outil by IMH</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Connexion</h2>
                            
                            <p class="mt-3 text-gray-500 dark:text-gray-300">Connectez vous pour accéder à l'outil</p>
                        </div>

                        <div class="mt-8">
                          <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label for="user" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Identifiant</label>
                                    <input {...register("user", {required: true})} type="text" placeholder="....." class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Mot de passe</label>
                                        <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Mot de passe oublié ?</a>
                                    </div>

                                    <input {...register("password", {required: true})} type="password" id="password" placeholder="*****" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="mt-6">
                                    <button type="submit"
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Se connecter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </main>

      <footer>
      </footer>
    </div>
  )
}

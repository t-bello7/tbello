"use client"
import Image from "next/image"
import { PulsatingCircle } from "@/components"
import {
    afaaslogo,
    campushublogo,
    ensomlogo
 } from "@/assets/images"

const selectedWorks = [
    {
        id: "fveevv",
        title: 'Agriculture App',
        description: 'A mobile app for farmers to manage their crops and livestock.',
        tags: ["agriculture", "mobile"],
        image: afaaslogo,
        status: "shipped"
    },
    {
        id: "fveev",
        title: 'Campush Hub',
        description: 'Ecommerce',
        tags: ["Mobile"],
        image: campushublogo,
        status: "in-progress"
    },
    {
        id: "vev",
        title: "Ensom",
        description: 'enSOM mobile app is a productivity application for telecommunications field engineers to monitor infrastructure and efficiently manage operations and track their tasks.',
        tags: ["telecommunications"],
        image: ensomlogo
    }
]
//  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-[30%] aspect-square">
//                 <defs>
//                     <clipPath id="a">
//                         <path d="M0 0h300v300H0z"/>
//                     </clipPath>
//                 </defs>
//                 <g clipPath="url(#a)">
//                         <path fill="#F5F5F5" d="M466.7-157.097c-16.6-169.4-303.5-541.3-675.8-274.3-84.4 60.5-136.1 139.8-159.6 393.2-6.5 70.3-42.4 134.3-85.2 257.8-24.1 69.4-28.1 235.4 106.4 276.297C-169.8 550 53 519.1 160.1 466.503c136.3-66.9 338.9-293.6 306.6-623.6z" className="block" transform="matrix(.28 0 0 .28 150 150)"/>
//                         <path fill="#4E6EC1" d="m-350.1 400.803-84.7-428.1c-4.3-21.6 12.3-41.8 34.3-41.8h582.3c16.7 0 31.1 11.8 34.3 28.2l84.7 428.1c4.3 21.6-12.3 41.8-34.3 41.8h-582.3c-16.7 0-31.1-11.8-34.3-28.2z" className="block" transform="matrix(.27954 0 0 .27954 150 150)"/>
//                         <path fill="#BCCCF6" d="M-276.4-240.497h489.5c19.3 0 35 15.7 35 35v554.5c0 19.3-15.7 35-35 35h-489.5c-19.3 0-35-15.7-35-35v-554.5c0-19.4 15.7-35 35-35z" className="block" transform="matrix(.27954 0 0 .27954 150 150)"/>
//                         <path fill="#B8CBFF" d="M-64.896-413h-29v-27h-12v27h-29v12h29v27h12v-27h29v-12z" className="block" transform="matrix(.27 0 0 .27 298.5 368.5)"/>
//                         <path fill="#B8CBFF" d="M-64.896-413h-29v-27h-12v27h-29v12h29v27h12v-27h29v-12z" className="block" transform="matrix(.2712 .01735 -.01735 .2712 291.557 143.723)"/>
//                         <path fill="#B8CBFF" d="M-514.5-112.113c-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27-12.1 27-27 27zm0-42c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" className="block" transform="matrix(.28094 0 0 .28094 167.486 122.131)"/>
//                     <g className="block">
//                         <path fill="#FFF" d="M91.744 43.115h136.834c5.395 0 9.784 4.389 9.784 9.784v155.004c0 5.395-4.389 9.783-9.784 9.783H91.744c-5.395 0-9.784-4.388-9.784-9.783V52.899a9.777 9.777 0 0 1 9.784-9.784z"/>
//                         <path fill="#589DEC" d="M100.661 103.355a4.778 4.778 0 0 0 4.78 4.78h110.223a4.778 4.778 0 0 0 4.78-4.78 4.778 4.778 0 0 0-4.78-4.78H105.442a4.778 4.778 0 0 0-4.78 4.78z" opacity=".4"/>
//                         <g opacity=".4">
//                             <path fill="#589DEC" d="M100.661 158.765a4.778 4.778 0 0 0 4.78 4.78h110.223a4.778 4.778 0 0 0 4.78-4.78 4.778 4.778 0 0 0-4.78-4.78H105.442c-2.628-.028-4.78 2.125-4.78 4.78z" opacity=".4"/>
//                             <path fill="#589DEC" d="M100.661 132.12a4.778 4.778 0 0 0 4.78 4.78h110.223a4.778 4.778 0 0 0 4.78-4.78 4.778 4.778 0 0 0-4.78-4.78H105.442c-2.628-.028-4.78 2.124-4.78 4.78z"/>
//                         </g>
//                         <path fill="#589DEC" d="M100.661 74.59a4.778 4.778 0 0 0 4.78 4.78h34.356a4.778 4.778 0 0 0 4.78-4.78 4.778 4.778 0 0 0-4.78-4.78h-34.355c-2.628 0-4.78 2.153-4.78 4.78z"/>
//                     </g>
//                     <path fill="#1F3C87" d="m-333.7 380.503 138.2-340.8c5.4-13.2 18.2-21.9 32.4-21.9H415c24.8 0 41.8 25.1 32.4 48.1l-138.2 340.8c-5.4 13.2-18.2 21.9-32.4 21.9h-578.1c-24.8 0-41.7-25.1-32.4-48.1z" className="block" transform="matrix(.27954 0 0 .27954 150 150)"/>
//                 </g>
//             </svg>
const SelectedWorks = () => {
    return (
        <div className="container mx-auto font-Inconsolata max-w-[95%] space-y-4 pb-[15vh]">
           
            <h1 className="font-bold text-5xl font-Paytone"> Selected Works</h1>
            <p className="font-Inconsolata text-right"> A collection of my works and projects and experiments</p>
            <div className="grid">
                <h3 className="font-bold"> Project Status: </h3>
                <div className="flex items-center">
                    <span> Shipped </span> 

                    <PulsatingCircle color="#66cc33" size="small" /> 
                </div>
                <div className="flex items-center">
                    <span>
                        In Progress
                    </span>
                    <PulsatingCircle color="#FF9600" /> 
                </div>
            </div>
            <div className="grid gap-8">
                {
                    selectedWorks.map(({
                        id, title, description, tags, image, status
                    }) => (
                        <div key={id} className="text-center space-y-2">
                            <Image className="w-full aspect-square object-fit rounded-[0.4rem]" width={100} height={10} src={image} alt={title} />
                            <div className="flex justify-center items-center">
                                <h4 className="text-[#aaa]"> {title} </h4> 
                                <PulsatingCircle color={status === "shipped" ? "#66cc33" : "#FF9600"} /> 
                            </div>
                            <h3> {description} </h3>
                            <div className="flex justify-center">
                            {
                                tags.map((tag) => (
                                    <span key={tag}> { tag }</span>
                                ))
                            }
                            </div>
                   
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SelectedWorks
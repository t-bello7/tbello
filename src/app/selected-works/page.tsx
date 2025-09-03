"use client"
import Image from "next/image"
import { PulsatingCircle, SectionTitle } from "@/components"
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

const SelectedWorks = () => {
    return (
        <div className="container mx-auto font-Paytone max-w-[95%] space-y-4 pb-[15vh]">
           
            <SectionTitle text="Selected Works"/>
            <p> A collection of my works and projects and experiments</p>
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
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
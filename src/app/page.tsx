"use client"

import Image from "next/image"
import { useState } from "react"

const people = [
  {
    name: "Pepine",
    role: "UX Director",
    picture:
      "https://images.unsplash.com/photo-1651917388545-7ec903f93d08?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "I'm baby fingerstache mlkshk tousled, beard etsy adaptogen 90's pug live-edge. Farm-to-table banjo paleo, praxis live-edge enamel pin single-origin coffee woke tacos sus blog occupy. ",
  },
  {
    name: "Maxine",
    role: "Head of Engineering",
    picture:
      "https://images.unsplash.com/photo-1620274549078-11bf5291cb9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D",
    description:
      "Bodega boys letterpress readymade +1 street art godard. Sustainable gastropub lyft ennui. Vape artisan mumblecore, fixie umami pinterest yuccie franzen microdosing organic art party ramps.",
  },
  {
    name: "Luline",
    role: "FP&A Lead",
    picture:
      "https://images.unsplash.com/photo-1515256722043-0f2b082ddadc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D",
    description:
      "Disrupt activated charcoal heirloom, wayfarers whatever neutra chambray selfies master cleanse blue bottle sustainable pork belly pok pok same. Selvage intelligentsia four loko, copper mug deep v selfies whatever +1. ",
  },
  {
    name: "Meline",
    role: "HR Manager",
    picture:
      "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MnwwfHx8MA%3D%3D",
    description:
      "Gatekeep gorpcore copper mug, direct trade tote bag selvage wolf hammock art party beard grailed. Tote bag polaroid green juice yuccie. Irony cronut woke tumeric semiotics offal forage tote bag cray. Vinyl crucifix locavore mumblecore yuccie.",
  },
  {
    name: "Cerafin",
    role: "FP&A Lead",
    picture:
      "https://images.unsplash.com/photo-1546526423-692c8aea931e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione aut ea nostrum qui praesentium quo. Cumque, incidunt! Animi, corrupti!",
  },
]

export default function Home() {
  const [arrayIndex, setArrayIndex] = useState(0)

  const handlePreviousReview = () => {
    setArrayIndex((prev) => (prev === 0 ? people.length - 1 : prev - 1))
  }

  const handleNextReview = () => {
    setArrayIndex((prev) =>
      prev !== people.length - 1 ? prev + 1 : (prev = 0)
    )
  }

  const handleSurprise = () => {
    const random = Math.floor(Math.random() * people.length)
    setArrayIndex(random)
  }

  return (
    <section className="grid place-content-center min-h-screen">
      <h2 className="text-center font-semibold text-4xl mb-12">
        What people say about us
      </h2>
      <article className="w-80 mx-auto shadow-2xl bg-slate-100 rounded-sm p-8">
        <h6 className="uppercase text-gray-700 mb-5 text-center text-xl font-semibold">
          {people[arrayIndex].name}
        </h6>
        <Image
          src={people[arrayIndex].picture}
          alt={`Picture of ${people[arrayIndex].name}`}
          width={200}
          height={200}
          className="rounded-full object-center mx-auto aspect-square"
        />
        <h4 className="py-1 text-3xl text-rose-400 font-semibold">
          {people[arrayIndex].role}
        </h4>
        <p className="text-gray-900/80 font-medium text-left">
          {people[arrayIndex].description}
        </p>
        <div className="py-5 flex justify-around">
          <button
            onClick={handlePreviousReview}
            className="cursor-pointer px-2 py-0.5 hover:bg-slate-600 hover:text-slate-100 transition-all border-slate-700/20 rounded text-slate-600 border-2"
          >
            Prev
          </button>
          <button
            onClick={handleNextReview}
            className="cursor-pointer px-2 py-0.5 hover:bg-slate-600 hover:text-slate-100 transition-all https://images.unsplash.com/photo-1546526423-692c8aea931e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D1 border-slate-700/20 rounded text-slate-600 border-2"
          >
            Next
          </button>
        </div>
        <button
          onClick={handleSurprise}
          className="underline underline-offset-2 cursor-help w-full"
        >
          Surprise me
        </button>
      </article>
    </section>
  )
}

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import Thumbnail from './Thumbnail'
import { Movie } from '@/typings'
import { DocumentData } from 'firebase/firestore'

interface Props {
    title: string
    // When using FireBase
    movies: Movie[] | DocumentData[]
}

function Row({title, movies}: Props) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    function handleClick(direction: string) {
        setIsMoved(true);

        if (rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current;

            const scrollTo = 
            direction === "left" 
                ? scrollLeft - clientWidth 
                : scrollLeft + clientWidth;

            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"});
        }
    }

    

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5]
            transition duration-200 hover:text-white md:text-2xl'>
            {title}
        </h2>
        <div className='group relative md:-ml-2'>
            <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
            cursor-pointer transition hover:scale-125 group-hover:opacity-100 opacity-0 
            ${!isMoved && 'hidden'}
            `}
            onClick={() => handleClick("left")}/>

            <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5
                md:p-2 scrollbar-hide'>
                {movies.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))}
            </div>

            <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 
            cursor-pointer transition hover:scale-125 group-hover:opacity-100 opacity-0'
            onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default Row
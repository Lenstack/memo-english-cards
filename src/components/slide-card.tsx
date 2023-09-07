import Image from "next/image";
import {HTMLAttributes} from "react";

interface SlideCardProps extends HTMLAttributes<HTMLElement> {
    verb: string;
    pronunciation: string;
    pastSimple: string;
    pastParticiple: string;
    spanish: string;
    sound: string;
    photo: string;
    count: number;
}

export const SlideCard = ({verb, pronunciation, pastSimple, pastParticiple, spanish, sound, photo, count}: SlideCardProps) => {
    return (
        <article className="bg-[#f5f6f7] dark:bg-[#333233] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4">
                <span className="text-xl font-bold">{count}</span>
                <span className="text-xl font-bold capitalize">{spanish}</span>
            </div>
            <Image src={photo} alt={verb} className="w-full h-64 object-cover object-center" width={500} height={500}/>
            <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold text-center capitalize">{verb}</h2>
                <p className="mt-2 font-bold">{pronunciation}</p>
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex flex-col justify-center gap-3 capitalize">
                    <p>{pastSimple}</p>
                    <p>{pastParticiple}</p>
                </div>
                <div className="flex items-center justify-between">
                    <audio controls className="w-full">
                        <source src={sound} type="audio/mpeg"/>
                    </audio>
                </div>
            </div>
        </article>
    )
}
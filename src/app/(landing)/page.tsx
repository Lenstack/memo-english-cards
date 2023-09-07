import MemoItems from '@/constants/memo-items.json';
import {SlideCard} from "@/components/slide-card";

export default function Landing() {
    return (
        <main className="min-h-screen container mx-auto p-6 md:p-12">
            <header className="mb-12 space-y-3">
                <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#f0eef0] to-[#333233] dark:from-[#333233] dark:to-[#f0eef0]">Irregular
                    Verbs</h1>
                <p className="text-center">A collection of irregular verbs in English</p>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-center block my-4"> {`Total: ${MemoItems.length}`} </span>
                    <span className="text-center block my-4"> {`Learned: 0`} </span>
                    <span className="text-center block my-4"> {`Remaining: 0`} </span>
                </div>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    MemoItems.map((item, index) => (
                        <SlideCard verb={item.Verb} pronunciation={item.Pronunciation} pastSimple={item.PastSimple}
                                   pastParticiple={item.PastParticiple} spanish={item.Spanish} sound={item.Sound}
                                   photo={item.Photo} count={index + 1} key={index}/>
                    ))
                }
            </section>
            <footer className="mt-12 text-center">
                <p>Created by <a href="https://github.com/Lenstack" target={"_blank"} className="text-blue-500 hover:underline">Leonardo Ospina</a> with ❤️</p>
            </footer>
        </main>
    )
}

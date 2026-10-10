import a1 from '../assets/asset1.jpeg';
import a2 from '../assets/asset2.jpg';
import a3 from '../assets/asset3.png';
import a4 from  '../assets/asset4.jpeg';
//import a5 from '../assets/asset5.svg';

export default function Breakpoints() {
    return <>
        <p className='font-bold bg-black text-3xl sm:bg-red-600 md:bg-green-700 lg:bg-blue-900 xl:bg-amber-500 2xl:bg-purple-600'
        >From breakpoints</p>
        <br />
        <div className='container mt-12'>
            <p className='mb-8'>Cols below</p>
            <div className='columns-1 md:columns-2 lg:columns-2 xl:columns-2 2xl:columns-2 gap-1'>
                <img className='w-full aspect-video' src={a1} />
                <img className='w-full aspect-square' src={a2} />
                <img className='w-full' src={a3} />
                <img className='w-full' src={a4} />
            </div>
        </div>
    </>
}
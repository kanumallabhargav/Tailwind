export default function Interactive() {
    return <>
        <button className='bg-zinc-700 text-white py-2 px-5 rounded-full font-semibold hover:bg-zinc-600 active:bg-zinc-900 active:text-slate-500'>
            Click here
        </button>
        <br />
        <div className='border-2 border-slate-200 rounded-lg'>
            <ul className='p-1'>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 1</li>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 2</li>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 3</li>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 4</li>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 5</li>
                <li className='first:bg-red-200 even:bg-slate-100 odd:bg-white'>Item 6</li>
            </ul>
        </div>
        <button className='bg-blue-700 text-white py-2 px-5 rounded-full font-semibold hover:bg-blue-800 active:bg-blue-900 active:text-slate-500 mt-12
        cursor-help mb-12
        '>Test your pointers</button>

        <div className='select-none'>Some text goes here. test your selection options</div>
        <div className='select-auto'>Some text goes here. test your selection options</div>
        <div className='select-all'>Some text goes here. test your selection options</div>
    </>
}
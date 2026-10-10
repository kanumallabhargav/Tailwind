export default function Grid() {
    return <>
        <p className='my-12'>From grid</p>
        <div className='grid grid-cols-4'>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold col-span-2'>Item 1</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold row-span-3'>Item 2</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold'>Item 3</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold col-span-2 row-span-4'>Item 4</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold'>Item 5</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold row-span-3'>Item 6</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold'>Item 7</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold'>Item 8</div>
            <div className='border bg-red-900 text-zinc-100 text-lg p-5 rounded-2xl font-semibold col-span-4'>Item 9</div>
        </div>
    </>
}
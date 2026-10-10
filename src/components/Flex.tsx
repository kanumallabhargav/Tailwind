
export default function Flex() {
    return <>
        <p className='my-12'>From flex</p>
        {/*<div className='flex flex-col md:flex-row gap-2'>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>01</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>02</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>03</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>04</div>
        </div>*/}
        <hr />
        <div className='flex items-center flex-col gap-5 h-72 mt-6'>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>05</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>06</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>07</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>08</div>
        </div>
        <hr />
        <div className='flex w-full mt-6 gap-2'>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md w-64 flex-none'>09</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md'>10</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md w-64'>11</div>
            <div className='bg-blue-900 text-zinc-300 font-semibold text-lg p-3 rounded-md flex-auto'>12</div>
        </div>
    </>
}
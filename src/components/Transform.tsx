import ann from '../assets/asset5.svg'

export default  function Transform() {
    return <>
        <p className='my-12'>From Transform</p>
        <button className='bg-blue-500 text-white hover:bg-blue-600 px-5 py-1 rounded-full
        active:bg-blue-700 active:text-zinc-300
        transition duration-100
        '>Click me</button>
        <br />
        <button className='bg-blue-500 text-white hover:bg-yellow-600 px-5 py-1 rounded-full
        active:bg-blue-700 active:text-zinc-300
        transition duration-500
        hover:opacity-25
        mt-6
        '>Click me</button>
        <br />
        <button className='bg-blue-500 text-white hover:bg-yellow-600 px-5 py-1 rounded-full
        active:bg-blue-700 active:text-zinc-300
        transition duration-500
        hover:opacity-25
        mt-12
        hover:rotate-270
        '>Click me</button>
        <br />
        <button className='bg-blue-500 text-white hover:bg-yellow-600 px-5 py-1 rounded-full
        active:bg-blue-700 active:text-zinc-300
        transition duration-500
        hover:opacity-25
        mt-12
        active:rotate-270
        '>Click me</button>
        <br /> <br /> <hr />

        <img src={ann} className='w-50 h-50 mt-12 ml-24 animate-pulse' />
    </>
}
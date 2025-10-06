import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around items-center bg-[#13131305] rounded-2xl p-5 md:px-28 md:py-20 my-6 gap-5 md:gap-20'>
                <div className='space-y-5 md:space-y-12'>
                    <h1 className='font-bold text-2xl md:text-5xl'>Books to freshen up your bookshelf</h1>
                    <button className='btn btn-primary'>View The List</button>
                </div>
                <div>
                    <img src={bookImg} alt="Banner Image" className='rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
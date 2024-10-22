
const Banner = () => {
    return (
        <div className="relative space-y-4 mt-5 md:mt-16 h-[400px] flex flex-col items-center justify-center mx-3 md:mx-20 rounded-3xl">
        {/* Background image with opacity */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/five-professional-chefs-commercial-kitchen-are-preparing-large-amount-food-they-are-wearing-white-chef-coats-hats_14117-385320.jpg')] bg-cover bg-no-repeat opacity-90 rounded-3xl"></div>
        
        {/* Content */}
        <h1 className="text-5xl font-bold w-2/3 text-center relative z-10 text-white">Discover an exceptional cooking class tailored for you!</h1>
        <p className="w-1/2 text-center relative z-10 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        
        <div className="relative z-10">
            <button className="bg-[#0BE58A] text-black px-4 py-2 rounded-3xl font-semibold mr-3">Explore Now</button>
            <button className="border-2 text-black px-4 py-2 rounded-3xl font-semibold">Our Feedback</button>
        </div>
        </div>

        // our recipes

    );
};

export default Banner;
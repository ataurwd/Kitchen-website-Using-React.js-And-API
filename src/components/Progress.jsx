
const Progress = ({recipeItem, handleDelete, prepareing, countTotal, totalTime,calories}) => {
    return (
        <div className="border-2 w-1/3 rounded-xl p-5">
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody className="">
                {
                    recipeItem.map((item, index) => (
                        <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => {handleDelete(item.id)
                            countTotal(
                                item.preparing_time,
                                item.calories
                            )
                        }} className="bg-[#0BE58A] text-black px-4 py-2 rounded-3xl font-semibold mr-3">prepared</button>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        {/* current cooked table */}
        <div className="overflow-x-auto">
        <h1 className="text-center font-bold text-2xl py-5">Currently cooking: 02</h1>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody className="">
                {
                    prepareing.map((item, index) => (
                        <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                    </tr>
                    ))}
                    <tr className="border-none">
                        <th></th>
                        <td></td>
                        <td>Total Time = {totalTime}</td>
                        <td> Total Calories {calories}</td>
                    </tr>
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default Progress;
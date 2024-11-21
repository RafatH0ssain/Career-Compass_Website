import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountDown = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/ServiceData.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th></th>
                        <th>Time</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data.map((service) => (
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={service.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.counselor}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {service.duration}
                            </td>
                            <td><span className="badge badge-ghost badge-sm">{service.pricing}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link className="btn mx-10 btn-success m-10" to="/">Buy Selected</Link>
        </div>
    );
};

export default CountDown;
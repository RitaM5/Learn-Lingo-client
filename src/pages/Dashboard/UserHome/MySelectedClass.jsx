import React from 'react';
import useSelect from '../../../hooks/useSelect';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const MySelectedClass = () => {
    const [selected, refetch] = useSelect();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://summer-camp-server-dusky.vercel.app/select/${item._id}`)
                    .then(response => {
                        const { data } = response;
                        if (data && data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        console.error('Delete error:', error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the item.',
                            'error'
                        )
                    });
            }
        });
    }
    
    return (
        <div className="w-full">
            <Helmet>
                <title>Learn Lingo | My Selected Classes</title>
            </Helmet>     
            <div className=" w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-gray-200'>
                        <tr className='font-poppins text-black text-lg font-semibold'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Pament</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=' font-poppins'>
                        {
                            selected.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.className}
                                </td>
                                <td className="">${item?.price}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${item?._id}`}>
                                        <button className="btn btn-primary font-semibold btn-sm">PAY</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;
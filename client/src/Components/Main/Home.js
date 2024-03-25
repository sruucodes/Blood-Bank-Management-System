import React from 'react'
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.jpg"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Health Screening", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Blood Product istribution ", img: g4 },
    ]
    return (
        <div className="dark:text-white-900">
            <img src={bg} alt="" />
            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be The Reason <br />For <br />Someone's HeartBeat
                    </p>
                </div>
            </div>
            <h1 className='font-bold text-center text-blood my-4 text-4xl underline'>Learn About Donation</h1>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="95%" length="120%"alt="" />
                    <h1 className='text-center text-xl '>
                        <p>After donating blood, the body works to replenish the blood loss.</p>
                    </h1>
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-4xl underline font-bold text-blood text-center mt-10 mb-10'>
               <h1> Blood Donation Process</h1>
            </p>
            <div className='grid grid-cols-2 place-items-center'>
                {temp2.map((e, i) =>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Donors provide personal details, medical history, and consent, crucial for eligibility verification and documentation. This step ensures accurate donor records and adherence to regulations, streamlining the donation process while prioritizing safety and confidentiality.</p>
                        </div>
                    </div>
                )}
            </div>
            <br />
        </div>
    )
}

export default Home
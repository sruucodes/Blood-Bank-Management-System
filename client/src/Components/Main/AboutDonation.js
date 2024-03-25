import React from 'react'
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1 },
        { title: "Health Screening", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Blood Product Distribution", img: g4 },
    ]
    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The donation process from the time you arrive center until the time you leave</code><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center'>
                    {data.map((e, i) =>
                        <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>To register for blood donation, visit our website or attend an event. Provide personal details and medical history. Undergo a brief health screening. Once approved, proceed to donation area. Blood drawn by trained staff. Receive post-donation care. Join us in saving lives through your generosity.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutDonation
import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "UnityBlood related queries, feedback and suggestions", body: [
                "JSSATE-B Campus,",
                "Dr.Vishnuvardhan Rd, Uttarahalli-Kengeri Main Road, Srinivaspura, Bengaluru, Karnataka 560060",
                "080 2861 1702",
                "Visit: jssateb.ac.in"
            ]
        },
        {
            title: "For Administrative queries", body: [
                "Indian Red Cross Society, Karnataka State Branch",
                "26, Race Course Rd, Madhava Nagar,",
                "Gandhi Nagar, Bengaluru, Karnataka 560001"
            ]
        },
        { title: "For administrative queries", body: [
            "Indian Red Cross Society, Karnataka State Branch",
            "26, Race Course Rd, Madhava Nagar,",
            "Gandhi Nagar, Bengaluru, Karnataka 560001"
        ] }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
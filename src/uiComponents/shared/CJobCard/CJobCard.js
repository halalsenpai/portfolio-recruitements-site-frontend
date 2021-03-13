import React from 'react'

function CJobCard({ job, type }) {
    return (
        <div className={`c-job-card ${ job.featured && 'featured' } ${type} `}>

            <span className="info-wrapper">

                <img className="job-thumbnail" src={job.imgUrl} alt="" />

                <span className="info">

                    <span className="title-row">

                        <h6 className="title">{job.title}</h6>
                        
                        <span className='location-container'>

                            <img className="location-icon" src={require('../../../assets/images/icons/location_icon.svg')} alt="" />
                            <p className="location-text">{job.location}</p>

                        </span>

                    </span>

                    <span>

                        <p>{job.company}</p>
                        <p >{job.endDate}</p>

                    </span>
                </span>
            </span>

            <span className="more-info">

                <p>{job.type}</p>
                <p>{job.salary} AED-month</p>

            </span>

            <span className="tag">

                <img className="tag-icon" src={require('../../../assets/images/icons/diamond_white_icon.svg')} alt="" />
                <p className="tag-text">Featured</p>

            </span>

        </div>
    )
}

export default CJobCard

import React from 'react'
import { Input, Form } from 'antd';
import { MappedElement } from '../../utils/helper';
import CJobCard from '../../uiComponents/shared/CJobCard/CJobCard';
import data from './Data';
function Jobs() {
    const onFinish = () => {

    }
    return (
        <div className="jobs-page">
            <div className="container-fluid header-wrapper">
                <Form className="container c-form header" onFinish={onFinish}>
                    <span className="form-fields">
                        <Form.Item name="search" className="c-input c-input-with-icon" >
                            <img className="input-icon" src={require('../../assets/images/icons/search_icon.svg')} alt="" />
                            <Input placeholder="Job title" size="small" className="xs" type="text" ></Input>
                        </Form.Item>
                        <Form.Item name="location" className="c-input c-input-with-icon" >
                            <img className="input-icon" src={require('../../assets/images/icons/location_icon.svg')} alt="" />
                            <Input placeholder="Location" size="small" className="xs" type="text" ></Input>
                        </Form.Item>
                    </span>
                    <div className="filters">
                        <img className="filter-icon" src={require('../../assets/images/icons/filter_icon.svg')} alt="" />
                    </div>
                    <span className="statistics-wrapper">
                        <span className="statistic">
                            <h4>0</h4>
                            <p>Direct message Employers & agencies</p>
                            <img className="statistic-icon" src={require('../../assets/images/icons/diamond_white_icon.svg')} alt="" />
                        </span>
                        <span className="statistic">
                            <h4>0</h4>
                            <p>Short Listed Jobs</p>
                            <img className="statistic-icon" src={require('../../assets/images/icons/star_icon.svg')} alt="" />
                        </span>
                        <span className="statistic">
                            <h4>0</h4>
                            <p>Jobs applied</p>
                            <img className="statistic-icon" src={require('../../assets/images/icons/check_white_icon.svg')} alt="" />
                        </span>
                    </span>
                </Form>
            </div>
            <div className="container pb-2">
                    <div className="jobs-list">
                            <MappedElement data={data} renderElement={(obj,index)=>{
                                return <CJobCard job={obj} key={obj.title}  />
                            }} />
                    </div>
                    <div className="job-details">
                        
                    </div>
                </div>
        </div>
    )
}

export default Jobs

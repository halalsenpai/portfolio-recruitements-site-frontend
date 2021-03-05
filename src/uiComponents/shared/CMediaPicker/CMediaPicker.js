import React, { useState } from 'react'
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import CModal from '../CModal/CModal';

const { Dragger } = Upload;
function CMediaPicker({
    onPicked
}) {
    const [showModal, setShowModal] = useState(true);
    return (
        <span className="c-media-picker">
            <button type="button" onClick={() => setShowModal(true)} className="upload-button">
                <PlusOutlined />
            </button>
            <CModal
                show={showModal}
                className="center lg c-media-picker"
                backdrop="static"
                keyboard={false}
                onHide={() => setShowModal(false)}
            >
                <Dragger
                    name={'file'}
                    multiple={true}
                    beforeUpload={(file) => {
                        console.log('state.fileList', file)
                        return false;
                    }}
                    onChange={(info) => {
                        const { status } = info.file;
                        if (status !== 'uploading') {
                            console.log(info.file, info.fileList);
                        }
                        if (status === 'done') {
                            message.success(`${info.file.name} file uploaded successfully.`);
                        } else if (status === 'error') {
                            message.error(`${info.file.name} file upload failed.`);
                        }
                    }}>
                    <img id="upload-icon" src={require('../../../assets/images/icons/imgupload-icon.svg')} alt="icon" />
                    <p className="ant-upload-text">Drop your image here or browse</p>
                    {/* <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                     </p> */}
                </Dragger>
            </CModal>
        </span>
    )
}
  
export default CMediaPicker

import React, { useState } from 'react'
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import CModal from '../CModal/CModal';

const { Dragger } = Upload;
function CMediaPicker({
    onPicked,
    hintText="Upload Profile Photo"
}) {
    const [showModal, setShowModal] = useState(false);
    const [fileList, setFileList] = useState([]);
    const handleClose = ()=>{
        onPicked(fileList)
        setShowModal(false);
    }
    const onRemove =file => {
        setFileList(prevState => {
          const index = prevState.indexOf(file);
          const newFileList = prevState.slice();
          newFileList.splice(index, 1);
          return newFileList
        });
      }
     const  beforeUpload = file => {
        setFileList(state =>  [...state, file]);
        return false;
      }
    return (
        <span className="c-media-picker">
            <label className="required mb-0">{hintText}</label>
            <button type="button" onClick={() => setShowModal(true)} className="upload-button">
                <PlusOutlined />
            </button>
            <CModal
                show={showModal}
                className="center lg c-media-picker"
                backdrop="static"
                keyboard={false}
                onHide={handleClose}
            >
                <Dragger
                    name={'file'}
                    multiple={true}
                    fileList={fileList}
                    onRemove={onRemove}
                    beforeUpload={beforeUpload}
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

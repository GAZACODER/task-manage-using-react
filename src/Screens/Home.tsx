import React, { memo, useCallback, useEffect, useState,useRef } from 'react';
import { Button, Input, Modal } from 'antd'; 

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { HomeStyle } from './Style'
import { addBoard } from '../Store/BoardSlice';
import { useDispatch , useSelector } from 'react-redux/es/exports';
import { RootState } from '../Store/store';


const Home: React.FC = () => {
  
  const refInput = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch()
const boards = useSelector(
    (state: RootState) => state.boards.value)
  const showModal = () => {
      setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(addBoard(refInput.current.input.value))
    setTitle('')
    setIsModalOpen(false);
    localStorage.setItem('list-titles', JSON.stringify(boards))
    // const ar = localStorage.getItem('list-titles')


    // console.log(refInput.current.input.value)
     
 }
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = ((e:React.FormEvent<HTMLInputElement>) => {
    // setTitle(e.target.value)
    
    // const timeout = setTimeout(() => {
    //   console.log('e: ', e.target.value)
    //    setTitle('')
    //   }, 3000)
  })

  return (
      <HomeStyle>
      <Button type="primary" onClick={showModal}>
        
        create board
      </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <h5>board title</h5>
        <Input ref={refInput} onChange={handleChange} />
        
      </Modal>
      <ul >
        {boards.map((index) => (
          <li key={index} id={index}>{index}</li>
))}
      </ul>
    </HomeStyle>
  )
}

export default memo(Home)



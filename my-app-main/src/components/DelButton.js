import React from 'react'
import { useDispatch } from 'react-redux';
import {needDelete} from "../redux/action"

export default function DelButton(props) {
    const dispatch = useDispatch()
    function delClick(){
        
      let id = props.mas.key;
      dispatch(needDelete(id));
    }
  return (
            <a href="#javaScr" onClick={delClick}>Delete</a>
  )
}

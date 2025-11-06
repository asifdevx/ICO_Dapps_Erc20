import { AppDispatch } from '@/reducer/store';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

// const socket = io(`wss://leox-backend.onrender.com`, {
const socket = io(`http://192.168.1.100:8000`, {
  withCredentials: true,
  transports: ['websocket'],
});

export default function SocketListener() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
   
 
    return () => {
  
    };
  }, [dispatch]);
  return null;
}

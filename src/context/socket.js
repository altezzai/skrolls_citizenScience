// socket.js
import { HOST } from '@/utils/constants';
import { io } from 'socket.io-client';

const socket = io(HOST);

export default socket;

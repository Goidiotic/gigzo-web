import io from 'socket.io-client';

let socket;

export const connectSocket = () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  socket = io(process.env.REACT_APP_BACKEND_SOCKET_URL, {
    auth: {
      token: `Bearer ${token}`
    },
    transports: ['websocket', 'polling']
  });

  // ✅ Handle connection
  socket.on('connect', () => {
    console.log('✅ WebSocket connected:', socket.id);
    // Receive response from socket server while it connected
  });

  socket.on("connect_error", (err) => {
    console.error("❌ Socket connection error:", err.message);
    console.error("🔍 Full error:", err);
    // Server send response in connect to the SocketServer
  });
};

export const getSocket = () => socket;

// New: Join contract room
export const joinContractRoom = (contractId) => {
  if (socket && contractId) {
    socket.emit('join-contract', contractId);
  }
};

// New Join Smart Contract Order Update Room
export const joinSmartContractOrderUpdateRoom = (contractId)=>{
  if(socket && contractId) {
    socket.emit('join-smart-contract-order-update-room', contractId);
  }
}

export const joinMyAdsUpdateRoom = (uid) =>{
  if(socket && uid) {
    socket.emit('join-my-ads-update-room', uid);
  }
}

export const joinDisputeChat = (contractId) => {
  if(socket && contractId) {
    socket.emit('join-dispute-chat', contractId);
  }
}
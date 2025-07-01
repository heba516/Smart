// lib/shelfSocket.ts
"use client"

import { io } from "socket.io-client"
import type { Socket } from "socket.io-client"

const SOCKET_URL = "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/shelf"

// Initialize once and reuse
const socket: Socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true, // optional, true by default
})

console.log("🔌 Shelf socket initialized")

export default socket
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCubeStore } from "../store/cubeStore";
export const socket = io("http://localhost");

export const SocketManager = () => {
  const setCube = useCubeStore((state) => state.setCube);
  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }

    function onDisconnect() {
      console.log("disconnected");
    }

    function onHello() {
      console.log("hello");
    }

    function onCharacters(value) {
      console.log("characters", value);
      setCube(value);
    }

    function onMove(value) {
      console.log("onMove", value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);
    socket.on("move", onMove);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
      socket.off("move", onMove);
    };
  }, []);
};

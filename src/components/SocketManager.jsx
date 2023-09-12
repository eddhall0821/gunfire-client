import { useEffect } from "react";
import { io } from "socket.io-client";
import { usePlayerStore } from "../store/playerStore";
export const socket = io(process.env.REACT_APP_HOST);
console.log(process.env);
export const SocketManager = () => {
  const setPlayer = usePlayerStore((state) => state.setPlayer);
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
      setPlayer(value);
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

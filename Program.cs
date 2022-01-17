using System;
using WebSocketSharp;

namespace csWebSocket
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var ws = new WebSocket("ws://127.0.0.1:5001"))
            {
                ws.Connect();
                Console.ReadKey(true);
            }
        }
    }
}

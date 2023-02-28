---
title:  我的世界国外服务器本地ip加速解决方案
date: 2021-02-26 19:27:41
tags: [python, minecreate, 代理]
categories: python
typora-root-url: mc-server-local-ip-network-accelerate/
cover: ./mc-server-local-ip-network-accelerate/cover.jpg
---

# 我的世界国外服务器本地ip加速解决方案

这几天买了个我的世界正版账号， 一直考虑怎么样流畅的去hypixel玩。有以下解决方案

1. 使用游戏专用加速器加速 （游戏加速器软件要安装总感觉不geek）
2. 路由器刷固件走代理 （不会刷固件）
3. 购买服务器搭建加速ip （我不想为了一个加速ip去购买一台服务器）

以上方法对我来说均不满意

同时我尝试了以下方法：

1. 我有ssr代理， 使用clash搭建本地代理， 可是偏偏mc不走代理。
2. 我尝试了本地端口转发， 也没有效果

没有办法了， 只好自己查资料写一个端口流量转发工具了

## 基于python端口流量转发工具

### 环境：

- clash for windows
- python3.8
- MineCraft1.12.1
- jupyter

### 架构设计

![](1.jpg)

### 讲解

dont bb show you zhe code

```python
import logging
import select
import socket
import struct
from struct import *
from time import sleep

from socketserver import ThreadingMixIn, TCPServer, StreamRequestHandler

logging.basicConfig(level=logging.DEBUG)

class ThreadingTCPServer(ThreadingMixIn, TCPServer):
    pass

# 通过指定的ip、 端口使用clash创建一个到该地址的隧道， 该隧道使用sock5协议， 返回一个socket ，如果你于这个socket通信， 则相当于通过代理与你指定的ip、端口通信
def init_sock_server():
    sock5_server = socket.socket()
    sock5_server.connect(('127.0.0.1', 40000))
    data = pack('>BBB',  5,1,0)
    print(data)
    sock5_server.send(data)
    r = sock5_server.recv(2)
    print(r)
    print(sock5_server)
    data = pack('!BBBB', 5, 1, 0, 1)
    print(data)
    sock5_server.send(data)
    
    # 选择要clash代理的地址
    #sock5_server.send(socket.inet_aton('14.215.177.38'))  # baidu
    sock5_server.send(socket.inet_aton('172.65.230.166'))  # hypixel
    #sock5_server.send(socket.inet_aton('172.67.223.132'))  #2b2twin
    #sock5_server.send(socket.inet_aton('218.93.206.6'))  # kjy.pub
	
    # 指定要clash代理到的端口
    sock5_server.send(pack('!H', 25565))
    ver, status, rsv, t = unpack('!BBBB', sock5_server.recv(4))
    bind_addr = socket.inet_ntoa(sock5_server.recv(4))
    bind_port = unpack('!H', sock5_server.recv(2))
    print(ver, status, rsv, t, bind_addr, bind_port)
    return sock5_server

class SocksProxy(StreamRequestHandler):
    def handle(self):
        logging.info('Accepting connection from %s:%s' % self.client_address)
        # 收到一个请求则开启一个代理
        sock5_server =init_sock_server()
        
        self.exchange_loop(self.connection, sock5_server)
        self.server.close_request(self.request)

	# 开始转发流量   
    def exchange_loop(self, client, remote):
        while True:
            # wait until client or remote is available for read
            r, w, e = select.select([client, remote], [], [])
            
            sleep(0.0001)
            
            if client in r:
                data = client.recv(16384)
                if remote.send(data) <= 0:
                    break

            if remote in r:
                data = remote.recv(16384)
                if client.send(data) <= 0:
                    break

if __name__ == '__main__':
    # 在('127.0.0.1', 25565)开启
    with ThreadingTCPServer(('127.0.0.1', 25565), SocksProxy) as server:
        server.serve_forever()
            
```

输出如下

```python
b'\x05\x00'
<socket.socket fd=1468, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 3540), raddr=('127.0.0.1', 40000)>
b'\x05\x01\x00\x01'
5 0 0 1 127.0.0.1 (40000,)
INFO:root:Accepting connection from 127.0.0.1:3542
b'\x05\x01\x00'
b'\x05\x00'
<socket.socket fd=644, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 3545), raddr=('127.0.0.1', 40000)>
b'\x05\x01\x00\x01'
5 0 0 1 127.0.0.1 (40000,)
INFO:root:Accepting connection from 127.0.0.1:3548
b'\x05\x01\x00'
b'\x05\x00'
<socket.socket fd=804, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 3551), raddr=('127.0.0.1', 40000)>
b'\x05\x01\x00\x01'
5 0 0 1 127.0.0.1 (40000,)
INFO:root:Accepting connection from 127.0.0.1:3631
b'\x05\x01\x00'
b'\x05\x00'
<socket.socket fd=768, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 3634), raddr=('127.0.0.1', 40000)>
b'\x05\x01\x00\x01'
5 0 0 1 127.0.0.1 (40000,)
INFO:root:Accepting connection from 127.0.0.1:3874
b'\x05\x01\x00'
b'\x05\x00'
<socket.socket fd=1336, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 3877), raddr=('127.0.0.1', 40000)>
b'\x05\x01\x00\x01'
5 0 0 1 127.0.0.1 (40000,)
```

## bug

实在是太讨厌了！我辛辛苦苦查资料， 写代码， 最后却蹦出来一个我无法修复的bug:cry:

在我登录hypixel时候， 完了几分钟客户端出现了这样的提示， 并把我踢出服务器

- Internal Exception: io.netty.handler.codec.DecoderException: java.util.zip.DataFormatException: incorrect header check
- Internal Exception: io.netty.handler.codec.DecoderException: Badly compressed packet - size of 1531896730 is larger than protocol maximum of 2097152
- Internal Exception: io.netty.handler.codec.CorruptedFrameException: length wider than 21-bit
- Internal Exception: io.netty.handler.codec.DecoderException: java.util.zip.DataFormatException: incorrect header check
- Internal Exception: io.netty.handler.codec.CorruptedFrameException: length wider than 21-bit (I know, this one repeated, they do that too)
- Internal Exception: io.netty.handler.codec.DecoderException: Badly compressed packet - size of 11478809 is larger than protocal maximum of 2097152
- Internal Exception: io.netty.handler.codec.DecoderException: Badly compressed packet - size of 102 is below server threshold of 256

![](2.png)

## 参考资料

- [https://en.wikipedia.org/wiki/SOCKS#SOCKS5](https://en.wikipedia.org/wiki/SOCKS#SOCKS5)
- [https://python3-cookbook.readthedocs.io/zh_CN/latest/c11/p02_creating_tcp_server.html#](https://python3-cookbook.readthedocs.io/zh_CN/latest/c11/p02_creating_tcp_server.html#)
- [https://docs.python.org/zh-cn/3/library/struct.html](https://docs.python.org/zh-cn/3/library/struct.html)
- [https://docs.python.org/zh-cn/3/library/socketserver.html#module-socketserver](https://docs.python.org/zh-cn/3/library/socketserver.html#module-socketserver)
- [https://wiki.vg/Protocol#Definitions](https://wiki.vg/Protocol#Definitions)
- https://github.com/rushter/socks5/blob/master/server.py
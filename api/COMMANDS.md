lsof -i tcp:80

COMMAND     PID            USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    pid_num        username   29u  IPv6 0x9dd63c4958a799a3      0t0  TCP *:http (LISTEN)

kill -9 pid_num 

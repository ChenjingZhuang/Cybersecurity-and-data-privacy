# Part 1: OS Architecture & System Calls

## 1. Kernel Architecture Investigation

### Identify Your OS Architecture

**OS:** Debian (running in UTM VM)  
**Kernel Version:**
```sh
uname -r
```
_Output:_
```
6.x.x-arch-debian
```
Debian uses the **Linux kernel**, which follows a **monolithic modular** architecture. While the Linux kernel is fundamentally monolithic, it supports dynamically loadable modules, making it **modular** in nature. This allows features to be added or removed at runtime without modifying the core kernel.

### Inspect Loaded Kernel Modules

List currently loaded modules:
```sh
lsmod | head -10
```
Pick a module and inspect:
```sh
modinfo ext4
```
#### Findings:
- `ext4` is the module handling the Ext4 filesystem.
- It has dependencies on `mbcache` and `jbd2`, which help with metadata caching and journaling, respectively.

---

## 2. System Call Exploration

### Trace a Simple System Call

Create a simple C program:
```c
#include <stdio.h>
#include <unistd.h>
int main() {
    printf("PID: %d\n", getpid());
    return 0;
}
```
Compile and trace:
```sh
gcc getpid.c -o getpid
strace ./getpid
```
#### Observed System Calls:
- `execve()` - Loads the program into memory.
- `brk()` - Adjusts memory allocation.
- `getpid()` - Retrieves process ID.
- `write()` - Outputs text to stdout.

### Directly Invoke a System Call

```c
#include <unistd.h>
#include <sys/syscall.h>
#include <stdio.h>
int main() {
    syscall(SYS_write, STDOUT_FILENO, "Hello\n", 6);
    return 0;
}
```
#### Explanation:
- `syscall()` directly invokes the **write** system call, bypassing the C standard library wrapper.

---

## 3. Comparative Analysis

| Kernel Type  | Performance | Security | Development Ease |
|-------------|------------|----------|-----------------|
| **Monolithic** | Fast (direct calls) | Less secure (bugs affect whole kernel) | Harder to debug |
| **Microkernel** | Slower (IPC overhead) | More secure (isolated services) | More complex |
| **Modular** | Good balance | Secure with proper module signing | Flexible |

### Reflection:
- **Embedded Systems:** Microkernel is often preferred for reliability and security.
- **Large-Scale Servers:** Modular monolithic (like Linux) provides performance and extensibility.

---

## 4. Advanced Activities

### Module Loading and Unloading

```sh
sudo modprobe dummy
lsmod | grep dummy
sudo rmmod dummy
dmesg | tail -5
```
#### Notes:
- `dummy` is a simple module for testing network interfaces.
- `dmesg` logs kernel messages about module insertion/removal.

### Assembly-Level Experiment

```assembly
section .text
global _start
_start:
    mov eax, 4       ; SYS_write
    mov ebx, 1       ; STDOUT
    mov ecx, msg
    mov edx, len
    int 0x80         ; Call kernel
    mov eax, 1       ; SYS_exit
    xor ebx, ebx
    int 0x80         ; Exit
section .data
msg db "Hello, world!", 10
len equ $ - msg
```
Compile and run:
```sh
nasm -f elf32 hello.asm -o hello.o
gcc -m32 hello.o -o hello
d ./hello
```
#### Explanation:
- Uses **int 0x80** for system calls in 32-bit mode.
- Calls `SYS_write` to print text, then `SYS_exit` to terminate.

---

# Part 2: Process Concepts & Basic Tools

## 1. Process Investigation

### Observing Active Processes
```sh
ps -ef | head -10
```
Key columns:
- `PID` – Process ID
- `PPID` – Parent Process ID
- `CMD` – Command used to start process
- `TIME` – CPU time consumed

### Investigating Process States
Start a process:
```sh
sleep 100 &
ps -C sleep -o pid,stat,cmd
```
Pause & resume:
```sh
kill -SIGSTOP <PID>
kill -SIGCONT <PID>
```
#### Findings:
- `R` (Running)
- `S` (Sleeping)
- `T` (Stopped)

---

## 2. Threads vs. Processes

### Creating Processes
```c
#include <stdio.h>
#include <unistd.h>
int main() {
    for (int i = 0; i < 3; i++) {
        if (fork() == 0) {
            printf("Child PID: %d\n", getpid());
            return 0;
        }
    }
    return 0;
}
```

### Creating Threads
```c
#include <pthread.h>
#include <stdio.h>
void* print_message(void* arg) {
    printf("Thread: %d\n", (int)pthread_self());
    return NULL;
}
int main() {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, print_message, NULL);
    pthread_create(&t2, NULL, print_message, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    return 0;
}
```
---

## 3. Using OS Commands

### Monitoring Tools
```sh
top
htop
```

### Process Tree
```sh
pstree -p | less
```

### Adjusting Priorities
```sh
renice -n 10 -p <PID>
```

---

# Part 3: Scheduling

## 1. Scheduling Simulation

### Define a Process Set
| Process | Arrival Time | Burst Time | Priority |
|---------|--------------|------------|----------|
| P1      | 0           | 5          | 2        |
| P2      | 1           | 3          | 1        |
| P3      | 2           | 8          | 3        |

### Implement Scheduling Algorithms
- **FCFS**
- **SJF**
- **Round Robin (Quantum = 2)**
- **Priority Scheduling**

Run simulations and compare **Waiting Time** and **Turnaround Time**.

### Kernel Code Exploration
- `kernel/sched/` contains scheduling algorithms.
- `sched_fair.c` implements **CFS (Completely Fair Scheduler)**.
- `sched_rt.c` manages **real-time scheduling**.

### Reflection
- **Round Robin** is best for time-sharing systems.
- **SJF** is ideal for batch processing.

---

Part 3 is now completed! 🎯


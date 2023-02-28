---
title:  写一个c语言解释器
date: 2022-3-27 20:12:52
tags: [编译器, c]
categories: c 
---

# 写一个c语言解释器-p1

最近学习了一篇教你如何写一个c语言~~~编译器~~(解释器)的[教程](https://github.com/lotabout/write-a-C-interpreter)。我把我学习过程中踩过的坑与体会到的心得记录在这里。

首先需要明确的是编译器有两部分构成--词法解析器与语法分析器。词法解析是将源代码标记方便语法分析。语法分析则是将代码按照语言规则编译成汇编代码的东西。

## 写一个虚拟机

此编译器采用的汇编是属于自创的语言，相比正统汇编简化了许多。我首先要实现的是这个汇编的解释器。相当于一个虚拟机。在这个虚拟机里面模拟了寄存器内存等部件。

像printf这种系统函数该虚拟机提供了系统指令PRTF等等（喂，一个汇编语言为什么要提供这种奇奇怪怪的指令啊。

### 汇编的指令表（部分

```
1. imm <num> 将 <num> 放入ax
2. lc (load char) 将*ax当作字符载入到ax
3. li (load int)
4. sc (save char) 将ax的数据作为字符存入sp所指的位置
5. si (save int)
6. push 将ax存入栈顶`*--sp = ax`
7. jmp <addr> 将pc设置为<addr> `pc = (int *)*pc`  # pc存放下一条指令也就是jmp的参数<addr>
8. jz/jnz (jump if zero/jump if not zero) `pc = ax ? pc + 1: (int *)*pc`
9. call <addr> 调用子函数 `*--sp = (int)(pc+1); pc = (int *)*pc`
10. ret 函数返回 `pc = (int *)*sp++`
11. ent <size> 新建一个调用栈并开辟空间 `*--sp=bp;bp=sp;sp=sp-*pc++;`
12. adj <size> 清除调用子函数时压入的数据 `sp = sp + *pc++`
13. lev `sp = bp;bp=*sp++;pc=*sp++`
14. lea <offset> 取参数 `ax=bp+*pc++`
```

### 虚拟机中的三个变量

text 是存汇编代码（字节码）的变量
stack 是虚拟出来啊内存中的栈
data 是虚拟出来的内存中的堆
ax，pc，sp是三个寄存器（这个汇编语言只需要三个寄存器就可以了，而我们的cpu有几十个寄存器）

**具体代码**

```c
int eval() {
    int op, *tmp;
    cycle = 0;
    while (1) {
        cycle ++;
        op = *pc++; // get next operation code

        // print debug info
        if (debug) 
            printf("%d> %.4s", cycle,
                   & "LEA ,IMM ,JMP ,CALL,JZ  ,JNZ ,ENT ,ADJ ,LEV ,LI  ,LC  ,SI  ,SC  ,PUSH,"
                     "OR  ,XOR ,AND ,EQ  ,NE  ,LT  ,GT  ,LE  ,GE  ,SHL ,SHR ,ADD ,SUB ,MUL ,DIV ,MOD ,"
                     "OPEN,READ,CLOS,PRTF,MALC,MSET,MCMP,EXIT"[op * 5]);
            if (op <= ADJ)
                printf(" %d\n", *pc);
            else
                printf("\n");
        }
        if (op == IMM)       {ax = *pc++;}                                     // load immediate value to ax
        else if (op == LC)   {ax = *(char *)ax;}                               // load character to ax, address in ax
        else if (op == LI)   {ax = *(int *)ax;}                                // load integer to ax, address in ax
        else if (op == SC)   {ax = *(char *)*sp++ = ax;}                       // save character to address, value in ax, address on stack
        else if (op == SI)   {*(int *)*sp++ = ax;}                             // save integer to address, value in ax, address on stack
        else if (op == PUSH) {*--sp = ax;}                                     // push the value of ax onto the stack
        else if (op == JMP)  {pc = (int *)*pc;}                                // jump to the address
        else if (op == JZ)   {pc = ax ? pc + 1 : (int *)*pc;}                   // jump if ax is zero
        else if (op == JNZ)  {pc = ax ? (int *)*pc : pc + 1;}                   // jump if ax is not zero
        else if (op == CALL) {*--sp = (int)(pc+1); pc = (int *)*pc;}           // call subroutine
        //else if (op == RET)  {pc = (int *)*sp++;}                              // return from subroutine;
        else if (op == ENT)  {*--sp = (int)bp; bp = sp; sp = sp - *pc++;}      // make new stack frame
        else if (op == ADJ)  {sp = sp + *pc++;}                                // add esp, <size>
        else if (op == LEV)  {sp = bp; bp = (int *)*sp++; pc = (int *)*sp++;}  // restore call frame and PC
        else if (op == LEA)  {ax = (int)(bp + *pc++);}                         // load address for arguments.

        else if (op == OR)  ax = *sp++ | ax;
        else if (op == XOR) ax = *sp++ ^ ax;
        else if (op == AND) ax = *sp++ & ax;
        else if (op == EQ)  ax = *sp++ == ax;
        else if (op == NE)  ax = *sp++ != ax;
        else if (op == LT)  ax = *sp++ < ax;
        else if (op == LE)  ax = *sp++ <= ax;
        else if (op == GT)  ax = *sp++ >  ax;
        else if (op == GE)  ax = *sp++ >= ax;
        else if (op == SHL) ax = *sp++ << ax;
        else if (op == SHR) ax = *sp++ >> ax;
        else if (op == ADD) ax = *sp++ + ax;
        else if (op == SUB) ax = *sp++ - ax;
        else if (op == MUL) ax = *sp++ * ax;
        else if (op == DIV) ax = *sp++ / ax;
        else if (op == MOD) ax = *sp++ % ax;

        else if (op == EXIT) { printf("exit(%d)", *sp); return *sp;}
        else if (op == OPEN) { ax = open((char *)sp[1], sp[0]); }
        else if (op == CLOS) { ax = close(*sp);}
        else if (op == READ) { ax = read(sp[2], (char *)sp[1], *sp); }
        else if (op == PRTF) { tmp = sp + pc[1]; ax = printf((char *)tmp[-1], tmp[-2], tmp[-3], tmp[-4], tmp[-5], tmp[-6]); }
        else if (op == MALC) { ax = (int)malloc(*sp);}
        else if (op == MSET) { ax = (int)memset((char *)sp[2], sp[1], *sp);}
        else if (op == MCMP) { ax = memcmp((char *)sp[2], (char *)sp[1], *sp);}
        else {
            printf("unknown instruction:%d\n", op);
            return -1;
        }
    }
}
```

上面这一段代码就是模仿cpu运行指令的操作，pc寄存器不断+1，读取新的指令，然后执行普通指令，操作ax，sp，bp，pc寄存器进行逻辑运算，执行系统指令READ读取文件，PRTF进行系统IO操作。

## 写一个词法分析器

把源代码变成标记的形式，把上面这段代码经过词法分析标记后变成下面的样子。

```c
#include <stdio.h>

int print_hello() {
  printf("Hello, World!\n");
  return 0;
}

int main() {
    printf("hello, world %c\n", 'a');
    return 0;
}
```

```tk: 138, tk_val: 0
tk: 133, tk_val: 0, current_id[Name]: "print_hello", current_id[Class]: 0
tk: '(', tk_val: 0
tk: ')', tk_val: 0
tk: '{', tk_val: 0
tk: 133, tk_val: 0, current_id[Name]: "printf", current_id[Class]: 130
tk: '(', tk_val: 0
tk: '"', tk_val: 7733408
tk: ')', tk_val: 7733408
tk: ';', tk_val: 7733408
tk: 139, tk_val: 7733408
tk: 128, tk_val: 0
tk: ';', tk_val: 0
tk: '}', tk_val: 0
tk: 138, tk_val: 0
tk: 133, tk_val: 0, current_id[Name]: "main", current_id[Class]: 0
tk: '(', tk_val: 0
tk: ')', tk_val: 0
tk: '{', tk_val: 0
tk: 133, tk_val: 0, current_id[Name]: "printf", current_id[Class]: 130
tk: '(', tk_val: 0
tk: '"', tk_val: 7733424
tk: ',', tk_val: 7733424
tk: 128, tk_val: 97
tk: ')', tk_val: 97
tk: ';', tk_val: 97
tk: 139, tk_val: 97
tk: 128, tk_val: 0
tk: ';', tk_val: 0
tk: '}', tk_val: 0
tk: 0, tk_val: 0
```

定义函数next()这个就是词法分析函数。每次运行next()，则返回下一个标记。

## 写一个语法分析器

这里只对表达式部分进行介绍。

```c
void expression(int level)
```

当运行了这个函数之后。这个函数读取源代码（进行词法分析后的源代码，然后生成指令，计算表达式的值。无论如何当虚拟机运行到这段汇编代码的时候，ax为该表达式的值。level是这个表达式的优先级。

单目运算符的优先级总是高于双目运算符的优先级
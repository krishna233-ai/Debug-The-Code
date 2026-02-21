var Levels = {
c:{easy:[],medium:[],hard:[]},
cpp:{easy:[],medium:[],hard:[]},
java:{easy:[],medium:[],hard:[]},
python:{easy:[],medium:[],hard:[]}
};

// C
Levels.c.easy.push({code:["int a=5","missing semicolon"],answer:0});
Levels.c.medium.push({code:["int a=5;","if(a=10)"],answer:1});
Levels.c.hard.push({code:["int a=5,b=0;","a/b"],answer:1});

// C++
Levels.cpp.easy.push({code:["cout << Hello"],answer:0});
Levels.cpp.medium.push({code:["int a=5;","if(a=10)"],answer:1});
Levels.cpp.hard.push({code:["int *p;","*p=5"],answer:0});

// Java
Levels.java.easy.push({code:["System.out.println(Hello);"],answer:0});
Levels.java.medium.push({code:["int a=5;","if(a=10)"],answer:1});
Levels.java.hard.push({code:["int a=5/0;"],answer:0});

// Python
Levels.python.easy.push({code:["print Hello"],answer:0});
Levels.python.medium.push({code:["if x=5:"],answer:0});
Levels.python.hard.push({code:["while True:"],answer:0});

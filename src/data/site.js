export const site = {name:'Weijian LI',username:'cdsee045',description:'学习、记录与实践。',github:'https://github.com/cdsee045'};
export const projects = [
 {name:'Atricles',tag:'学习记录',description:'记录日常遇到的问题以及学习笔记。',url:'https://github.com/cdsee045/Atricles'},
 {name:'FER',tag:'课程项目',description:'表情识别大作业。',url:'https://github.com/cdsee045/FER'},
 {name:'Notes',tag:'笔记仓库',description:'公开笔记仓库。',url:'https://github.com/cdsee045/Notes'},
 {name:'FER_model',tag:'模型仓库',description:'表情识别相关仓库。',url:'https://github.com/cdsee045/FER_model'}
];
export const tools = [
 ['GitHub','开发工具','代码托管与开源项目','https://github.com/'],
 ['Python 文档','开发工具','Python 语言与标准库参考','https://docs.python.org/zh-cn/3/'],
 ['MDN','开发工具','Web 开发文档','https://developer.mozilla.org/zh-CN/'],
 ['ROS 2 文档','机器人与控制','ROS 2 开发文档','https://docs.ros.org/'],
 ['MATLAB 文档','机器人与控制','数值计算与控制系统参考','https://www.mathworks.com/help/'],
 ['NumPy','数据分析','数组与数值计算文档','https://numpy.org/doc/'],
 ['pandas','数据分析','数据处理与分析文档','https://pandas.pydata.org/docs/'],
 ['Overleaf','写作工具','在线 LaTeX 编辑','https://www.overleaf.com/'],
 ['Markdown Guide','写作工具','Markdown 语法参考','https://www.markdownguide.org/']
].map(([name,category,description,url])=>({name,category,description,url}));

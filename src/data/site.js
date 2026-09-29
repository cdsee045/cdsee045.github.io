export const site = {name:'Weijian LI',username:'cdsee045',description:'学习、记录与实践。',github:'https://github.com/cdsee045'};
export const projects = [
 // 项目介绍
 {name:'Atricles',tag:'学习记录',description:'记录日常遇到的问题以及学习笔记。',url:'https://github.com/cdsee045/Atricles'},
 {name:'FER',tag:'课程项目',description:'表情识别大作业。',url:'https://github.com/cdsee045/FER'},
 {name:'Notes',tag:'笔记仓库',description:'公开笔记仓库。',url:'https://github.com/cdsee045/Notes'},
 {name:'FER_model',tag:'模型仓库',description:'表情识别相关仓库。',url:'https://github.com/cdsee045/FER_model'}
];
export const tools = [
  // 工具导航：最后一项为排序名称，中文名称也按常用英文名参与排序。
  ['哔哩哔哩','社交媒体','','https://www.bilibili.com/','/images/tools/bilibili.ico','Bilibili'],
  ['ChatGPT','AI工具','openai旗下的chatgpt','https://chatgpt.com/','/images/tools/chatgpt.webp','ChatGPT'],
  ['DeepSeek','AI工具','deepseek','https://www.deepseek.com/','/images/tools/deepseek.ico','DeepSeek'],
  ['Gemini','AI工具','谷/歌旗下的Gemini','https://gemini.google.com/app','/images/tools/gemini.png','Gemini'],
  ['GitHub','社交媒体','','https://github.com/','/images/tools/github.svg','GitHub'],
  ['I love PDF','在线工具','在线pdf工具，格式转换','https://www.ilovepdf.com/zh-cn','/images/tools/ilovepdf.png','I love PDF'],
  ['imgdiet','在线工具','在线图片编辑工具','https://www.imgdiet.com/zh-CN','/images/tools/imgdiet.ico','imgdiet'],
  ['IPPure','在线工具','IP检测工具','https://ippure.com/','/images/tools/ippure.png','IPPure'],
  ['LinuxDo','社交媒体','','https://linux.do/','/images/tools/linuxdo.svg','LinuxDo'],
  ['小红书','社交媒体','','https://www.xiaohongshu.com/explore','/images/tools/xiaohongshu.png','Xiaohongshu'],
  ['Z-Library','在线工具','免费电子书','https://z-library.bz/','/images/tools/z-library.png','Z-Library'],
  ['知乎','社交媒体','','https://www.zhihu.com/','/images/tools/zhihu.ico','Zhihu'],
]
  .map(([name,category,description,url,image,sortName])=>({name,category,description,url,image,sortName}))
  .sort((a,b)=>a.sortName.localeCompare(b.sortName,'en',{sensitivity:'base'}));

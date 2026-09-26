// Homepage content: provide both en and zh for each translated field.
export const profile = {
  name: 'Weijian Li',
  avatar: '/medias/avatar.jpg',
  email: 'weijianli@tju.edu.cn',
  github: 'https://github.com/cdsee045',
  bilibili: 'https://www.bilibili.com/',
  role: { en: 'Prospective Master’s Student · Control Science', zh: '控制科学方向硕士生（预计 2027 年入学）' },
  affiliation: { en: 'Undergraduate · Tianjin University', zh: '天津大学 · 本科在读' },
  interests: { en: 'Control science, Blender rendering', zh: '控制科学、Blender 渲染' },
  introduction: {
    en: 'Hi, I’m Weijian Li (李威检). I am currently completing my undergraduate studies in Automation at Tianjin University. I am also learning Blender rendering.',
    zh: '你好，我是李威检，目前正在天津大学完成自动化专业的本科学习，也正在学习 Blender 渲染。',
  },
  education: [
    { code: 'TJU', school: { en: 'Tianjin University', zh: '天津大学' }, degree: { en: 'Undergraduate · Automation', zh: '本科生 · 自动化' }, period: { en: '2023 — 2027', zh: '2023 — 2027' }, status: { en: 'In progress', zh: '在读' } },
    { code: 'BUAA', school: { en: 'Beihang University', zh: '北京航空航天大学' }, degree: { en: 'Master’s · Control Science and Engineering', zh: '硕士生 · 控制科学与工程' }, period: { en: '2027 —', zh: '2027 —' }, status: { en: 'Expected enrollment in 2027', zh: '预计 2027 年入学' } },
  ],
  // Example: { name: {en: 'Project', zh: '项目'}, description: {en: 'Description', zh: '介绍'}, url: 'https://...' }
  featuredProjects: [],
  experiences: [],
};

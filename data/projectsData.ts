interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tempi.vn',
    description:
      "Tempi.vn is a Vietnamese website that helps you create a website or landing page for free. You don't need to know any coding or design skills. You can use the drag-and-drop interface to create a website that looks great and is easy to use. It allows users to create and customize their own landing pages with various templates, features, and integrations. Tempi.vn is a product of Teko Vietnam and I am mainly involved in this project.",
    imgSrc: '/static/projects/tempi.png',
    href: 'https://tempi.vn/',
  },
  {
    title: 'Hoclieu.vn',
    description:
      'Hoclieu.vn is an online learning platform that provides Vietnamese students with access to a variety of educational resources, including textbooks, practice problems, and video lessons. It is a product developed for Vietnam Education Publishing House by Sao Khue Software Services LTD.',
    imgSrc: '/static/projects/hoclieu.png',
    href: 'https://hoclieu.vn/',
  },
  {
    title: 'DiDauTiep.vn',
    description:
      'DiDauTiep.vn is a Vietnamese website that helps you find the best places to eat, drink, and relax. It is a product of DiDauTiep Corp and I am mainly involved in this project.',
    imgSrc: '/static/projects/didautiep.webp',
    href: 'https://didautiep.vn/',
  },

  {
    title: 'Easy Accommod',
    description:
      'A user-friendly accommodation search system designed to cater to the needs of both accommodation owners and renters, enabling owners to effortlessly post information and find potential tenants, while assisting renters in easily discovering the perfect accommodation that matches their specific requirements.',
    imgSrc: '/static/projects/easyaccommod.png',
    href: 'https://github.com/NoCtrlZ1110/EasyAccommod',
  },
  {
    title: 'SGUET News',
    description:
      "A tool that helps the SGUET fanpage's admin/editor create UET's news images automatically. The images will be used in news update posts that contain a lot of necessary information for UET students.",
    imgSrc: '/static/projects/sguetnews.png',
    href: 'https://noctrlz1110.github.io/sguet-news/',
  },
  {
    title: 'UET - Get News',
    description:
      'This is a chatbot on the Messenger platform. As long as a news post is released on the UET website, the chatbot sends a notification to every student who has subscribed. Show the latest news list to users. Corona tracking: tracking COVID-19 statistics in real-time and sending notifications to subscribed users.',
    imgSrc: '/static/projects/uetgetnews.png',
    href: 'https://www.facebook.com/UETgetNews',
  },
  {
    title: 'DoraJump',
    description: 'A funny game whose gameplay learns from the Doodle Jump game on mobile.',
    imgSrc: '/static/projects/dorajump.png',
    href: 'https://docs.google.com/presentation/d/1WjLtebtU2DmCUH_L2BnjOLPuE25OBiu6BICSWpkE65M/edit?usp=sharing',
  },
  {
    title: 'Tower Defense',
    description:
      'An immersive and strategic game where players strategically construct powerful towers to fend off relentless enemies and ensure their swift defeat before they can breach the ultimate finish line.',
    imgSrc: '/static/projects/towerdefense.png',
    href: 'https://docs.google.com/document/d/1quSB1ZJkx_ctqOhkxQGB_d_EU2ZQfDO5V0YLdsMUNwQ/edit?usp=sharing',
  },
  {
    title: 'E-Garden',
    description: 'A mobile app for learning English.',
    imgSrc: '/static/projects/egarden.png',
    href: 'https://docs.google.com/presentation/d/1nkrBZ-FkiwaaTJTSyJgIqTIugQtPj9AC6mGuR3kgtqU/edit?usp=sharing',
  },
]

export default projectsData

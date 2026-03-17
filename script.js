
// ================= Menu icon navbar =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active');  
};

// ================= Scroll Section =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  // =============== Stick navbar ==================

    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

  // =================== remove menu icon navbar when click navbar link(scroll) =======================
  menuIcon.classList.remove('bx-x'); 
  navbar.classList.remove('active'); 


};

// ========== Dark Light Mode ==========

let darkModeIcon =document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () =>{
  darkModeIcon.classList.toggle ('bx-sun');  
  document.body.classList.toggle('dark-mode');
};

// ========== Language Toggle ==========
let currentLanguage = 'en';
let languageSwitch = document.querySelector('#language-switch');
let langText = document.querySelector('#lang-text');

// Language translations
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    project: 'Project',
    activities: 'Activities',
    contact: 'Contact',
    
    // Home section
    hello: 'Hello, I am',
    name: 'Huynh Cong Tien',
    homeDescription: 'Welcome to my portfolio! I\'m a passionate programmer who loves bringing ideas to life through simple, effective, and well-designed software. ',
    homeDescription2: 'Feel free to explore this portfolio to learn more about my projects, skills, and how I can help bring your ideas to life.',
    
    // About section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Hi, I\'m Here To Help You Next Project!',
    aboutDescription: 'As a final-year Information Technology student, I have a solid foundation in software development with hands-on experience in Back-End projects using Java Spring Boot, combined with React for building user interfaces. I\'m also proficient in using Figma and Canvas for UI design, Postman for API testing, and have strong knowledge of databases such as MySQL and SQL Server. In addition to technical skills, I possess strong communication abilities, a high sense of self-learning, and a proactive attitude toward exploring new technologies. I\'m driven by a continuous desire to grow and improve in the tech industry.',
    skillsTitle: 'Core Skills',
    skillsHeading: 'My Skills',
    languagesTitle: 'Languages',
    frameworksTitle: 'Frameworks',
    toolsTitle: 'Tools',
    readMore: 'Read More',
    
    // Portfolio section
    latestProject: 'Latest Project',
    
    // Activities section
    activitiesTitle: 'Academic & Extracurricular Activities',
    scientificResearch: 'Scientific Research 2025',
    scientificDescription: 'Participated in a university-level scientific research activity; presented the project before an academic committee; developed critical thinking, data analysis, and scientific report writing skills.',
    techChallenge: 'Tech Innovators Challenge 2025',
    techDescription: 'The "Tech Innovators Challenge" competition organized by the Faculty of Information Technology is one of the key academic activities in the 2024-2025 academic year.',
    workshopsTitle: 'Workshops',
    workshopsDescription: 'Actively participated in workshops and seminars to develop soft skills such as communication, teamwork, and critical thinking.',
      
    // Contact section
    contactTitle: 'Contact Me!',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    location: 'Location',
    locationName: 'Ho Chi Minh City, Vietnam',
    callNow: 'Call Now',
    sendEmail: 'Send Email',
    viewMap: 'View Map',
    followMe: 'Follow Me On',
    workTogether: 'Let\'s Work Together!',
    workDescription: 'I\'m always excited to take on new challenges and collaborate on innovative projects. Whether you have a specific idea in mind or just want to explore possibilities, I\'d love to hear from you!',
    startProject: 'Start a Project',
  },
  
  vi: {
    // Navigation
    home: 'Trang Chủ',
    about: 'Giới Thiệu',
    skills: 'Kỹ Năng',
    project: 'Dự Án',
    activities: 'Hoạt Động',
    contact: 'Liên Hệ',
    
    // Home section
    hello: 'Xin chào, tôi là',
    name: 'Huỳnh Công Tiến',
    homeDescription: 'Chào bạn, cảm ơn đã ghé thăm portfolio của tui! Tui là một lập trình viên yêu thích việc tạo ra những phần mềm đơn giản, dễ dùng và dễ nhìn.',
    homeDescription2: 'Mời bạn xem qua các dự án tui đã làm và nếu bạn có ý tưởng nào đang ấp ủ, biết đâu chúng ta có thể cùng nhau biến nó thành hiện thực.',
    
    // About section
    aboutTitle: 'Giới Thiệu Về Công Tiến',
    aboutSubtitle: 'Xin chào, tui ở đây để cùng bạn thực hiện dự án tiếp theo!',
    aboutDescription: 'Là sinh viên vừa tốt nghiệp ngành Công nghệ Thông tin, tôi có nền tảng vững chắc trong phát triển phần mềm với kinh nghiệm thực tế trong các dự án Back-End sử dụng Java Spring Boot, kết hợp với React để xây dựng giao diện người dùng. Tôi cũng thành thạo trong việc sử dụng Figma và Canvas cho thiết kế UI, Postman để test API, và có kiến thức vững về cơ sở dữ liệu như MySQL và SQL Server. Ngoài kỹ năng kỹ thuật, tôi sở hữu khả năng giao tiếp tốt, tinh thần tự học cao và thái độ chủ động trong việc khám phá các công nghệ mới.',
    skillsTitle: 'Kỹ Năng Nổi Bật',
    skillsHeading: 'Kỹ Năng Của Tôi',
    languagesTitle: 'Ngôn Ngữ',
    frameworksTitle: 'Framework',
    toolsTitle: 'Công Cụ',
    
    // Portfolio section
    latestProject: 'Dự Án Mới Nhất',
    
    // Activities section
    activitiesTitle: 'Hoạt Động Học Thuật & Ngoại Khóa',
    scientificResearch: 'Nghiên Cứu Khoa Học 2025',
    scientificDescription: 'Tham gia hoạt động nghiên cứu khoa học cấp trường, trình bày dự án trước hội đồng học thuật, phát triển tư duy phản biện, phân tích dữ liệu và kỹ năng viết báo cáo khoa học.',
    techChallenge: 'Tech Innovators Challenge 2025',
    techDescription: 'Cuộc thi "Tech Innovators Challenge" do Khoa Công nghệ Thông tin tổ chức là một trong những hoạt động học thuật quan trọng trong năm học 2024-2025.',
    workshopsTitle: 'Hội Thảo',
    workshopsDescription: 'Tích cực tham gia các hội thảo và seminar để phát triển kỹ năng mềm như giao tiếp, làm việc nhóm và tư duy phản biện.',
    
    
    // Contact section
    contactTitle: 'Liên Hệ Với Tôi!',
    phoneNumber: 'Số Điện Thoại',
    emailAddress: 'Địa Chỉ Email',
    location: 'Địa Điểm',
    locationName: 'Thành phố Hồ Chí Minh, Việt Nam',
    callNow: 'Gọi Ngay',
    sendEmail: 'Gửi Email',
    viewMap: 'Xem Bản Đồ',
    followMe: 'Theo Dõi Tôi Trên',
    workTogether: 'Hãy Cùng Làm Việc!',
    workDescription: 'Tôi luôn hào hứng đón nhận những thử thách mới và hợp tác trong các dự án sáng tạo. Dù bạn có ý tưởng cụ thể hay chỉ muốn khám phá các khả năng, tôi rất mong được nghe từ bạn!',
    startProject: 'Bắt Đầu Dự Án',
    
  }
};

function updateLanguage(lang) {
  const t = translations[lang];
  
  // Update font family based on language
  if (lang === 'vi') {
    document.body.classList.add('vietnamese-font');
  } else {
    document.body.classList.remove('vietnamese-font');
  }
  
  try {
    // Update navigation
    const navLinks = {
      'a[href="#home"]': t.home,
      'a[href="#about"]': t.about,
      'a[href="#skills"]': t.skills,
      'a[href="#portfolio"]': t.project,
      'a[href="#activities"]': t.activities,
      'a[href="#contact"]': t.contact
    };
    
    Object.entries(navLinks).forEach(([selector, text]) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = text;
    });
    
    // Update home section
    const homeH3 = document.querySelector('.home-content h3');
    const homeH1 = document.querySelector('.home-content h1');
    const homeParagraph = document.querySelector('.home-content p');
    
    if (homeH3) homeH3.textContent = t.hello;
    if (homeH1) homeH1.textContent = t.name;
    if (homeParagraph) homeParagraph.innerHTML = t.homeDescription + t.homeDescription2;
    
    // Update about section
    const aboutH2 = document.querySelector('.about-content h2');
    const aboutH3 = document.querySelector('.about-content h3');
    const aboutP = document.querySelector('.about-content p');
    const aboutBtn = document.querySelector('.about-content .btn');
    const skillsTitle = document.querySelector('.skills-title');
    const skillsHeading = document.querySelector('.skills .heading');
    const languagesHeading = document.querySelector('.languages-heading');
    const frameworksHeading = document.querySelector('.frameworks-heading');
    const toolsHeading = document.querySelector('.tools-heading');
    
    if (aboutH2) {
      if (lang === 'vi') {
        aboutH2.innerHTML = 'Giới Thiệu Về <span>Tôi</span>';
      } else {
        aboutH2.innerHTML = 'About <span>Me</span>';
      }
    }
    if (aboutH3) aboutH3.textContent = t.aboutSubtitle;
    if (aboutP) aboutP.textContent = t.aboutDescription;
    if (aboutBtn) aboutBtn.textContent = t.readMore;
    if (skillsHeading) {
      if (lang === 'vi') {
        skillsHeading.innerHTML = 'Kỹ Năng <span>Của Tôi</span>';
      } else {
        skillsHeading.innerHTML = 'My <span>Skills</span>';
      }
    }
    if (skillsTitle) skillsTitle.textContent = t.skillsTitle;
    if (languagesHeading) languagesHeading.textContent = t.languagesTitle;
    if (frameworksHeading) frameworksHeading.textContent = t.frameworksTitle;
    if (toolsHeading) toolsHeading.textContent = t.toolsTitle;
  
  // Update portfolio section
  const portfolioHeading = document.querySelector('.portfolio .heading');
  if (portfolioHeading) {
    if (lang === 'vi') {
      portfolioHeading.innerHTML = 'Dự Án <span>Mới Nhất</span>';
    } else {
      portfolioHeading.innerHTML = 'Latest <span>Project</span>';
    }
  }
  
  // Update activities section
  const activitiesHeading = document.querySelector('.activities .heading');
  if (activitiesHeading) {
    if (lang === 'vi') {
      activitiesHeading.innerHTML = 'Hoạt Động Học Thuật & <span>Ngoại Khóa</span>';
    } else {
      activitiesHeading.innerHTML = 'Academic & <span>Extracurricular Activities</span>';
    }
  }
  
  const activityTitles = document.querySelectorAll('.activity-content h4');
  const activityDescriptions = document.querySelectorAll('.activity-content p');
  
  if (activityTitles[0]) activityTitles[0].textContent = t.scientificResearch;
  if (activityDescriptions[0]) activityDescriptions[0].textContent = t.scientificDescription;
  
  if (activityTitles[1]) activityTitles[1].textContent = t.techChallenge;
  if (activityDescriptions[1]) activityDescriptions[1].textContent = t.techDescription;
  
  if (activityTitles[2]) activityTitles[2].textContent = t.workshopsTitle;
  if (activityDescriptions[2]) activityDescriptions[2].textContent = t.workshopsDescription;
  
  // Update contact section
  const contactHeading = document.querySelector('.contact .heading');
  if (contactHeading) {
    if (lang === 'vi') {
      contactHeading.innerHTML = 'Liên Hệ <span>Với Tôi!</span>';
    } else {
      contactHeading.innerHTML = 'Contact <span>Me!</span>';
    }
  }
  
  const contactHeaders = document.querySelectorAll('.contact-details h3');
  const contactButtons = document.querySelectorAll('.contact-link');
  
  if (contactHeaders[0]) contactHeaders[0].textContent = t.phoneNumber;
  if (contactHeaders[1]) contactHeaders[1].textContent = t.emailAddress;
  if (contactHeaders[2]) contactHeaders[2].textContent = t.location;
  
  if (contactButtons[0]) contactButtons[0].textContent = t.callNow;
  if (contactButtons[1]) contactButtons[1].textContent = t.sendEmail;
  if (contactButtons[2]) contactButtons[2].textContent = t.viewMap;
  
  // Update location text specifically
  const contactCards = document.querySelectorAll('.contact-card');
  contactCards.forEach(card => {
    const cardText = card.querySelector('p');
    if (cardText && (cardText.textContent.includes('Ho Chi Minh') || cardText.textContent.includes('Thành phố'))) {
      cardText.textContent = t.locationName;
    }
  });
  
  // Update social contact section
  const socialContactH3 = document.querySelector('.social-contact h3');
  if (socialContactH3) socialContactH3.textContent = t.followMe;
  
  // Update contact CTA section
  const contactCtaH3 = document.querySelector('.contact-cta h3');
  const contactCtaP = document.querySelector('.contact-cta p');
  const contactBtn = document.querySelector('.contact-btn');
  
  if (contactCtaH3) contactCtaH3.textContent = t.workTogether;
  if (contactCtaP) contactCtaP.textContent = t.workDescription;
  if (contactBtn) contactBtn.innerHTML = `<i class='bx bx-send'></i>${t.startProject}`;
  
  // Update footer

  
  } catch (error) {
    console.error('Error updating language:', error);
  }
}

languageSwitch.onclick = () => {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  langText.textContent = currentLanguage.toUpperCase();
  updateLanguage(currentLanguage);
  
  // Save language preference
  localStorage.setItem('preferredLanguage', currentLanguage);
};

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== currentLanguage) {
    currentLanguage = savedLanguage;
    langText.textContent = currentLanguage.toUpperCase();
    updateLanguage(currentLanguage);
  } else if (currentLanguage === 'en') {
    // Ensure Vietnamese font is removed if default is English
    document.body.classList.remove('vietnamese-font');
  }
});

// ========== Portfolio Sidebar ==========
const projectData = [
  {
    id: 0,
    type: 'Mobile Application',
    title: 'Super Todo-list App',
    description: 'A task management application that helps users organize daily work efficiently, set priorities, and track progress in real time through a clean and responsive interface. It integrates a streak feature to encourage consistent task completion and habit building. Additionally, users can create groups, assign tasks, and collaborate effectively with team members.',
    techStack: ['Flutter', 'Spring Boot', 'MySQL', 'REST API'],
    highlights: [
      'JWT authentication, Google Sign-In (Firebase), role-based access.',
      'Create, update, delete personal tasks.',
      'Group creation, task assignment, role management, QR join.',
      'Habit streak and daily/weekly tracking.',
      'Dark mode, notifications, multi-language, password management.'
    ],
    images: [
      './images/project_1/Screenshot_1749346336.png',
      './images/project_1/Screenshot_1749346395.png',
      './images/project_1/Screenshot_1749346440.png',
      './images/project_1/Screenshot_1749346458.png'
    ],
    role: 'Designed database schema, built REST APIs, integrated frontend with backend, and optimized task query performance.',
    demoLink: '',
    repoLink: ''
  },
  {
    id: 1,
    type: 'Frontend Website',
    title: 'Restaurant Web Design',
    description: 'A modern restaurant showcase website focused on visual hierarchy, menu presentation, and responsive user experience on all devices.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    highlights: [
      'Interactive sections for menu, testimonials, and contact.',
      'Smooth animations and clean content structure.',
      'Optimized for mobile and desktop browsing.'
    ],
    images: [
      './images/portfolio1.jpg',
      './images/portfolio2.jpg',
      './images/portfolio3.jpg'
    ],
    role: 'Built full UI from scratch, implemented responsive layouts, and handled content flow to improve readability and conversion.',
    demoLink: 'https://congtien30303.github.io/Restaurant_Web/',
    repoLink: 'https://github.com/DevTapGym'
  },
  {
    id: 2,
    type: 'Management System',
    title: 'Student Management Platform',
    description: 'A management platform for handling student records, course registration, and result tracking in a centralized workflow.',
    techStack: ['Java', 'Spring Boot', 'SQL Server', 'Bootstrap'],
    highlights: [
      'Centralized student profile and enrollment data.',
      'Search, filter, and report generation by semester.',
      'Role-based access for admin and staff users.'
    ],
    images: [
      './images/portfolio3.jpg',
      './images/portfolio4.jpg',
      './images/portfolio5.jpg'
    ],
    role: 'Implemented business logic modules, role permissions, and query/report screens for academic operations.',
    demoLink: '#',
    repoLink: 'https://github.com/DevTapGym'
  },
  {
    id: 3,
    type: 'Desktop Application',
    title: 'Sales and Inventory Tool',
    description: 'A desktop system to manage inventory, monitor stock movements, and support sales operations with detailed records.',
    techStack: ['C#', '.NET', 'SQL Server', 'WinForms'],
    highlights: [
      'Inventory in/out tracking and stock warning alerts.',
      'Invoice management and sales summary exports.',
      'Fast local processing for daily operations.'
    ],
    images: [
      './images/portfolio4.jpg',
      './images/portfolio5.jpg',
      './images/portfolio6.jpg'
    ],
    role: 'Developed core modules for inventory and billing, integrated database layer, and refined data validation rules.',
    demoLink: '#',
    repoLink: 'https://github.com/DevTapGym'
  },
  {
    id: 4,
    type: 'Mobile Application',
    title: 'Campus Event Companion',
    description: 'A mobile app concept for students to browse events, register quickly, and receive real-time reminders and updates.',
    techStack: ['React Native', 'Firebase', 'Figma', 'REST API'],
    highlights: [
      'Event feed with category-based exploration.',
      'Registration flow and in-app reminder notifications.',
      'Simple and friendly UX for student engagement.'
    ],
    images: [
      './images/portfolio5.jpg',
      './images/portfolio2.jpg',
      './images/portfolio1.jpg'
    ],
    role: 'Created UI flows, connected backend services, and tested user journeys for registration and notifications.',
    demoLink: '#',
    repoLink: 'https://github.com/DevTapGym'
  },
  {
    id: 5,
    type: 'Portfolio Website',
    title: 'Personal Portfolio v2',
    description: 'A personal website presenting projects, skills, activities, and contact channels with bilingual support and interactive sections.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Swiper'],
    highlights: [
      'Bilingual EN/VI content switching.',
      'Interactive skills marquee and project showcase.',
      'Image modal for activity details and media previews.'
    ],
    images: [
      './images/portfolio6.jpg',
      './images/portfolio1.jpg',
      './images/portfolio2.jpg'
    ],
    role: 'Designed UI style direction, implemented interaction logic, and optimized section responsiveness across breakpoints.',
    demoLink: '#',
    repoLink: 'https://github.com/DevTapGym'
  }
];

const projectSidebar = document.getElementById('projectSidebar');
const projectSidebarBackdrop = document.getElementById('projectSidebarBackdrop');
const projectSidebarClose = document.getElementById('projectSidebarClose');

const projectType = document.getElementById('projectType');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectTechStack = document.getElementById('projectTechStack');
const projectHighlights = document.getElementById('projectHighlights');
const projectGallery = document.getElementById('projectGallery');
const projectGalleryGroup = document.getElementById('projectGalleryGroup');
const projectImageLightbox = document.getElementById('projectImageLightbox');
const projectImageLightboxImg = document.getElementById('projectImageLightboxImg');
const projectImageLightboxClose = document.getElementById('projectImageLightboxClose');
const projectRole = document.getElementById('projectRole');
const projectDemoLink = document.getElementById('projectDemoLink');
const projectRepoLink = document.getElementById('projectRepoLink');
let lockedScrollY = 0;

function lockBodyScroll() {
  lockedScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.width = '100%';
}

function unlockBodyScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, lockedScrollY);
}

function renderProjectSidebar(project) {
  if (!project) return;

  projectType.textContent = project.type;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectRole.textContent = project.role;

  projectTechStack.innerHTML = project.techStack
    .map(tech => `<span>${tech}</span>`)
    .join('');

  projectHighlights.innerHTML = project.highlights
    .map(item => `<li>${item}</li>`)
    .join('');

  if (projectGallery && projectGalleryGroup) {
    if (project.images && project.images.length > 0) {
      projectGalleryGroup.style.display = 'block';
      projectGallery.innerHTML = project.images
        .map((image, index) => `<img src="${image}" alt="${project.title} image ${index + 1}">`)
        .join('');
    } else {
      projectGalleryGroup.style.display = 'none';
      projectGallery.innerHTML = '';
    }
  }

  if (project.demoLink && project.demoLink !== '#') {
    projectDemoLink.href = project.demoLink;
    projectDemoLink.style.display = 'inline-block';
  } else {
    projectDemoLink.style.display = 'none';
  }

  if (project.repoLink && project.repoLink !== '#') {
    projectRepoLink.href = project.repoLink;
    projectRepoLink.style.display = 'inline-block';
  } else {
    projectRepoLink.style.display = 'none';
  }
}

function openProjectSidebar(projectId) {
  const project = projectData.find(item => item.id === Number(projectId));
  if (!project || !projectSidebar || !projectSidebarBackdrop) return;

  renderProjectSidebar(project);
  projectSidebar.classList.add('active');
  projectSidebarBackdrop.classList.add('active');
  projectSidebar.setAttribute('aria-hidden', 'false');
  projectSidebar.scrollTop = 0;
  lockBodyScroll();
  document.body.classList.add('sidebar-open');
}

function closeProjectSidebar() {
  if (!projectSidebar || !projectSidebarBackdrop) return;

  projectSidebar.classList.remove('active');
  projectSidebarBackdrop.classList.remove('active');
  projectSidebar.setAttribute('aria-hidden', 'true');
  closeProjectImageLightbox();
  unlockBodyScroll();
  document.body.classList.remove('sidebar-open');
}

function openProjectImageLightbox(imageSrc, imageAlt) {
  if (!projectImageLightbox || !projectImageLightboxImg) return;

  projectImageLightboxImg.src = imageSrc;
  projectImageLightboxImg.alt = imageAlt || 'Project image';
  projectImageLightbox.classList.add('active');
  projectImageLightbox.setAttribute('aria-hidden', 'false');
}

function closeProjectImageLightbox() {
  if (!projectImageLightbox || !projectImageLightboxImg) return;

  projectImageLightbox.classList.remove('active');
  projectImageLightbox.setAttribute('aria-hidden', 'true');
  projectImageLightboxImg.src = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const projectBoxes = document.querySelectorAll('.portfolio-box[data-project-id]');
  const projectTriggers = document.querySelectorAll('.project-trigger');

  projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
      openProjectSidebar(box.dataset.projectId);
    });
  });

  projectTriggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const box = trigger.closest('.portfolio-box');
      if (box) openProjectSidebar(box.dataset.projectId);
    });
  });

  if (projectSidebarClose) {
    projectSidebarClose.addEventListener('click', closeProjectSidebar);
  }

  if (projectSidebarBackdrop) {
    projectSidebarBackdrop.addEventListener('click', closeProjectSidebar);
  }

  if (projectGallery) {
    projectGallery.addEventListener('click', (event) => {
      const img = event.target.closest('img');
      if (!img) return;

      openProjectImageLightbox(img.src, img.alt);
    });
  }

  if (projectImageLightboxClose) {
    projectImageLightboxClose.addEventListener('click', closeProjectImageLightbox);
  }

  if (projectImageLightbox) {
    projectImageLightbox.addEventListener('click', (event) => {
      if (event.target === projectImageLightbox) {
        closeProjectImageLightbox();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectImageLightbox && projectImageLightbox.classList.contains('active')) {
      closeProjectImageLightbox();
      return;
    }

    if (event.key === 'Escape') {
      closeProjectSidebar();
    }
  });
});

function initScrollDrivenSkillsMarquee() {
  const marquee = document.querySelector('.skills-marquee');
  if (!marquee) return;
  const skillsSection = document.querySelector('#skills');
  if (!skillsSection) return;

  const rows = marquee.querySelectorAll('.skills-row');
  if (!rows.length) return;

  const rowStates = [];

  rows.forEach((row) => {
    const track = row.querySelector('.skills-track');
    if (!track) return;

    rowStates.push({
      track,
      direction: row.classList.contains('row-right') ? -1 : 1,
      offset: 0,
      targetOffset: 0,
      maxOffset: 0
    });
  });

  if (!rowStates.length) return;

  const updateBoundaries = () => {
    rowStates.forEach((state) => {
      const rowWidth = state.track.parentElement ? state.track.parentElement.clientWidth : 0;
      state.maxOffset = Math.max(0, state.track.scrollWidth - rowWidth);

      if (state.direction === -1 && state.offset === 0 && state.targetOffset === 0) {
        state.offset = state.maxOffset;
        state.targetOffset = state.maxOffset;
      } else {
        state.offset = Math.min(state.maxOffset, Math.max(0, state.offset));
        state.targetOffset = Math.min(state.maxOffset, Math.max(0, state.targetOffset));
      }
    });
  };

  const wheelStrength = window.innerWidth <= 617 ? 0.32 : 0.42;
  const smoothFactor = 0.12;
  const stopThreshold = 0.08;
  let animationId = null;

  const renderRows = () => {
    rowStates.forEach((state) => {
      state.track.style.transform = `translate3d(${-state.offset}px, 0, 0)`;
    });
  };

  const animate = () => {
    let isMoving = false;

    rowStates.forEach((state) => {
      const distance = state.targetOffset - state.offset;
      if (Math.abs(distance) > stopThreshold) {
        state.offset += distance * smoothFactor;
        isMoving = true;
      } else {
        state.offset = state.targetOffset;
      }

      state.offset = Math.min(state.maxOffset, Math.max(0, state.offset));
    });

    renderRows();

    if (isMoving) {
      animationId = window.requestAnimationFrame(animate);
    } else {
      animationId = null;
    }
  };

  const startAnimation = () => {
    if (animationId !== null) return;
    animationId = window.requestAnimationFrame(animate);
  };

  const isSkillsSectionInView = () => {
    const rect = skillsSection.getBoundingClientRect();
    const thresholdTop = window.innerHeight * 0.85;
    const thresholdBottom = window.innerHeight * 0.15;
    return rect.top < thresholdTop && rect.bottom > thresholdBottom;
  };

  window.addEventListener('wheel', (event) => {
    if (!isSkillsSectionInView()) return;

    const wheelDelta = Math.max(-120, Math.min(120, event.deltaY));
    if (!wheelDelta) return;

    rowStates.forEach((state) => {
      state.targetOffset += wheelDelta * wheelStrength * state.direction;
      state.targetOffset = Math.min(state.maxOffset, Math.max(0, state.targetOffset));
    });

    startAnimation();
  }, { passive: true });

  window.addEventListener('resize', () => {
    updateBoundaries();
    renderRows();
  });

  updateBoundaries();
  renderRows();
}

document.addEventListener('DOMContentLoaded', initScrollDrivenSkillsMarquee);

// =========== Scroll Reveal =============
ScrollReveal({
   reset: true,
   distance:'80px',
   duration: 2000,
   delay: 200
  });

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-image img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin:'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin:'right' });



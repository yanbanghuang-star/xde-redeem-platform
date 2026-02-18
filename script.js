// API Platform Mock Data.
const users = [
  {
    id: 'user1',
    name: 'Test User',
    email: 'test.user@bytedance.com',
    xdeId: 'XDE001',
    spadePoints: 15,
    completedTraining: true,
    createdAt: new Date('2025-01-15').toISOString(),
    profile: {
      department: 'PDPO',
      position: 'Product Designer',
      joinDate: new Date('2024-06-01').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 3'
    }
  },
  {
    id: 'user2',
    name: 'Alice Smith',
    email: 'alice.smith@bytedance.com',
    xdeId: 'XDE002',
    spadePoints: 20,
    completedTraining: true,
    createdAt: new Date('2025-02-20').toISOString(),
    profile: {
      department: 'SPADE',
      position: 'Software Engineer',
      joinDate: new Date('2024-07-15').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 4'
    }
  },
  {
    id: 'user3',
    name: 'Bob Johnson',
    email: 'bob.johnson@bytedance.com',
    xdeId: 'XDE003',
    spadePoints: 5,
    completedTraining: false,
    createdAt: new Date('2025-03-10').toISOString(),
    profile: {
      department: 'PDPO',
      position: 'UX Researcher',
      joinDate: new Date('2025-01-01').toISOString(),
      trainingCompleted: 50,
      currentLevel: 'Level 2'
    }
  },
  {
    id: 'user4',
    name: 'Carol Williams',
    email: 'carol.williams@bytedance.com',
    xdeId: 'XDE004',
    spadePoints: 25,
    completedTraining: true,
    createdAt: new Date('2025-04-05').toISOString(),
    profile: {
      department: 'SPADE',
      position: 'Product Manager',
      joinDate: new Date('2023-12-01').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 5'
    }
  }
];

// Mock products data with SPADE Points requirement and stock.
const products = [
  {
    id: 'prod1',
    name: 'Blind Box Stickers Set',
    brand: 'SPADE',
    description: 'SPADE 主题盲盒贴纸套装',
    spadePoints: 2,
    stock: 100,
    imageUrl: 'images/image.png',
    category: 'stationery',
    popularity: 85,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod2',
    name: 'Lanyard With ID Sleeve',
    brand: 'SPADE',
    description: 'SPADE 主题挂绳卡套',
    spadePoints: 2,
    stock: 100,
    imageUrl: 'images/image (2).png',
    category: 'accessories',
    popularity: 75,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod3',
    name: 'Tote Bag',
    brand: 'SPADE',
    description: 'SPADE 主题帆布手提袋',
    spadePoints: 3,
    stock: 100,
    imageUrl: 'images/image (3).png',
    category: 'bags',
    popularity: 90,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod4',
    name: 'Water Cup',
    brand: 'SPADE',
    description: 'SPADE 主题保温杯，高品质设计',
    spadePoints: 3,
    stock: 100,
    imageUrl: 'images/image (4).png',
    category: 'daily',
    popularity: 80,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod5',
    name: 'Owl Blind Box',
    brand: 'SPADE',
    description: 'SPADE 主题猫头鹰盲盒',
    spadePoints: 3,
    stock: 100,
    imageUrl: 'images/image (1).png',
    category: 'toys',
    popularity: 95,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod6',
    name: 'Power Bank',
    brand: 'SPADE',
    description: 'SPADE 主题移动电源，大容量设计',
    spadePoints: 4,
    stock: 100,
    imageUrl: 'images/img_v3_02t1_cad0b75f-282a-44ab-9e1c-7997b7d188cg.jpg',
    category: 'electronics',
    popularity: 95,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod7',
    name: 'Hoodie',
    brand: 'SPADE',
    description: 'SPADE 主题连帽衫，高品质舒适面料',
    spadePoints: 4,
    stock: 100,
    imageUrl: 'images/44534a32e412180cff401b0c7d865744.jpg',
    category: 'clothing',
    popularity: 100,
    createdAt: new Date('2025-01-01').toISOString()
  }
];

// Mock orders data.
const orders = [
  {
    id: 'ord-1',
    userId: 'user1',
    productId: 'prod2',
    productName: 'Owl Blind Box Plush',
    pointsSpent: 30,
    status: 'completed',
    createdAt: new Date('2025-03-01').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-2',
    userId: 'user1',
    productId: 'prod1',
    productName: 'XDE Exclusive Stickers',
    pointsSpent: 20,
    status: 'completed',
    createdAt: new Date('2025-03-10').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-3',
    userId: 'user2',
    productId: 'prod4',
    productName: 'Canvas Tote Bag',
    pointsSpent: 40,
    status: 'processing',
    createdAt: new Date('2025-03-15').toISOString(),
    shippingAddress: {
      name: 'Alice Smith',
      address: '456 Pudong Road, Pudong District, Shanghai',
      phone: '13900139000'
    }
  },
  {
    id: 'ord-4',
    userId: 'user1',
    productId: 'prod7',
    productName: '10000mAh Power Bank',
    pointsSpent: 60,
    status: 'completed',
    createdAt: new Date('2025-03-20').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-5',
    userId: 'user3',
    productId: 'prod9',
    productName: 'Notebook Set',
    pointsSpent: 35,
    status: 'completed',
    createdAt: new Date('2025-03-25').toISOString(),
    shippingAddress: {
      name: 'Bob Johnson',
      address: '789 XDE Road, Haidian District, Beijing',
      phone: '13700137000'
    }
  },
  {
    id: 'ord-6',
    userId: 'user4',
    productId: 'prod8',
    productName: 'Wireless Earbuds',
    pointsSpent: 120,
    status: 'completed',
    createdAt: new Date('2025-04-01').toISOString(),
    shippingAddress: {
      name: 'Carol Williams',
      address: '101 SPADE Road, Chaoyang District, Beijing',
      phone: '13600136000'
    }
  },
  {
    id: 'ord-7',
    userId: 'user2',
    productId: 'prod10',
    productName: 'Baseball Cap',
    pointsSpent: 50,
    status: 'processing',
    createdAt: new Date('2025-04-05').toISOString(),
    shippingAddress: {
      name: 'Alice Smith',
      address: '456 Pudong Road, Pudong District, Shanghai',
      phone: '13900139000'
    }
  },
  {
    id: 'ord-8',
    userId: 'user4',
    productId: 'prod15',
    productName: 'Bluetooth Speaker',
    pointsSpent: 90,
    status: 'pending',
    createdAt: new Date('2025-04-10').toISOString(),
    shippingAddress: {
      name: 'Carol Williams',
      address: '101 SPADE Road, Chaoyang District, Beijing',
      phone: '13600136000'
    }
  }
];

// 货币奖励数据
const monetaryRewards = [
    {
        id: 'reward-1',
        userId: 'user1',
        userName: 'Test User',
        amount: 500,
        currency: 'CNY',
        type: 'cash',
        reason: 'Q1 最佳贡献者',
        status: 'pending',
        createdAt: new Date('2025-03-01').toISOString(),
        approvedAt: null,
        paidAt: null,
        approver: null
    },
    {
        id: 'reward-2',
        userId: 'user2',
        userName: 'Alice Smith',
        amount: 300,
        currency: 'CNY',
        type: 'cash',
        reason: '培训完成奖励',
        status: 'approved',
        createdAt: new Date('2025-03-15').toISOString(),
        approvedAt: new Date('2025-03-16').toISOString(),
        paidAt: null,
        approver: 'Admin'
    }
];

// 奖励类型配置
const REWARD_TYPES = {
    MONETARY: {
        CASH: 'cash',
        GIFT_CARD: 'gift_card'
    },
    NON_MONETARY: {
        GIFT_REDEMPTION: 'gift_redemption',
        EXPERIENCE: 'experience'
    },
    POINTS: {
        SPADE: 'SPADE',
        XDE: 'XDE'
    }
};

// 奖励状态配置
const REWARD_STATUS = {
    PENDING: 'pending',
    APPROVED: 'approved',
    PAID: 'paid',
    REJECTED: 'rejected',
    CANCELLED: 'cancelled'
};

// DOM元素选择.
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksList = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');
const hero = document.querySelector('.hero');
const animationContainers = document.querySelectorAll('.animation-container');
const scrollProgress = document.getElementById('scrollProgress');
const giftPlatform = document.getElementById('giftPlatform');
const profileContent = document.querySelector('.profile-content');
const ordersTable = document.querySelector('.orders-table');
const profileInfo = document.querySelector('.profile-info');
const profilePoints = document.querySelector('.profile-points');
const infoForm = document.querySelector('.info-form');

// 当前用户（默认使用第一个用户）.
const currentUser = users[0];

// 页面加载完成后执行.
window.addEventListener('DOMContentLoaded', () => {
    // 初始化导航高亮.
    updateNavHighlight();
    
    // 初始化滚动动画.
    initScrollAnimations();
    
    // 初始化微动画.
    initMicroAnimations();
    
    // 初始化打字机效果.
    initTypewriter();
    
    // 动态生成内容.
    generateRedeemContent();
    generateProfileContent();
});

// 打字机效果.
function initTypewriter() {
    const titleElement = document.getElementById('heroTitle');
    const subtitleElement = document.getElementById('heroSubtitle');
    
    if (!titleElement || !subtitleElement) return;
    
    const titleText = titleElement.textContent;
    const subtitleText = subtitleElement.textContent;
    
    // 清空元素内容，准备打字效果.
    titleElement.textContent = '';
    subtitleElement.textContent = '';
    
    // 设置元素宽度为0.
    titleElement.style.width = '0';
    subtitleElement.style.width = '0';
    
    // 开始标题打字效果.
    let titleIndex = 0;
    const typeTitle = setInterval(() => {
        if (titleIndex < titleText.length) {
            titleElement.textContent += titleText.charAt(titleIndex);
            titleElement.style.width = titleElement.scrollWidth + 'px';
            titleElement.style.opacity = '1';
            titleIndex++;
        } else {
            clearInterval(typeTitle);
            // 标题完成后开始副标题打字效果.
            setTimeout(() => {
                let subtitleIndex = 0;
                const typeSubtitle = setInterval(() => {
                    if (subtitleIndex < subtitleText.length) {
                        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
                        subtitleElement.style.width = subtitleElement.scrollWidth + 'px';
                        subtitleElement.style.opacity = '1';
                        subtitleIndex++;
                    } else {
                        clearInterval(typeSubtitle);
                    }
                }, 30);
            }, 500);
        }
    }, 50);
}

// 滚动监听事件.
window.addEventListener('scroll', () => {
    // 更新导航栏样式.
    updateNavbarStyle();
    
    // 更新导航高亮.
    updateNavHighlight();
    
    // 检查元素是否进入视口.
    checkScrollAnimations();
    
    // 更新滚动进度条.
    updateScrollProgress();
});

// 更新滚动进度条.
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// 更新导航栏样式（滚动时）.
function updateNavbarStyle() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 更新导航高亮.
function updateNavHighlight() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 平滑滚动.
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单.
            if (window.innerWidth <= 768) {
                navLinksList.classList.remove('open');
            }
        }
    });
});

// 移动端菜单切换.
mobileMenu.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// 窗口大小变化时重置移动端菜单.
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinksList.classList.remove('open');
        mobileMenu.classList.remove('open');
    }
});

// 为元素添加进入视口的动画效果.
function addScrollAnimation(element, delay = 0, animation = 'fadeInUp') {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `${animation} 0.6s ease ${delay}s forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    observer.observe(element);
}

// 滚动动画初始化.
function initScrollAnimations() {
    // 为所有区块添加基本的淡入上移动画.
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Hero区域立即显示.
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
    
    // 为各个区块的内部元素添加更精细的动画.
    const pillarCards = document.querySelectorAll('.pillar-card');
    pillarCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const rewardItems = document.querySelectorAll('.reward-item');
    rewardItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9) rotateY(-10deg)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
}

// 检查元素是否进入视口.
function checkScrollAnimations() {
    const windowHeight = window.innerHeight;
    
    // 更新区块动画.
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            
            // 当区块进入视口时，触发内部元素的动画.
            const pillarCards = section.querySelectorAll('.pillar-card');
            if (pillarCards.length > 0) {
                pillarCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                });
            }
            
            const stepItems = section.querySelectorAll('.step-item');
            if (stepItems.length > 0) {
                stepItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 150);
                });
            }
            
            const rewardItems = section.querySelectorAll('.reward-item');
            if (rewardItems.length > 0) {
                rewardItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1) rotateY(0)';
                    }, index * 150);
                });
            }
            
            const faqItems = section.querySelectorAll('.faq-item');
            if (faqItems.length > 0) {
                faqItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 150);
                });
            }
        }
    });
}

// 微动画初始化.
function initMicroAnimations() {
    animationContainers.forEach((container, index) => {
        // 为每个动画容器添加延迟，创建序列效果.
        container.style.animationDelay = `${index * 0.2}s`;
        container.style.opacity = '0';
        container.style.transform = 'scale(0.8)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // 当动画容器进入视口时播放动画.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(container);
    });
}

// 添加鼠标跟随效果.
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 为字符元素添加浮动效果.
const characters = document.querySelectorAll('.character');
characters.forEach(char => {
    char.addEventListener('mouseenter', () => {
        char.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    char.addEventListener('mouseleave', () => {
        char.style.transform = 'translateY(0) scale(1)';
    });
});

// 为按钮添加波纹效果.
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 为动画元素添加更复杂的JavaScript控制.
function enhanceAnimations() {
    // 动画1: Pass出现的增强效果.
    const animation1 = document.getElementById('animation-1');
    if (animation1) {
        let isHovered = false;
        
        animation1.addEventListener('mouseenter', () => {
            isHovered = true;
            animatePass();
        });
        
        animation1.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animatePass() {
            if (!isHovered) return;
            
            const pass = animation1.querySelector('.spade-pass');
            if (pass) {
                pass.style.animation = 'none';
                // 强制重排.
                pass.offsetHeight;
                pass.style.animation = 'passAppear 3s ease-in-out infinite';
            }
            
            setTimeout(animatePass, 3000);
        }
    }
    
    // 动画2: PC硬币的增强效果.
    const animation2 = document.getElementById('animation-2');
    if (animation2) {
        let isHovered = false;
        
        animation2.addEventListener('mouseenter', () => {
            isHovered = true;
            animateCoin();
        });
        
        animation2.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateCoin() {
            if (!isHovered) return;
            
            const coin = animation2.querySelector('.pc-coin');
            if (coin) {
                coin.style.animation = 'none';
                coin.offsetHeight;
                coin.style.animation = 'coinBounce 2s ease-in-out infinite';
            }
            
            setTimeout(animateCoin, 2000);
        }
    }
    
    // 动画3: BP徽章的增强效果.
    const animation3 = document.getElementById('animation-3');
    if (animation3) {
        let isHovered = false;
        
        animation3.addEventListener('mouseenter', () => {
            isHovered = true;
            animateBadge();
        });
        
        animation3.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateBadge() {
            if (!isHovered) return;
            
            const badge = animation3.querySelector('.bp-badge');
            if (badge) {
                badge.style.animation = 'none';
                badge.offsetHeight;
                badge.style.animation = 'badgeSpin 3s linear infinite';
            }
            
            setTimeout(animateBadge, 3000);
        }
    }
    
    // 动画4: 礼物盒的增强效果.
    const animation4 = document.getElementById('animation-4');
    if (animation4) {
        let isHovered = false;
        
        animation4.addEventListener('mouseenter', () => {
            isHovered = true;
            animateGift();
        });
        
        animation4.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateGift() {
            if (!isHovered) return;
            
            const gift = animation4.querySelector('.gift-box');
            if (gift) {
                gift.style.animation = 'none';
                gift.offsetHeight;
                gift.style.animation = 'giftOpen 3s ease-in-out infinite';
            }
            
            setTimeout(animateGift, 3000);
        }
    }
}

// 初始化增强动画.
enhanceAnimations();

// FAQ折叠功能.
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // 切换当前FAQ的激活状态.
            question.classList.toggle('active');
            
            if (answer && answer.classList.contains('faq-answer')) {
                answer.classList.toggle('active');
            }
            
            // 关闭其他FAQ.
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
                        otherAnswer.classList.remove('active');
                    }
                }
            });
        });
    });
}

// 初始化FAQ折叠功能.
initFAQ();

// 添加页面加载动画.
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 动态生成兑换平台内容.
// 根据用户输入的积分过滤可兑换商品
function filterProducts() {
    // 获取用户输入的SPADE积分
    const spadePointsInput = document.getElementById('spadePointsInput');
    
    const userSpadePoints = parseInt(spadePointsInput.value) || 0;
    
    // 过滤可兑换商品：SPADE积分足够 且 库存充足
    const eligibleProducts = products.filter(product => {
        const hasEnoughPoints = userSpadePoints >= product.spadePoints;
        const hasStock = product.stock > 0;
        
        return hasEnoughPoints && hasStock;
    });
    
    // 渲染过滤后的商品列表
    generateRedeemContent(eligibleProducts, userSpadePoints);
}

// 生成兑换内容 - 支持过滤后的商品列表
async function generateRedeemContent(productList = products, userSpadePoints = currentUser.spadePoints) {
    if (!giftPlatform) return;
    
    // 显示加载状态.
    giftPlatform.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading products...</p></div>';
    
    try {
        // 清空现有内容.
        giftPlatform.innerHTML = '';
        
        // 如果没有可兑换商品，显示提示
        if (productList.length === 0) {
            giftPlatform.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-info-circle"></i><p>目前没有可兑换的商品</p></div>';
            return;
        }
        
        // 根据产品数据生成卡片.
        productList.forEach(product => {
            const card = document.createElement('div');
            card.className = 'redeem-card';
            
            // 检查用户是否有足够的SPADE积分
            const canRedeem = userSpadePoints >= product.spadePoints && product.stock > 0;
            
            // 设置卡片内容.
            card.innerHTML = `
                <div class="redeem-card-header">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <h3>${product.name}</h3>
                    <div class="points-required">
                        <span class="spade-points">${product.spadePoints} SPADE Points</span>
                    </div>
                </div>
                <div class="redeem-card-content">
                    <p>${product.description}</p>
                    <small class="stock-info">库存: ${product.stock}</small>
                </div>
                <div class="redeem-card-footer">
                    <button class="btn btn-primary" onclick="redeemProduct('${product.id}', ${userSpadePoints})">
                        ${canRedeem ? '立即兑换' : '积分不足'}
                    </button>
                </div>
            `;
            
            // 如果积分不足或库存为0，禁用按钮.
            const button = card.querySelector('button');
            if (!canRedeem) {
                button.disabled = true;
                button.classList.add('btn-disabled');
            }
            
            // 添加到兑换平台.
            giftPlatform.appendChild(card);
        });
    } catch (error) {
        console.error('Error generating redeem content:', error);
        giftPlatform.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load products</p></div>';
    }
}

// 动态生成个人资料内容.
function generateProfileContent() {
    if (!profileContent) return;
    
    // 显示加载状态.
    if (profileInfo) {
        profileInfo.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading profile...</p></div>';
    }
    if (profilePoints) {
        profilePoints.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';
    }
    if (ordersTable) {
        ordersTable.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading orders...</p></div>';
    }
    if (infoForm) {
        infoForm.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading profile info...</p></div>';
    }
    
    // 直接使用模拟数据，避免API调用问题.
    setTimeout(() => {
        try {
            const userData = currentUser;
            
            // 更新个人信息.
            if (profileInfo) {
                profileInfo.innerHTML = `
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle" style="font-size: 4rem; color: var(--primary-color);"></i>
                    </div>
                    <div class="profile-details">
                        <h3>${userData.name}</h3>
                        <p class="profile-id">ID: ${userData.xdeId}</p>
                    </div>
                `;
            }
            
            // 更新积分信息.
            if (profilePoints) {
                profilePoints.innerHTML = `
                    <div class="points-card">
                        <div class="points-type">SPADE Points</div>
                        <div class="points-amount">${userData.spadePoints}</div>
                    </div>
                `;
            }
            
            // 获取用户订单.
            const userOrders = orders.filter(order => order.userId === userData.id);
            
            // 更新订单信息.
            if (ordersTable) {
                // 保留表头.
                const orderHeader = document.createElement('div');
                orderHeader.className = 'order-header';
                orderHeader.innerHTML = `
                    <span>Order ID</span>
                    <span>Reward</span>
                    <span>Points</span>
                    <span>Status</span>
                    <span>Date</span>
                `;
                
                // 清空现有内容.
                ordersTable.innerHTML = '';
                ordersTable.appendChild(orderHeader);
                
                // 生成订单列表.
                userOrders.forEach(order => {
                    const orderItem = document.createElement('div');
                    orderItem.className = 'order-item';
                    
                    // 格式化日期.
                    const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
                    
                    orderItem.innerHTML = `
                        <span data-label="Order ID">#${order.id}</span>
                        <span data-label="Reward">${order.productName}</span>
                        <span data-label="Points">${order.pointsSpent} ${order.pointsType || 'SPADE'}</span>
                        <span data-label="Status" class="status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                        <span data-label="Date">${orderDate}</span>
                    `;
                    
                    ordersTable.appendChild(orderItem);
                });
            }
            
            // 更新个人信息表单.
            if (infoForm) {
                infoForm.innerHTML = `
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" value="${userData.name}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" value="${userData.email}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Department</label>
                        <input type="text" value="${userData.profile.department}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Position</label>
                        <input type="text" value="${userData.profile.position}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Join Date</label>
                        <input type="text" value="${new Date(userData.profile.joinDate).toISOString().split('T')[0]}" readonly>
                    </div>
                    <button class="btn btn-secondary">Edit Profile</button>
                `;
            }
        } catch (error) {
            console.error('Error generating profile content:', error);
            
            // 显示错误信息.
            if (profileInfo) {
                profileInfo.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load profile</p></div>';
            }
            if (profilePoints) {
                profilePoints.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i></div>';
            }
            if (ordersTable) {
                ordersTable.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load orders</p></div>';
            }
            if (infoForm) {
                infoForm.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load profile info</p></div>';
            }
        }
    }, 500); // 模拟加载延迟.
}

// 兑换产品功能.
// 飞书多维表格配置
const FEISHU_CONFIG = {
    // 飞书开放平台应用凭证
    APP_ID: 'your_app_id',
    APP_SECRET: 'your_app_secret',
    // 多维表格信息
    SPREADSHEET_TOKEN: 'your_spreadsheet_token',
    // 工作表ID映射
    SHEETS: {
        REDEMPTION: 'your_redemption_sheet_id',
        USERS: 'your_users_sheet_id',
        PRODUCTS: 'your_products_sheet_id',
        REWARDS: 'your_rewards_sheet_id'
    },
    // API端点
    API_ENDPOINTS: {
        ACCESS_TOKEN: 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
        SHEET_ROWS: 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/{spreadsheetToken}/sheets/{sheetId}/rows'
    }
};

// 缓存访问令牌
let accessTokenCache = null;
let tokenExpiry = 0;

// 获取飞书访问令牌
async function getFeishuAccessToken() {
    try {
        // 检查令牌是否有效
        const now = Date.now();
        if (accessTokenCache && now < tokenExpiry) {
            console.log('使用缓存的飞书访问令牌');
            return accessTokenCache;
        }
        
        // 实际环境中，应该调用飞书API获取访问令牌
        // 这里使用模拟数据
        console.log('获取飞书访问令牌...');
        accessTokenCache = 'mock_access_token_123456';
        tokenExpiry = now + (2 * 60 * 60 * 1000); // 2小时有效期
        return accessTokenCache;
        
        // 真实API调用示例（需要替换为实际的API调用）
        /*
        const response = await fetch(FEISHU_CONFIG.API_ENDPOINTS.ACCESS_TOKEN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                app_id: FEISHU_CONFIG.APP_ID,
                app_secret: FEISHU_CONFIG.APP_SECRET
            })
        });
        
        if (!response.ok) {
            throw new Error(`API调用失败: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.code !== 0) {
            throw new Error(`获取令牌失败: ${data.msg}`);
        }
        
        accessTokenCache = data.tenant_access_token;
        tokenExpiry = now + (data.expire * 1000);
        return accessTokenCache;
        */
    } catch (error) {
        console.error('获取飞书访问令牌失败:', error);
        throw error;
    }
}

// 向飞书多维表格添加行数据
async function addFeishuSheetRow(sheetId, rowData) {
    try {
        const accessToken = await getFeishuAccessToken();
        
        // 实际环境中，应该调用飞书API添加行数据
        // 这里使用模拟数据
        console.log('向飞书多维表格添加数据:', {
            sheetId,
            rowData
        });
        return true;
        
        // 真实API调用示例（需要替换为实际的API调用）
        /*
        const url = FEISHU_CONFIG.API_ENDPOINTS.SHEET_ROWS
            .replace('{spreadsheetToken}', FEISHU_CONFIG.SPREADSHEET_TOKEN)
            .replace('{sheetId}', sheetId);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                rows: [
                    {
                        fields: rowData
                    }
                ]
            })
        });
        
        if (!response.ok) {
            throw new Error(`API调用失败: ${response.status}`);
        }
        
        const data = await response.json();
        return data.code === 0;
        */
    } catch (error) {
        console.error('向飞书多维表格添加数据失败:', error);
        throw error;
    }
}

// 从飞书多维表格获取数据
async function getFeishuSheetData(sheetId) {
    try {
        const accessToken = await getFeishuAccessToken();
        
        // 实际环境中，应该调用飞书API获取数据
        // 这里使用模拟数据
        console.log('从飞书多维表格获取数据:', sheetId);
        return {
            code: 0,
            data: {
                items: []
            }
        };
        
        // 真实API调用示例（需要替换为实际的API调用）
        /*
        const url = FEISHU_CONFIG.API_ENDPOINTS.SHEET_ROWS
            .replace('{spreadsheetToken}', FEISHU_CONFIG.SPREADSHEET_TOKEN)
            .replace('{sheetId}', sheetId);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`API调用失败: ${response.status}`);
        }
        
        return await response.json();
        */
    } catch (error) {
        console.error('从飞书多维表格获取数据失败:', error);
        throw error;
    }
}

// 同步产品数据到飞书
async function syncProductsToFeishu() {
    try {
        console.log('开始同步产品数据到飞书...');
        
        for (const product of products) {
            const rowData = {
                '商品ID': product.id,
                '商品名称': product.name,
                '品牌': product.brand,
                '描述': product.description,
                'SPADE积分': product.spadePoints,
                '库存': product.stock,
                '图片路径': product.imageUrl,
                '分类': product.category,
                '热度': product.popularity,
                '创建时间': new Date(product.createdAt).toLocaleString('zh-CN')
            };
            
            await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.PRODUCTS, rowData);
            console.log(`同步产品: ${product.name} 成功`);
        }
        
        console.log('产品数据同步完成');
        return true;
    } catch (error) {
        console.error('同步产品数据失败:', error);
        throw error;
    }
}

// 同步用户数据到飞书
async function syncUsersToFeishu() {
    try {
        console.log('开始同步用户数据到飞书...');
        
        for (const user of users) {
            const rowData = {
                '用户ID': user.id,
                '用户名': user.name,
                '邮箱': user.email,
                'XDE ID': user.xdeId,
                'SPADE积分': user.spadePoints,
                '是否完成培训': user.completedTraining ? '是' : '否',
                '部门': user.profile.department,
                '职位': user.profile.position,
                '入职日期': new Date(user.profile.joinDate).toLocaleString('zh-CN'),
                '培训完成度': user.profile.trainingCompleted + '%',
                '当前等级': user.profile.currentLevel,
                '创建时间': new Date(user.createdAt).toLocaleString('zh-CN')
            };
            
            await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.USERS, rowData);
            console.log(`同步用户: ${user.name} 成功`);
        }
        
        console.log('用户数据同步完成');
        return true;
    } catch (error) {
        console.error('同步用户数据失败:', error);
        throw error;
    }
}

// 导出数据到飞书
async function exportDataToFeishu(dataType) {
    try {
        switch (dataType) {
            case 'products':
                return await syncProductsToFeishu();
            case 'users':
                return await syncUsersToFeishu();
            case 'all':
                await syncProductsToFeishu();
                await syncUsersToFeishu();
                return true;
            default:
                throw new Error('不支持的数据类型');
        }
    } catch (error) {
        console.error('导出数据失败:', error);
        throw error;
    }
}

// 从飞书导入数据
async function importDataFromFeishu(dataType) {
    try {
        console.log(`从飞书导入${dataType}数据...`);
        
        let sheetId;
        switch (dataType) {
            case 'products':
                sheetId = FEISHU_CONFIG.SHEETS.PRODUCTS;
                break;
            case 'users':
                sheetId = FEISHU_CONFIG.SHEETS.USERS;
                break;
            case 'rewards':
                sheetId = FEISHU_CONFIG.SHEETS.REWARDS;
                break;
            default:
                throw new Error('不支持的数据类型');
        }
        
        const result = await getFeishuSheetData(sheetId);
        console.log(`导入${dataType}数据完成，共${result.data.items.length}条`);
        return result;
    } catch (error) {
        console.error('导入数据失败:', error);
        throw error;
    }
}

// 货币奖励管理功能

// 发放货币奖励
async function createMonetaryReward(rewardData) {
    try {
        console.log('创建货币奖励:', rewardData);
        
        // 生成奖励ID
        const rewardId = 'reward-' + Date.now();
        
        // 创建奖励对象
        const newReward = {
            id: rewardId,
            userId: rewardData.userId,
            userName: rewardData.userName,
            amount: rewardData.amount,
            currency: rewardData.currency || 'CNY',
            type: rewardData.type || 'cash',
            reason: rewardData.reason,
            status: REWARD_STATUS.PENDING,
            createdAt: new Date().toISOString(),
            approvedAt: null,
            paidAt: null,
            approver: null
        };
        
        // 添加到奖励列表
        monetaryRewards.push(newReward);
        
        // 同步到飞书
        await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REWARDS, {
            '奖励ID': newReward.id,
            '用户ID': newReward.userId,
            '用户名': newReward.userName,
            '金额': newReward.amount,
            '货币': newReward.currency,
            '类型': newReward.type,
            '原因': newReward.reason,
            '状态': newReward.status,
            '创建时间': new Date(newReward.createdAt).toLocaleString('zh-CN'),
            '审批时间': '',
            '支付时间': '',
            '审批人': ''
        });
        
        console.log('货币奖励创建成功:', rewardId);
        return newReward;
    } catch (error) {
        console.error('创建货币奖励失败:', error);
        throw error;
    }
}

// 审批货币奖励
async function approveMonetaryReward(rewardId, approverName) {
    try {
        const reward = monetaryRewards.find(r => r.id === rewardId);
        if (!reward) {
            throw new Error('奖励不存在');
        }
        
        if (reward.status !== REWARD_STATUS.PENDING) {
            throw new Error('奖励状态不正确');
        }
        
        // 更新状态
        reward.status = REWARD_STATUS.APPROVED;
        reward.approvedAt = new Date().toISOString();
        reward.approver = approverName;
        
        // 同步到飞书
        await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REWARDS, {
            '奖励ID': reward.id,
            '用户ID': reward.userId,
            '用户名': reward.userName,
            '金额': reward.amount,
            '货币': reward.currency,
            '类型': reward.type,
            '原因': reward.reason,
            '状态': reward.status,
            '创建时间': new Date(reward.createdAt).toLocaleString('zh-CN'),
            '审批时间': new Date(reward.approvedAt).toLocaleString('zh-CN'),
            '支付时间': '',
            '审批人': reward.approver
        });
        
        console.log('货币奖励审批成功:', rewardId);
        return reward;
    } catch (error) {
        console.error('审批货币奖励失败:', error);
        throw error;
    }
}

// 支付货币奖励
async function payMonetaryReward(rewardId) {
    try {
        const reward = monetaryRewards.find(r => r.id === rewardId);
        if (!reward) {
            throw new Error('奖励不存在');
        }
        
        if (reward.status !== REWARD_STATUS.APPROVED) {
            throw new Error('奖励状态不正确');
        }
        
        // 更新状态
        reward.status = REWARD_STATUS.PAID;
        reward.paidAt = new Date().toISOString();
        
        // 同步到飞书
        await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REWARDS, {
            '奖励ID': reward.id,
            '用户ID': reward.userId,
            '用户名': reward.userName,
            '金额': reward.amount,
            '货币': reward.currency,
            '类型': reward.type,
            '原因': reward.reason,
            '状态': reward.status,
            '创建时间': new Date(reward.createdAt).toLocaleString('zh-CN'),
            '审批时间': new Date(reward.approvedAt).toLocaleString('zh-CN'),
            '支付时间': new Date(reward.paidAt).toLocaleString('zh-CN'),
            '审批人': reward.approver
        });
        
        console.log('货币奖励支付成功:', rewardId);
        return reward;
    } catch (error) {
        console.error('支付货币奖励失败:', error);
        throw error;
    }
}

// 取消货币奖励
async function cancelMonetaryReward(rewardId) {
    try {
        const reward = monetaryRewards.find(r => r.id === rewardId);
        if (!reward) {
            throw new Error('奖励不存在');
        }
        
        if (reward.status === REWARD_STATUS.PAID) {
            throw new Error('已支付的奖励无法取消');
        }
        
        // 更新状态
        reward.status = REWARD_STATUS.CANCELLED;
        
        // 同步到飞书
        await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REWARDS, {
            '奖励ID': reward.id,
            '用户ID': reward.userId,
            '用户名': reward.userName,
            '金额': reward.amount,
            '货币': reward.currency,
            '类型': reward.type,
            '原因': reward.reason,
            '状态': reward.status,
            '创建时间': new Date(reward.createdAt).toLocaleString('zh-CN'),
            '审批时间': reward.approvedAt ? new Date(reward.approvedAt).toLocaleString('zh-CN') : '',
            '支付时间': '',
            '审批人': reward.approver
        });
        
        console.log('货币奖励取消成功:', rewardId);
        return reward;
    } catch (error) {
        console.error('取消货币奖励失败:', error);
        throw error;
    }
}

// 生成货币奖励管理界面
function generateMonetaryRewardsContent() {
    const rewardsContent = document.querySelector('.monetary-rewards-content');
    if (!rewardsContent) return;
    
    rewardsContent.innerHTML = '';
    
    // 按状态分组显示奖励
    const rewardsByStatus = {
        pending: monetaryRewards.filter(r => r.status === REWARD_STATUS.PENDING),
        approved: monetaryRewards.filter(r => r.status === REWARD_STATUS.APPROVED),
        paid: monetaryRewards.filter(r => r.status === REWARD_STATUS.PAID),
        cancelled: monetaryRewards.filter(r => r.status === REWARD_STATUS.CANCELLED)
    };
    
    // 生成状态分组
    Object.entries(rewardsByStatus).forEach(([status, statusRewards]) => {
        if (statusRewards.length === 0) return;
        
        const statusSection = document.createElement('div');
        statusSection.className = `rewards-section status-${status}`;
        
        const statusTitle = document.createElement('h4');
        statusTitle.textContent = getStatusDisplayName(status);
        statusSection.appendChild(statusTitle);
        
        const rewardsList = document.createElement('div');
        rewardsList.className = 'rewards-list';
        
        statusRewards.forEach(reward => {
            const rewardCard = document.createElement('div');
            rewardCard.className = 'reward-card';
            
            rewardCard.innerHTML = `
                <div class="reward-card-header">
                    <h5>${reward.userName}</h5>
                    <span class="reward-amount">${reward.currency} ${reward.amount}</span>
                </div>
                <div class="reward-card-content">
                    <p class="reward-reason">${reward.reason}</p>
                    <div class="reward-meta">
                        <span>类型: ${reward.type === 'cash' ? '现金' : '礼品卡'}</span>
                        <span>创建时间: ${new Date(reward.createdAt).toLocaleString('zh-CN')}</span>
                        ${reward.approvedAt ? `<span>审批时间: ${new Date(reward.approvedAt).toLocaleString('zh-CN')}</span>` : ''}
                        ${reward.paidAt ? `<span>支付时间: ${new Date(reward.paidAt).toLocaleString('zh-CN')}</span>` : ''}
                        ${reward.approver ? `<span>审批人: ${reward.approver}</span>` : ''}
                    </div>
                </div>
                <div class="reward-card-actions">
                    ${reward.status === REWARD_STATUS.PENDING ? `
                        <button class="btn btn-primary" onclick="approveMonetaryReward('${reward.id}', 'Admin')">审批</button>
                        <button class="btn btn-danger" onclick="cancelMonetaryReward('${reward.id}')">取消</button>
                    ` : ''}
                    ${reward.status === REWARD_STATUS.APPROVED ? `
                        <button class="btn btn-success" onclick="payMonetaryReward('${reward.id}')">支付</button>
                        <button class="btn btn-danger" onclick="cancelMonetaryReward('${reward.id}')">取消</button>
                    ` : ''}
                </div>
            `;
            
            rewardsList.appendChild(rewardCard);
        });
        
        statusSection.appendChild(rewardsList);
        rewardsContent.appendChild(statusSection);
    });
}

// 获取状态显示名称
function getStatusDisplayName(status) {
    const statusMap = {
        pending: '待审批',
        approved: '已审批',
        paid: '已支付',
        cancelled: '已取消',
        rejected: '已拒绝'
    };
    return statusMap[status] || status;
}

// 兑换产品函数
async function redeemProduct(productId, userSpadePoints = currentUser.spadePoints) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // 检查库存.
    if (product.stock <= 0) {
        alert('商品库存不足！');
        return;
    }
    
    // 检查SPADE积分
    const hasEnoughPoints = userSpadePoints >= product.spadePoints;
    
    if (!hasEnoughPoints) {
        alert('积分不足，无法兑换该商品！');
        return;
    }
    
    try {
        // 收集兑换信息
        const redeemInfo = {
            userId: currentUser.id,
            userName: currentUser.name,
            userEmail: currentUser.email,
            productId: product.id,
            productName: product.name,
            redeemTime: new Date().toISOString(),
            stockBefore: product.stock,
            stockAfter: product.stock - 1
        };
        
        // 确定使用的积分类型
        redeemInfo.pointsType = 'SPADE';
        redeemInfo.pointsSpent = product.spadePoints;
        redeemInfo.pointsBefore = userSpadePoints;
        redeemInfo.pointsAfter = userSpadePoints - product.spadePoints;
        
        // 调用飞书多维表格API提交数据
        const success = await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REDEMPTION, {
            '用户ID': redeemInfo.userId,
            '用户名': redeemInfo.userName,
            '邮箱': redeemInfo.userEmail,
            '商品ID': redeemInfo.productId,
            '商品名称': redeemInfo.productName,
            '积分类型': redeemInfo.pointsType,
            '消耗积分': redeemInfo.pointsSpent,
            '兑换时间': new Date(redeemInfo.redeemTime).toLocaleString('zh-CN'),
            '库存变化': `${redeemInfo.stockBefore} → ${redeemInfo.stockAfter}`,
            '积分变化': `${redeemInfo.pointsBefore} → ${redeemInfo.pointsAfter}`,
            '状态': '已完成',
            '处理人': '系统自动'
        });
        
        if (success) {
            // 执行兑换操作
            product.stock -= 1;
            
            // 更新用户积分（如果是全局用户）
            currentUser.spadePoints -= product.spadePoints;
            
            // 创建新订单.
            const newOrder = {
                id: 'ord-' + Date.now(),
                userId: currentUser.id,
                productId: product.id,
                productName: product.name,
                pointsSpent: redeemInfo.pointsSpent,
                pointsType: redeemInfo.pointsType,
                status: 'completed',
                createdAt: redeemInfo.redeemTime,
                shippingAddress: {
                    name: currentUser.name,
                    address: '123 ByteDance Road, Chaoyang District, Beijing',
                    phone: '13800138000'
                }
            };
            
            // 添加到订单列表.
            orders.push(newOrder);
            
            // 更新UI.
            // 如果用户通过表单输入了积分，需要重新获取输入的积分值
            const spadePointsInput = document.getElementById('spadePointsInput');
            const updatedSpadePoints = parseInt(spadePointsInput?.value) || currentUser.spadePoints;
            
            generateRedeemContent(products, updatedSpadePoints);
            generateProfileContent();
            
            // 显示成功消息.
            alert(`成功兑换 ${product.name}！\n\n消耗积分：${redeemInfo.pointsType} ${redeemInfo.pointsSpent}\n剩余积分：${redeemInfo.pointsAfter}`);
        } else {
            alert('兑换失败，请稍后重试！');
        }
    } catch (error) {
        console.error('兑换过程中发生错误:', error);
        alert('兑换过程中发生错误，请稍后重试！');
    }
}

// 管理后台功能
// 切换管理后台选项卡
function switchTab(tabName) {
    // 隐藏所有选项卡内容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // 显示选中的选项卡内容
    const selectedTab = document.getElementById(`${tabName}-tab`);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // 更新选项卡按钮状态
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // 激活选中的选项卡按钮
    event.target.classList.add('active');
}

// 添加新礼品
function addGift() {
    const addGiftModal = document.getElementById('addGiftModal');
    if (addGiftModal) {
        addGiftModal.style.display = 'block';
    }
}

// 关闭模态框
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// 导入数据
function importData() {
    alert('Import data functionality will be implemented here.');
}

// 导出数据
function exportData() {
    alert('Export data functionality will be implemented here.');
}

// 保存设置
function saveSettings() {
    alert('Settings saved successfully!');
}

// API调用函数（实际后端API）.
async function fetchFromAPI(endpoint, method = 'GET', data = null) {
    try {
        const baseUrl = 'http://localhost:3001';
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${baseUrl}${endpoint}`, options);
        const result = await response.json();
        
        return { success: response.ok, data: result };
    } catch (error) {
        console.error('API Error:', error);
        // 如果API调用失败，回退到模拟数据.
        return fetchFromMockAPI(endpoint);
    }
}

// 模拟API调用（作为后备）.
async function fetchFromMockAPI(endpoint) {
    try {
        // 模拟API调用延迟.
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 根据端点返回相应的数据.
        if (endpoint === '/api/products') {
            return { success: true, data: products };
        } else if (endpoint === '/api/users') {
            return { success: true, data: users };
        } else if (endpoint === '/api/orders') {
            return { success: true, data: orders };
        } else if (endpoint.startsWith('/api/users/')) {
            // 处理单个用户请求.
            return { success: true, data: currentUser };
        } else if (endpoint.startsWith('/api/orders/user/')) {
            // 处理用户订单请求.
            return { success: true, data: orders.filter(order => order.userId === currentUser.id) };
        } else {
            return { success: false, error: 'Endpoint not found' };
        }
    } catch (error) {
        console.error('Mock API Error:', error);
        return { success: false, error: 'Failed to fetch data' };
    }
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有需要滚动动画的元素
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // 初始检查
    setTimeout(() => {
        observer.disconnect();
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('revealed');
        });
    }, 100);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化滚动动画
    initScrollAnimations();
    
    // 添加滚动监听
    window.addEventListener('scroll', function() {
        // 导航栏滚动效果
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // 滚动进度条
        const scrollProgress = document.getElementById('scrollProgress');
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });
    
    // 生成兑换内容
    if (typeof generateRedeemContent === 'function') {
        generateRedeemContent();
    }
    
    // 生成个人资料内容
    if (typeof generateProfileContent === 'function') {
        generateProfileContent();
    }
    
    // 生成货币奖励内容
    if (typeof generateMonetaryRewardsContent === 'function') {
        generateMonetaryRewardsContent();
    }
    
    // 初始化数据可视化
    initDataVisualization();
    
    // 初始化管理后台
    if (typeof initAdminDashboard === 'function') {
        initAdminDashboard();
    }
    
    // 显示页面
    document.body.style.opacity = '1';
});

// 初始化数据可视化
function initDataVisualization() {
    setTimeout(() => {
        createPointsChart();
        createRedemptionChart();
        createRewardsChart();
        createUserActivityChart();
    }, 1000); // 延迟初始化，确保DOM元素已加载
}

// 创建积分分布图表
function createPointsChart() {
    const ctx = document.getElementById('pointsChart');
    if (!ctx) return;
    
    // 准备数据
    const userPoints = users.map(user => ({
        name: user.name,
        spadePoints: user.spadePoints,
        xdePoints: user.xdePoints || 0
    }));
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: userPoints.map(u => u.name),
            datasets: [
                {
                    label: 'SPADE Points',
                    data: userPoints.map(u => u.spadePoints),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'XDE Points',
                    data: userPoints.map(u => u.xdePoints),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'User Points Distribution',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Points'
                    }
                }
            }
        }
    });
}

// 创建兑换记录图表
function createRedemptionChart() {
    const ctx = document.getElementById('redemptionChart');
    if (!ctx) return;
    
    // 准备数据
    const productRedemptions = {};
    orders.forEach(order => {
        if (!productRedemptions[order.productName]) {
            productRedemptions[order.productName] = 0;
        }
        productRedemptions[order.productName]++;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(productRedemptions),
            datasets: [{
                data: Object.values(productRedemptions),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(199, 199, 199, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Product Redemption Distribution',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// 创建奖励统计图表
function createRewardsChart() {
    const ctx = document.getElementById('rewardsChart');
    if (!ctx) return;
    
    // 准备数据
    const rewardsByStatus = {
        pending: monetaryRewards.filter(r => r.status === REWARD_STATUS.PENDING).length,
        approved: monetaryRewards.filter(r => r.status === REWARD_STATUS.APPROVED).length,
        paid: monetaryRewards.filter(r => r.status === REWARD_STATUS.PAID).length,
        cancelled: monetaryRewards.filter(r => r.status === REWARD_STATUS.CANCELLED).length
    };
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pending', 'Approved', 'Paid', 'Cancelled'],
            datasets: [{
                data: Object.values(rewardsByStatus),
                backgroundColor: [
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Rewards Status Distribution',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 创建用户活动图表
function createUserActivityChart() {
    const ctx = document.getElementById('userActivityChart');
    if (!ctx) return;
    
    // 准备数据
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const redemptionData = [5, 8, 12, 7, 15, 10];
    const rewardData = [2, 4, 3, 5, 7, 6];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Redemptions',
                    data: redemptionData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Rewards',
                    data: rewardData,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Activity Trend',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Count'
                    }
                }
            }
        }
    });
}

// 计算用户积分
function calculateUserPoints(userId, activityData) {
    try {
        const user = users.find(u => u.id === userId);
        if (!user) {
            throw new Error('用户不存在');
        }
        
        // 基础积分
        let basePoints = 0;
        
        // 根据培训完成度计算积分
        if (activityData.trainingCompleted) {
            basePoints += activityData.trainingCompleted * 0.5;
        }
        
        // 根据贡献度计算积分
        if (activityData.contribution) {
            basePoints += activityData.contribution * 2;
        }
        
        // 根据参与度计算积分
        if (activityData.participation) {
            basePoints += activityData.participation * 1;
        }
        
        // 计算总积分
        const totalPoints = Math.round(basePoints);
        
        // 更新用户积分
        user.spadePoints += totalPoints;
        if (!user.xdePoints) user.xdePoints = 0;
        user.xdePoints += totalPoints;
        
        console.log(`用户 ${user.name} 获得 ${totalPoints} 积分`);
        return totalPoints;
    } catch (error) {
        console.error('计算用户积分失败:', error);
        throw error;
    }
}

// 发放积分
async function awardPoints(userId, points, reason) {
    try {
        const user = users.find(u => u.id === userId);
        if (!user) {
            throw new Error('用户不存在');
        }
        
        // 更新用户积分
        user.spadePoints += points;
        if (!user.xdePoints) user.xdePoints = 0;
        user.xdePoints += points;
        
        // 创建积分记录
        const pointsRecord = {
            id: 'points-' + Date.now(),
            userId: user.id,
            userName: user.name,
            points: points,
            reason: reason,
            type: 'award',
            createdAt: new Date().toISOString()
        };
        
        // 同步到飞书
        await addFeishuSheetRow(FEISHU_CONFIG.SHEETS.REWARDS, {
            '记录ID': pointsRecord.id,
            '用户ID': pointsRecord.userId,
            '用户名': pointsRecord.userName,
            '积分': pointsRecord.points,
            '原因': pointsRecord.reason,
            '类型': '积分奖励',
            '创建时间': new Date(pointsRecord.createdAt).toLocaleString('zh-CN')
        });
        
        console.log(`成功给用户 ${user.name} 发放 ${points} 积分`);
        return pointsRecord;
    } catch (error) {
        console.error('发放积分失败:', error);
        throw error;
    }
}